# Deployment

## Vercel static export

The existing `output: 'export'` mode is retained. Deploy the repository to the existing Vercel project with the normal Next.js build command (`npm run build`). Set the two public Supabase environment variables in Vercel before enabling submission forms. Next.js writes the export to `out/`.

Static export is also compatible with file hosting if the host serves directory `index.html` pages and `_next` assets. The `deploy.sh` helper can package the static export for cPanel, but Vercel is the recommended deployment and the helper does not deploy to production.

## Release checklist

- Configure and test Supabase SQL and both Edge Functions; add approved admin UUIDs.
- Configure Vercel public Supabase values; Edge Function secrets live in Supabase only.
- Confirm contact recipient/workflow, offered services, all photo consents, staff content and privacy/terms approval.
- Run `npm run typecheck` and `npm run build`; check generated routes, metadata, sitemap and robots output.
- Test one review submission, moderation, public visibility and removal; test one enquiry record and failure path. Do not use fake-success screenshots as proof.
- Verify the public contact details and canonical deployment URL before launch.

Production deployment is not performed as part of this implementation.
