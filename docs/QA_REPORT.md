# Eleos pre-push and Vercel Preview readiness audit

Updated: 12 November 2026

## Decision

**BLOCKED — REQUIRED FIXES (Preview isolation/configuration).** The source build is clean and a feature-branch push would produce a Vercel Preview, but Vercel currently assigns the production Supabase URL and publishable key to Production, Preview and Development. The deployed Edge Functions are documented with the production site origin. A Preview would therefore share the production backend, while its browser-origin submissions are not configured for the Preview host. Do not push for client testing until Preview is isolated or its Supabase variables are deliberately disabled.

No files were staged or committed. Nothing was pushed or deployed. All Supabase production inspection in this audit used read-only SQL/catalog queries or list/inspect commands; no production rows or configuration were changed.

## 1. Git integrity

- Branch: `main`.
- Local `HEAD`: `603b42ad38206e8e5d912f7d0a2482c3722e2639`.
- `origin/main`: same SHA at audit time. Local branch has no committed delta from the remote base.
- `git status`: 18 modified tracked files and three untracked files; no staged changes.
- `.env.local` is ignored by `.gitignore` and appears as ignored, not staged. No credential-pattern matches were found in changed/untracked text files. No password, token, service-role key, or other secret is part of the proposed file set.
- No changes to `package.json`, package lockfiles, `next.config.js`, Vercel configuration, Supabase migrations, or Supabase functions. `.vercel/` is local link metadata and ignored by Git.
- No generated build directory is in the candidate file list. Build output is under the ignored `out/` directory.
- User-provided `Eleos_Website_Review_Redesign_Proposal.pdf` remains untracked and is excluded from the proposed commit. Existing user changes were preserved.
- Both source assets and their public copies match by SHA-256. `public/favicon.ico` is a valid four-size ICO derived from the supplied logo.

### Proposed commit file set (20 files)

```text
app/about/page.tsx
app/contact/page.tsx
app/gallery/page.tsx
app/globals.css
app/layout.tsx
app/our-story/page.tsx
app/page.tsx
app/privacy-policy/page.tsx
app/services/page.tsx
app/team/page.tsx
app/terms/page.tsx
assets/eleos_logo.jpeg
assets/eleos_wellness_rehabilitation_centre_cover.jpeg
components/organisms/Footer.tsx
components/organisms/Header.tsx
docs/QA_REPORT.md
lib/metadata.ts
public/eleos-logo.jpeg
public/favicon.ico
public/eleos_wellness_rehabilitation_centre_cover.jpeg
```

The PDF is intentionally omitted. Nothing has been staged, so this is the audited candidate set, not a staged index.

## 2. Admin account verification

- **PASS — account exists:** Read-only query against Supabase Auth found `admin@eleoswellness.co.ke`.
- **PASS — allowlist:** The account's actual Auth UUID matches a row in `public.eleos_admins` (`is_allowlisted = true`). The UUID is omitted from this repository report.
- No password was requested or inspected. No account or allowlist record was changed.
- Actual administrator login was **NOT RUN**; having an account and allowlist row does not prove the sign-in flow works.

## 3. Supabase readiness

### Read-only production state

- **PASS — migration history:** `202611120001` is the only local/remote migration and is applied remotely.
- **PASS — deployed functions:** `submit-review` and `submit-enquiry` are both `ACTIVE`, version 1, with `verify_jwt = false` for visitor submission endpoints.
- **PASS — RLS enabled:** `eleos_admins`, `reviews`, `enquiries` and `submission_rate_limits` all have RLS enabled.
- **PASS — policy inspection:** Admin allowlist reads are restricted to the caller's own UUID. Enquiry select/update/delete policies call `is_eleos_admin()`. Review moderation policies require that helper. The public review select policy allows approved reviews or admin access. No client role has a policy on the rate-limit table.
- **PASS — grants inspection:** Anonymous role has no enquiry or rate-limit select privilege; authenticated clients need the admin RLS policies for enquiry access and review updates. Anonymous review reads are granted but RLS filters rows. The allowlist table has an anon table grant but no anon row policy, so the query returns no rows to an anonymous role.
- Admin login/logout, admin route states, non-admin authenticated access denial, valid review/enquiry writes, moderation, approved-only public retrieval, and rate-limit behavior were **NOT RUN** in this audit. SQL policy inspection is not a substitute for role-context acceptance tests.

### Code review findings

- Admin page authenticates with Supabase email/password, checks the signed-in UUID against `eleos_admins`, and then fetches reviews/enquiries. Database RLS remains the actual authorization boundary; static route hiding is not relied on as the security control.
- Review form invokes `submit-review`; public list filters to `approved` and requests the approved-only aggregate RPC. Admin actions set approved/rejected states and can delete reviews.
- Enquiry form invokes `submit-enquiry`; admin can view and update statuses. Enquiry deletion has a browser confirmation; review deletion currently has no confirmation.
- Both functions validate fields, accept a honeypot, call the hashed-IP rate-limit RPC and persist using server-side credentials. Raw IPs are hashed before rate-limit storage. A malformed JSON request currently reaches the generic catch and returns HTTP 500 rather than a client-validation 400; record this for a follow-up fix.
- Runtime Edge Function checks, Deno type checks, and valid/invalid/rate-limit acceptance tests are **NOT RUN**. Do not represent the workflows as verified.

