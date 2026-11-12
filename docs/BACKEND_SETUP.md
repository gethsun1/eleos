# Backend setup

## 1. Create/configure Supabase

1. The Eleos project is linked locally as `rblcrkndtdjmkdjjqmiw` (region `eu-west-3`). Its API URL is `https://rblcrkndtdjmkdjjqmiw.supabase.co`.
2. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in local `.env.local` and in the Vercel project environment. The local URL has been filled in; copy the existing publishable key into Vercel separately. Publishable keys are public values; never put a secret key in the browser environment.
3. The initial schema in `supabase/migrations/202611120001_initial_schema.sql` has been applied to the remote database.
4. The functions in `supabase/functions/submit-review` and `supabase/functions/submit-enquiry` are deployed. These endpoints are intentionally public for visitor submissions (`verify_jwt = false`); each validates inputs, applies a keyed rate limit and has no public read or moderation operation.
5. A random 32-byte `RATE_LIMIT_SALT` and `SITE_ORIGIN=https://eleos.vercel.app` are configured as Edge Function secrets. Supabase injects `SUPABASE_URL` and its server-only secret key automatically; the functions read `SUPABASE_SECRET_KEYS.default` (with legacy `SUPABASE_SERVICE_ROLE_KEY` fallback).
6. Create the administrator through Supabase Auth using Eleos-approved email addresses. Obtain each resulting Auth user UUID and, as project owner, add it to the allowlist: `insert into public.eleos_admins(user_id) values ('AUTH-USER-UUID');`.
7. Before enabling the forms on the live site, add the approved administrator UUID(s), then test admin login/moderation and a real enquiry/review workflow. Smoke checks already confirmed both deployed endpoints reject invalid submissions and the public review summary RPC returns an empty summary.

## 2. Review lifecycle

Public review form supports ratings from 1–5, optional written feedback and anonymous display. Every submission is pending. Only approved reviews can be read publicly. An administrator can approve, reject/unpublish or delete a submission. Published average and count are calculated from approved database rows only. The UI shows an honest empty state if no reviews are approved.

## 3. Enquiries

The form persists name, email, optional telephone, category and message. Supabase admins can view and mark records reviewed/closed at `/admin/`. No email notification or forwarding is configured; an administrator must check the dashboard unless Eleos approves an email provider and recipient for a follow-up Edge Function.

## 4. Rate limits and spam

Each function accepts at most three submissions per salted IP hash per 10-minute window per form type. The request is also validated server-side; honeypot requests are silently discarded. The limit is enforced in Postgres through a service-role-only function. `submission_rate_limits` stores hashes, not raw IPs. Retention/deletion policy for submissions and rate-limit hashes should be confirmed by Eleos.

## 5. Local development

Copy `.env.example` to `.env.local`, fill the public Supabase values, and run `npm run dev`. Edge Functions require Supabase CLI/local Supabase or a deployed project. Do not use actual sensitive visitor data for development.
