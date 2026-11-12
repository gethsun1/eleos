# Implementation status

Updated: 2026-11-12

| Milestone | Status | Notes |
|---|---|---|
| M0 Discovery and architecture | VERIFIED | Proposal PDF fully extracted and reviewed; repository and static export audited; risks and decisions documented. |
| M1 Design system and shared components | VERIFIED | Forest/sage/cream design system, shared shell, responsive navigation and reusable page hero implemented. |
| M2 Website redesign | PARTIAL | All planned routes implemented and statically built. Gallery imagery, story, mission/vision, service availability, team content and legal drafts await Eleos approval. |
| M3 Backend and visitor reviews | PARTIAL | Eleos Supabase project linked; schema/RLS migration applied; review function deployed and smoke-checked. Approved admin account and moderation workflow still need setup. |
| M4 Enquiry system | PARTIAL | Enquiry function deployed and invalid-input smoke-checked. Admin inbox workflow and email forwarding/recipient are not configured. |
| M5 SEO, accessibility and performance | PARTIAL | Page-specific metadata, sitemap, robots and accessible controls implemented. Browser/mobile audit and Lighthouse measurements not performed. |
| M6 Production readiness | PARTIAL | Lint, TypeScript and static export checks pass. Live database setup, integration acceptance, deployment and client approvals remain. |

## Completed
- Read all 10 pages of `Eleos_Website_Review_Redesign_Proposal.pdf`.
- Audited App Router pages, shared components, assets, scripts and static-export configuration.
- Identified unsupported contact details, fictional testimonials/team, unverified statistics/claims, fake form success, missing legal routes and static-hosting constraints.
- Confirmed the source has no `.env` or configured backend.
- Reviewed existing media; available images contain staged people and activities that cannot be verified as Eleos staff, visitors or premises, so the redesign does not use them publicly.

## Decisions
- Retain Next.js static export to preserve existing Vercel/flat-file deployment compatibility.
- Use Supabase for persistent submissions and auth, protected by database RLS; the database and Edge Functions are deployed to the Eleos project.
- Enquiries will be persisted, not falsely reported as emailed. Email forwarding is deferred until recipient and provider are confirmed.
- Browser code uses only the Supabase publishable key; secret keys are limited to Edge Function secrets. Public submission functions use fixed writes, validation, a honeypot and database-backed salted-IP rate limits.
- Added `@supabase/supabase-js` as the only new runtime dependency.
- Do not publish any testimonials, ratings, credentials, hours, emergency contact or map pin without evidence.

## Test results
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; static routes generated.
- `bash -n deploy.sh`: passed.
- Exported HTML audit: 13 route files checked, 0 broken internal links; page-specific canonical/Open Graph URLs verified.
- Browser/mobile visual QA: unavailable (computer-use browser host did not start).
- Deno Edge Function typecheck and PostgreSQL migration execution: unavailable (Deno is not installed; local PostgreSQL has no accessible workspace role).

## Blockers and client items
- Add approved administrator account(s) to the allowlist; set the same public Supabase URL and publishable key in Vercel; confirm canonical production domain, contact recipient/email-provider setup, service list, team, image permissions, reviews and legal copy.

## Next milestone
- Obtain the required client configuration and approvals, then apply the migration/functions and complete live backend and browser acceptance checks.