## 4. Build and content verification

| Check | Status | Evidence |
|---|---|---|
| `npm run lint` | PASS | Exit 0, no warnings or errors. |
| `npm run typecheck` | PASS | Exit 0. |
| `npm run build` | PASS | Static export completed with 13 route `index.html` files. Existing warning: Next.js 16.4.6 deprecates React 18 support. |
| `git diff --check` | PASS | No whitespace errors. |
| Exported internal-link audit | PASS | 13 exported routes checked; 0 broken internal links. |
| Exported local image/icon audit | PASS | 0 missing local image/icon assets. Logo, cover and favicon exist in `out/`; homepage, About, Story and Gallery include the cover asset. |
| Placeholder/internal-note scan | PASS | 0 matches for awaiting/not-yet/draft-review/being-prepared markers in exported HTML. |
| Contact detail check | PASS | Exported destinations are `tel:+254711143210`, `https://wa.me/254711143210`, and `mailto:eleoswellnesscentre@gmail.com`; pages identify Gatitu, Thika, Kenya. |
| Unsupported service content check | BLOCKED | Service labels (mental-health support, addiction recovery, family/marriage therapy, corporate wellness, therapeutic retreats, community outreach) remain topics inherited from earlier material; actual current offering is unconfirmed. Copy asks users to contact Eleos about availability but client confirmation is still needed before production. |
| Browser visual/keyboard/mobile QA | BLOCKED | Computer-use browser host unavailable in this session. |
| Lighthouse/performance | NOT RUN | No score or Core Web Vitals measurement. |

No unsupported founding history, staff profiles/qualifications, clinical outcome statistics, opening hours, response-time guarantee, crisis promise, or fake reviews were found in the reviewed public route copy. Proposed mission/vision/values remain subject to client confirmation. The privacy retention/deletion policy is still not defined and should be confirmed before launch.

## 5. Vercel Preview versus Production

- **PASS — linked project inspected:** Vercel project is `eleos`, Next.js, Node 22.x, build command defaults to `npm run build` / `next build`.
- **PASS — Git connection/branch evidence:** Project Git link reports production branch `main`. Latest deployment for commit `603b42ad38206e8e5d912f7d0a2482c3722e2639` is `READY`, target `production`, branch `main`, and owns `https://eleos.vercel.app`.
- **PASS — deployment behavior:** A push to `main` would trigger a Production deployment. The project has Preview deployments for non-production branches; the safest code path is a new feature branch, not `main`.
- **BLOCKED — Preview backend isolation:** Vercel lists `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in all three environments (Production, Preview, Development), so Preview uses the same configured project values. The Edge Function CORS code allows the configured `SITE_ORIGIN` and defaults to `https://eleos.vercel.app`; the documented production configuration has no Preview origin. Do not use Preview forms/admin against production data.
- Recommended path: first choose an isolated Supabase Preview project/branch and Preview-only URL/key plus an allowed Preview origin, or deliberately leave Preview Supabase variables unset so forms remain disabled during visual review. This requires explicit owner approval before changing Vercel or Supabase settings. Then push a dedicated non-`main` branch to trigger Vercel Preview and verify its URL; do not merge or push to `main` as part of this review.
- Live production still serves the previous deployment. This pass has not been published.

## 6. Remaining approvals and acceptance

- Approve isolated Preview backend configuration or a forms-disabled visual-only Preview.
- Confirm actual service list/availability and the proposed mission, vision and values.
- Confirm privacy retention/deletion policy and legal copy for production.
- Run non-admin RLS denial, admin login, review submission/moderation/publication, enquiry submission/status and rate-limit tests against an isolated Preview backend.
- Complete browser/mobile/keyboard and Lighthouse review.
- Add review-delete confirmation and handle malformed JSON as a 400 in a follow-up code change, then rerun checks.

## Exact preview branch commands (not executed)

After Preview isolation is approved and configured:

```bash
git switch -c codex/eleos-second-pass-preview
git add app/about/page.tsx app/contact/page.tsx app/gallery/page.tsx app/globals.css app/layout.tsx app/our-story/page.tsx app/page.tsx app/privacy-policy/page.tsx app/services/page.tsx app/team/page.tsx app/terms/page.tsx assets/eleos_logo.jpeg assets/eleos_wellness_rehabilitation_centre_cover.jpeg components/organisms/Footer.tsx components/organisms/Header.tsx docs/QA_REPORT.md lib/metadata.ts public/eleos-logo.jpeg public/favicon.ico public/eleos_wellness_rehabilitation_centre_cover.jpeg
git diff --cached --check
git commit -m "feat: prepare Eleos second-pass redesign"
git push -u origin codex/eleos-second-pass-preview
```

These commands have **not** been run. The PDF, `.env.local`, `.vercel/`, and generated output are excluded. No commit, push, deployment, production database write, or production setting change has occurred.
