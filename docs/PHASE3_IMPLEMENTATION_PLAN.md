# Phase 3 implementation plan

## Audit findings

- The repository is a clean `main` checkout. Existing Supabase review moderation, persisted enquiries, allowlisted admin access, RLS and public submission Edge Functions are in place and must remain intact.
- The site is configured for Next.js static export. A secure server-side Groq integration cannot run in that output mode. Phase 3 uses a Vercel App Router route handler and keeps public pages statically rendered where possible; deployment therefore needs the standard Next.js Vercel runtime.
- The enquiry category list is constrained in both the Edge Function and Postgres. A forward-only migration and matching Edge Function validation will add the approved Phase 3 enquiry topics.
- Current site copy includes clinical, availability and confidentiality claims that lack supporting materials in this repository. New content will avoid strengthening these claims; the existing copy needs client review.
- No client evidence for credentials, Facebook, Instagram or X profile URLs was found in the repository. Existing LinkedIn URL remains as previously approved. The supplied video and rehabilitation prices can be published with source/terms caveats.

## Decisions

- Keep the existing Next.js, Supabase and Vercel architecture; do not add dependencies.
- Use a server-only Groq route with `GROQ_API_KEY` and optional `GROQ_MODEL`. Use Groq's currently listed production `openai/gpt-oss-120b` as the default.
- Chat history remains in browser memory only and is sent to Groq only to answer the active conversation. No chat transcript is persisted or sent to Supabase.
- Add training, community, credentials and service information routes. Publish supplied price stages without a total until package terms are confirmed.
- Do not publish an expansion or description for ACL.
- Keep social links centralized and unset until official profile URLs are supplied.
- Keep service/course/offering copy source-managed for now; the existing admin area manages enquiries and reviews, and adding a CMS would expand scope without an approved content workflow.

## Client clarifications to retain

ACL expansion; fee schedule inclusions/eligibility/terms; exact practitioner scope and service availability; VIP inclusions; training prerequisites/duration/delivery/certification; placement process, supervision, capacity, institution eligibility and fees; credentials and publication permission; Karen walk date/organizer attribution; official Facebook, Instagram and X URLs; privacy notice for third-party Groq processing.

## Milestones

- M0 audit and plan: complete.
- M1 service taxonomy, education, community and navigation: in progress.
- M2 pricing, credentials and social configuration: in progress.
- M3 server-side Groq endpoint and safety controls: in progress.
- M4 responsive chatbot and human contact handoff: in progress.
- M5 enquiry categories and Supabase persistence: in progress; migration must be applied before deployment.
- M6 metadata, privacy, accessibility and performance: in progress.
- M7 acceptance checks and deployment readiness: pending verification.

No production Supabase migration, Vercel environment change, commit, push or deployment is authorized by this implementation work.
