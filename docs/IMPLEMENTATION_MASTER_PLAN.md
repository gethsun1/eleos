# Eleos implementation master plan

## M0 — discovery and architecture

### Existing architecture
- Next.js App Router with React 18, TypeScript, Tailwind CSS and `output: 'export'`.
- Routes currently present: home, About, Our Story, Services and Contact.
- Shared layout uses a header, footer and hand-built components; Tailwind and a large unused shadcn component set are installed.
- Static assets are duplicated between `assets/`, `public/` and the checked-in generated `deploy/` directory.
- Deployment scripts build a static export. `deploy.sh` is a legacy optional cPanel packager; Vercel remains the approved target.
- Build configuration currently ignores TypeScript and ESLint errors, weakening release checks.

### Existing defects
- Static testimonials, staff identities, credentials, treatment claims, statistics, milestones and emergency details are unsupported and must be removed.
- Contact form reports success without delivery, requests urgency, and claims HIPAA protections while displaying a fictitious US crisis line.
- Contact page has false contact/location details; public business details confirmed for this work are Gatitu, Thika, +254 711 143210, and eleoswellnesscentre@gmail.com.
- Several buttons have no destination; privacy and terms links lead to missing routes.
- Site navigation omits Gallery, Reviews and Team; metadata is generic; the existing export has no server/API runtime.

### Proposed architecture
- Retain static export and Vercel compatibility for the public website. Static Next.js cannot host API routes, server actions, server sessions or server-side moderation.
- Use Supabase as a managed database/auth service, accessed through its browser SDK with only project URL and publishable key. RLS is mandatory; never include a secret key in frontend code.
- Public reviews are validated and inserted as `pending` by a Supabase Edge Function; direct public writes are revoked. Only published reviews are selectable publicly. An authenticated admin is authorized through a database-managed `eleos_admins` allowlist and restrictive RLS.
- Public enquiry submissions are persisted in a private table and visible only to authorized admins. This is real persistence, not email delivery. Eleos must confirm the recipient/handling workflow; optional email forwarding needs a provider and server-side Edge Function secrets.
- Add SQL schema and policies plus setup instructions. Public submissions use Edge Function validation, a honeypot, and a Postgres-backed salted-IP rate limit. The code is implemented but requires a configured Supabase project to activate and verify.
- Do not ship an admin credential, hardcoded password, fake ratings, or unconfigured live integration.

### Design direction
- Forest green, sage, warm cream, restrained brass and charcoal tokens; editorial headings, generous whitespace, abstract CSS brand art, calm responsive cards and direct contact actions.
- Existing gallery assets depict people and activities but cannot be verified as Eleos staff, visitors or premises; they are not used publicly. Eleos should provide approved imagery and confirm publication consent before deployment.

### Backend and database strategy
- Supabase is selected because hosted Postgres, Auth, RLS and REST endpoints work with a static exported frontend. It provides persistence without changing Vercel's deployment model.
- Keep integration credential-gated through `.env.local`; database setup and admin allowlisting are documented. No credentials are present in the repository.
- Contact form submissions are persisted. Actual email forwarding is not configured because there is no approved delivery provider/API credential or confirmed enquiry recipient/process.

### Security considerations
- RLS enabled on all tables; public can read only approved reviews and invoke fixed Edge Function submission handlers; only allowlisted authenticated admins can read/manage submissions.
- Database constraints enforce rating, field length and enum values. Supabase secret keys must remain in Edge Function secrets only.
- Reviews and enquiry copy instruct people not to send health histories or emergency requests. Privacy policy describes actual data flow and requires client/legal review.
- Admin allowlisting occurs in SQL by auth user UUID; no self-service privilege escalation.

### Implementation milestones
1. M0 discovery and documentation (this file plus status).
2. M1 tokens, shell, reusable page primitives, navigation and responsive layout.
3. M2 route redesign and accurate content; Gallery, Reviews, Team, Privacy and Terms routes.
4. M3 Supabase schema/client, review submission and admin moderation UI.
5. M4 persistent enquiry form with truthful state and documented email limitation.
6. M5 metadata, sitemap, robots, semantics and accessibility/performance review.
7. M6 type checks, production build/export, route and integration setup review; report blockers awaiting client configuration.

### Testing strategy
- Run TypeScript checking and production static export. Check generated route output and search for unverified contact/claims.
- Backend-dependent operations cannot be verified without a Supabase project and credentials; document SQL/RLS setup and the exact live checks still required.
- A local exported-HTML check verifies internal links and route metadata; visual browser QA is attempted only when a computer-use browser is available.

### External dependencies and client information required
- Supabase project URL and publishable key; approved Eleos admin email(s) to create Auth users and then allowlist UUIDs.
- Confirm offered services, mission/vision wording, staff/team profiles, facility/gallery consent, official social accounts, and final privacy/terms approval.
- Confirm who receives enquiries and whether a managed email provider should forward persisted enquiries; provider account/API credentials are not supplied.
- Confirm review anonymity policy and data retention period.

## M1–M6 implementation decisions
- See `ARCHITECTURE.md`, `BACKEND_SETUP.md`, `DEPLOYMENT.md` and `CLIENT_INFORMATION_REQUIRED.md` for implementation and setup details.
