# QA report

## Status

Verification is partial: source build checks and core Supabase deployment smoke checks are complete; admin workflow, real submissions and browser QA remain unverified.

## Implemented

- Replaced fictional staff, testimonials, milestones, response promises, credentials, clinic capabilities and statistics in redesigned routes with neutral copy.
- Added responsive route designs for Home, About, Our Story, Services, Team, Gallery, Reviews, Contact, Privacy Policy, Terms and Admin.
- Added Supabase schema/RLS and Edge Function source for persistent moderation-gated reviews and enquiry storage, with server-side validation and hashed-IP rate limits.
- Added page metadata, sitemap and robots routes.
- Added page-specific Open Graph titles/URLs and canonical URLs.

## Live backend checks

- Supabase project `eleos` is linked; initial migration is applied, all four tables have RLS enabled, and both Edge Functions are active with JWT verification disabled as intended.
- Invalid review and enquiry requests returned HTTP 400; public `get_review_summary` returned HTTP 200 with zero approved reviews.
- Database advisors reported one performance warning for the admin allowlist policy (`auth_rls_initplan`) and an informational notice that `submission_rate_limits` intentionally has no client-facing policy (RLS therefore denies client roles). The suggested policy rewrite is deferred because the generated migration timestamp precedes the already applied migration.
- Admin allowlist, authenticated moderation, valid visitor submissions and rate-limit behavior still need an end-to-end acceptance run.
- Enquiry email delivery is not implemented; records persist to the admin dashboard when configured.
- Client must review/approve legal copy, offered service categories, staff details and use rights for images.

## Measurements

- Lighthouse/Core Web Vitals: not measured.
- Browser keyboard/mobile visual QA: not performed; the computer-use browser host was unavailable in this session.
- TypeScript: passed with `npm run typecheck`.
- ESLint: passed with `npm run lint`.
- Static production export: passed with `npm run build`; intended static routes were generated.
- `bash -n deploy.sh`: passed.
- Exported-link audit: 13 generated route files checked; 0 broken internal links.
- SEO HTML spot check: page-specific titles, canonical URLs and Open Graph URLs verified in the export.
- PostgreSQL migration execution: passed through Supabase CLI against the remote project. Deno function typecheck was not run.

## Known issues to resolve before launch

- Replace `https://eleos.vercel.app` canonical origin if production origin changes.
- Provide approved replacement photographs and confirm publication permissions; current staged images are not used publicly.
- Add approved Supabase Auth administrator(s), configure Vercel public environment values, and use the documented backend acceptance checks.
- Review `deploy.sh` if cPanel deployment remains required.
- Next.js 16.4.6 warns that React 18 support is deprecated. The existing React version was retained to avoid an unverified major dependency upgrade.
