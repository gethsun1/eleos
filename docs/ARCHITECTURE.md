# Architecture

## Runtime and deployment

The application remains a Next.js App Router static export (`output: export`) hosted on Vercel. Public routes are generated at build time. Client interactions call Supabase Auth, PostgREST and Edge Functions from the browser. This avoids changing the site's hosting runtime or relying on Next.js API routes, which are not emitted by static export.

## Data flow

- **Reviews:** Browser form → `submit-review` Supabase Edge Function → input validation, honeypot check and IP hash rate limit → `reviews` row with `pending` status. Public page reads approved rows only. Admin signs in through Supabase Auth; database RLS allows moderation only for UUIDs in `eleos_admins`.
- **Enquiries:** Browser form → `submit-enquiry` Edge Function → validation and rate limit → `enquiries` table. Admins can read/manage enquiries. Email forwarding is not implemented until Eleos approves a recipient and email provider.
- **Admin:** Static `/admin/` page authenticates with Supabase email/password. It does not contain or expose a privileged key. SQL allowlisting is a separate owner-controlled step.

## Security boundaries

- Browser receives only Supabase URL and public publishable key.
- Database RLS is enabled; direct public inserts are revoked so submissions cannot bypass Edge Function validation/throttling.
- `SUPABASE_SECRET_KEY` is configured only as a Supabase Edge Function secret and never stored in the website environment.
- IP addresses are salted and hashed before rate-limit storage; raw IPs are not written to the application tables.
- Admin authorization is an allowlist table, not a hidden route or client-side password.
- No confidential clinical details are requested. Form notices discourage visitors from sending them.

## Trade-offs and limitations

- Static pages do not have server-rendered review counts; reviews are loaded after page render. SEO metadata is available at build time.
- Vercel static frontend cannot itself verify admin permissions; Supabase RLS is the authority.
- Edge Function IP header behavior should be checked on the deployed Supabase edge region. Rate limiting fails closed if its RPC is unavailable.
- Enquiry persistence is real, but automated email delivery and operational response-time commitments are not configured.
- The legal copy is a review draft and requires client approval.

## References

- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports): static export does not support dynamic request handlers, server actions or the Next.js runtime.
- [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security): grants and RLS policies must both be scoped; secret keys bypass RLS and must stay server-side.
- [Supabase API keys](https://supabase.com/docs/guides/getting-started/api-keys): use publishable keys in browser code and secret keys only in controlled backend components.
