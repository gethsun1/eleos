# Deployment

## Vercel Next.js runtime

Phase 3 adds `/api/chat`, which calls Groq from a server-side Next.js route. Static export cannot run this endpoint, so `output: 'export'` was removed. Deploy to the existing Vercel project using its standard Next.js build/runtime; public pages remain pre-renderable. The legacy checked-in `deploy/` static package does not include the chatbot and is no longer a complete supported deployment for this build.

Configure `GROQ_API_KEY` in Vercel Project → Settings → Environment Variables for Production, Preview and Development environments where chat should run. Add optional server-only `GROQ_MODEL` to override the default `openai/gpt-oss-120b`. Do not use a `NEXT_PUBLIC_` prefix. Redeploy after adding or changing environment variables. The repository's local `.env.local` is ignored and does not populate Vercel.

The route currently applies a best-effort, per-function-instance throttle. It is not a globally shared serverless rate limiter. Provision a shared limiter before high-volume public use; do not treat the in-memory throttle as protection against distributed abuse.

The branch `codex/eleos-phase3-implementation` is configured in `vercel.json` to skip automatic deployment while its Groq and Preview backend configuration is pending. Remove or revise that branch rule after Preview isolation and environment setup are complete.

## Release checklist

- Apply migration `20261116140757_phase3_enquiry_categories.sql` and deploy the updated `submit-enquiry` Edge Function before using expanded enquiry topics. No Supabase migration was applied remotely as part of this work.
- Configure and test Supabase setup and both Edge Functions; add approved admin UUIDs.
- Configure Vercel public Supabase values; Edge Function secrets live in Supabase only.
- Configure Vercel server-side `GROQ_API_KEY` (and optional `GROQ_MODEL`) for desired deployment environments.
- Confirm contact recipient/workflow, offered services, all photo consents, staff content and privacy/terms approval.
- Run `npm run typecheck` and `npm run build`; check generated routes, metadata, sitemap and robots output.
- Test one review submission, moderation, public visibility and removal; test one enquiry record and failure path. Do not use fake-success screenshots as proof.
- Verify the public contact details and canonical deployment URL before launch. The source currently follows the established `eleos.vercel.app` canonical; the client-supplied `www.eleoswellness.co.ke` could not be verified from this environment.

Production deployment is not performed as part of this implementation.
