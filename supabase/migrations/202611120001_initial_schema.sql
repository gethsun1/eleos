-- Eleos public submissions and authenticated moderation.
-- Apply via Supabase SQL editor or `supabase db push`.
create table if not exists public.eleos_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  added_at timestamptz not null default now()
);

create or replace function public.is_eleos_admin()
returns boolean language sql stable security invoker set search_path = public, auth
as $$ select exists (select 1 from public.eleos_admins where user_id = auth.uid()); $$;
revoke all on function public.is_eleos_admin() from public;
grant execute on function public.is_eleos_admin() to anon, authenticated;

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  rating smallint not null check (rating between 1 and 5),
  review_text text check (review_text is null or char_length(review_text) <= 1200),
  display_name text check (display_name is null or char_length(display_name) <= 80),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  moderated_at timestamptz,
  moderated_by uuid references auth.users(id)
);

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  phone text check (phone is null or char_length(phone) <= 32),
  category text not null check (category in ('General information','Services and programmes','Family enquiry','Visit to the centre','Other')),
  message text not null check (char_length(message) between 10 and 2000),
  created_at timestamptz not null default now(),
  status text not null default 'new' check (status in ('new','reviewed','closed'))
);

-- Function callers are Edge Functions using service_role only. Store only a keyed IP hash,
-- never a raw visitor IP. One row per hashed IP and submission type keeps this table bounded.
create table if not exists public.submission_rate_limits (
  ip_hash text not null,
  submission_type text not null check (submission_type in ('review','enquiry')),
  window_started_at timestamptz not null,
  attempts integer not null default 1,
  primary key (ip_hash, submission_type)
);

create or replace function public.consume_submission_limit(p_ip_hash text, p_submission_type text)
returns boolean language plpgsql security invoker set search_path = public
as $$
declare allowed boolean;
begin
  delete from public.submission_rate_limits where window_started_at < now() - interval '10 minutes';
  insert into public.submission_rate_limits(ip_hash, submission_type, window_started_at, attempts)
  values (p_ip_hash, p_submission_type, now(), 1)
  on conflict (ip_hash, submission_type) do update set
    attempts = case when submission_rate_limits.window_started_at < now() - interval '10 minutes' then 1 else submission_rate_limits.attempts + 1 end,
    window_started_at = case when submission_rate_limits.window_started_at < now() - interval '10 minutes' then now() else submission_rate_limits.window_started_at end;
  select attempts <= 3 into allowed from public.submission_rate_limits where ip_hash=p_ip_hash and submission_type=p_submission_type;
  return allowed;
end; $$;
revoke all on function public.consume_submission_limit(text,text) from public, anon, authenticated;
grant execute on function public.consume_submission_limit(text,text) to service_role;

alter table public.eleos_admins enable row level security;
alter table public.reviews enable row level security;
alter table public.enquiries enable row level security;
alter table public.submission_rate_limits enable row level security;

create policy "Admins can read their own allowlist row" on public.eleos_admins for select to authenticated using (user_id = auth.uid());
create policy "Published reviews are public" on public.reviews for select to anon, authenticated using (status='approved' or public.is_eleos_admin());
create policy "Admins can moderate reviews" on public.reviews for update to authenticated using (public.is_eleos_admin()) with check (public.is_eleos_admin());
create policy "Admins can remove reviews" on public.reviews for delete to authenticated using (public.is_eleos_admin());
create policy "Admins can view enquiries" on public.enquiries for select to authenticated using (public.is_eleos_admin());
create policy "Admins can update enquiries" on public.enquiries for update to authenticated using (public.is_eleos_admin()) with check (public.is_eleos_admin());
create policy "Admins can delete enquiries" on public.enquiries for delete to authenticated using (public.is_eleos_admin());

-- Only the Edge Functions can create submissions; this prevents bypassing IP throttles.
revoke all on public.eleos_admins, public.reviews, public.enquiries, public.submission_rate_limits from anon, authenticated;
revoke insert, update, delete on public.reviews from anon, authenticated;
revoke insert, update, delete on public.enquiries from anon, authenticated;
revoke all on public.submission_rate_limits from anon, authenticated;
grant select on public.reviews to anon, authenticated;
grant update, delete on public.reviews to authenticated;
grant select, update, delete on public.enquiries to authenticated;
-- The invoker helper must be able to query the allowlist. RLS still limits
-- authenticated users to their own row; anonymous callers see no rows.
grant select on public.eleos_admins to anon, authenticated;

create index if not exists reviews_public_order_idx on public.reviews(created_at desc) where status='approved';
create index if not exists reviews_pending_order_idx on public.reviews(created_at desc) where status='pending';
create index if not exists enquiries_recent_idx on public.enquiries(created_at desc);
create index if not exists submission_rate_limits_expiry_idx on public.submission_rate_limits(window_started_at);

-- Aggregate over every approved review without exposing additional review rows.
create or replace function public.get_review_summary()
returns jsonb language sql stable security invoker set search_path = public
as $$
  select jsonb_build_object(
    'average_rating', coalesce(round(avg(rating)::numeric, 2), 0),
    'review_count', count(*)
  ) from public.reviews where status='approved';
$$;
revoke all on function public.get_review_summary() from public;
grant execute on function public.get_review_summary() to anon, authenticated;

-- Supabase projects no longer necessarily grant Data API table access by default;
-- explicitly scope the browser roles above and service-role access to server functions.
grant all on public.eleos_admins, public.reviews, public.enquiries, public.submission_rate_limits to service_role;
