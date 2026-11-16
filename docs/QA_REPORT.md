# Eleos pre-push and Vercel Preview readiness audit

Updated: 12 November 2026 (post-push)

## Decision

**Preview readiness: BLOCKED. Production deployment: READY and live after explicit user approval to push `main`; full production acceptance remains incomplete.** Vercel assigns the production Supabase URL and publishable key to Production, Preview and Development. The deployed Edge Functions are documented with the production site origin. A Preview would therefore share the production backend, while its browser-origin submissions are not configured for the Preview host. Do not use Preview for client testing until it is isolated or its Supabase variables are deliberately disabled.

The user explicitly approved committing and pushing to `main`. Commit `3bd07e9be4ead1a4761a1d858b6a73c55f0cc4f0` was pushed; Vercel automatically created a Production deployment. All Supabase production inspection in this audit used read-only SQL/catalog queries or list/inspect commands; no production rows or settings were changed.

## 1. Git integrity

- Branch: `main`.
- Application commit: `3bd07e9be4ead1a4761a1d858b6a73c55f0cc4f0` (`feat: prepare Eleos second-pass redesign`).
- `origin/main` matched that SHA after the design push; this report update is a documentation-only follow-up reflecting the resulting deployment.
- `git status` after the design commit: no tracked changes and no staged changes; the unrelated proposal PDF remains untracked. The report-only follow-up is the only tracked change being committed now.
- `.env.local` is ignored by `.gitignore` and appears as ignored, not staged. No credential-pattern matches were found in changed/untracked text files. No password, token, service-role key, or other secret is part of the proposed file set.
- No changes to `package.json`, package lockfiles, `next.config.js`, Vercel configuration, Supabase migrations, or Supabase functions. `.vercel/` is local link metadata and ignored by Git.
- No generated build directory is in the candidate file list. Build output is under the ignored `out/` directory.
- User-provided `Eleos_Website_Review_Redesign_Proposal.pdf` remains untracked and is excluded from the proposed commit. Existing user changes were preserved.
- Both source assets and their public copies match by SHA-256. `public/favicon.ico` is a valid four-size ICO derived from the supplied logo.

### Committed file set (20 files)

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
- **PASS — Git connection/branch evidence:** Project Git link reports production branch `main`. Deployment for commit `3bd07e9be4ead1a4761a1d858b6a73c55f0cc4f0` is `READY`, target `production`, branch `main`, and owns `https://eleos.vercel.app`.
- **PASS — deployment behavior:** A push to `main` would trigger a Production deployment. The project has Preview deployments for non-production branches; the safest code path is a new feature branch, not `main`.
- **BLOCKED — Preview backend isolation:** Vercel lists `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in all three environments (Production, Preview, Development), so Preview uses the same configured project values. The Edge Function CORS code allows the configured `SITE_ORIGIN` and defaults to `https://eleos.vercel.app`; the documented production configuration has no Preview origin. Do not use Preview forms/admin against production data.
- Recommended path: first choose an isolated Supabase Preview project/branch and Preview-only URL/key plus an allowed Preview origin, or deliberately leave Preview Supabase variables unset so forms remain disabled during visual review. This requires explicit owner approval before changing Vercel or Supabase settings. Then push a dedicated non-`main` branch to trigger Vercel Preview and verify its URL; do not merge or push to `main` as part of this review.
- **PASS — live spot check:** `https://eleos.vercel.app/` returns HTTP 200, includes the new hero headline and cover reference, and the cover image URL returns HTTP 200.
- No separate/manual deploy command was run; the push to production branch `main` triggered Vercel's automatic Production deployment.

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

These branch-specific Preview commands were **not** run. The approved main-branch commit and push used the 20-file set above. The PDF, `.env.local`, `.vercel/`, and generated output were excluded. No production database write or production setting change occurred.

## 7. Team profile update

- **REMOVED — 13 November 2026:** Elsie Rodrot's Co-Founder profile and portrait (`/elsie-rodrot.webp`) were removed from the public website per client instruction as she is no longer working with Eleos. The Team page presents the Multidisciplinary Clinical Care Standard and the Eleos Care Pledge.

## Phase 3 implementation record — 16 November 2026

### Milestones

- **M0 — PASS:** Reviewed the current app routes, shared components, Supabase migrations/functions, admin UI, SEO files, Vercel/static-export configuration, project package scripts, prior QA report and backend guide. Current checkout was `main`, clean before Phase 3 work.
- **M1 — PASS (implementation):** Added Services taxonomy updates, Training & Education, Community & Wellness and Credentials & Recognitions pages; expanded navigation and contextual enquiry links.
- **M2 — PASS (implementation):** Published only the three supplied monthly prices. No total, inclusions, eligibility, discount or expiry is asserted. Added an empty credentials evidence architecture. Existing verified LinkedIn link is retained; Facebook, Instagram and X URLs are missing.
- **M3 — PASS (implementation; deployment pending):** Added server-only `/api/chat` using Groq Chat Completions. Default model is `openai/gpt-oss-120b`; `GROQ_MODEL` can override it. The model is currently listed in Groq's production catalogue. No SDK or other dependency was added.
- **M4 — PASS (implementation):** Added a responsive floating assistant with keyboard dismissal, focus, quick prompts, loading state and call/WhatsApp/email handoff.
- **M5 — PASS (code); BLOCKED (remote activation):** Expanded the form category choices and Supabase Edge Function validation; added migration `20261116140757_phase3_enquiry_categories.sql`. Migration and updated function are not yet deployed to Supabase.
- **M6 — PASS (implementation):** Added route metadata/sitemap entries, privacy disclosure for Groq processing and accessible lazy YouTube privacy-enhanced embed. Canonical convention remains `https://eleos.vercel.app/` as present in current source and prior Vercel QA; the client-provided custom domain could not be verified from this environment.
- **M7 — NOT RUN:** Acceptance checks below remain pending execution.

### Architecture and files

- Removed `output: 'export'` from `next.config.js` because static output cannot provide the secure Next.js `/api/chat` route. Vercel must use its normal Next.js server runtime. Public pages are still eligible for pre-rendering. The legacy static cPanel package is no longer a complete supported deployment for the chatbot.
- Added `app/api/chat/route.ts`, `lib/ai/eleos-knowledge.ts`, `components/chatbot/EleosChatbot.tsx`, `app/training/page.tsx`, `app/community/page.tsx`, `app/credentials/page.tsx`, `lib/social.ts`, and `docs/PHASE3_IMPLEMENTATION_PLAN.md`.
- Updated `app/services/page.tsx`, `app/contact/page.tsx`, `app/privacy-policy/page.tsx`, `app/layout.tsx`, `app/sitemap.ts`, shared header/footer, enquiry form, `supabase/functions/submit-enquiry/index.ts`, `docs/DEPLOYMENT.md` and this QA report.
- New dependency: **none**. No change to Supabase RLS, admin authorization, review functions, review moderation, or enquiry persistence lifecycle.

### Content requiring client confirmation

- **BLOCKED — ACL:** Expansion was not supplied; the acronym is not published or interpreted.
- **BLOCKED — pricing terms:** Month 1 KES 70,000; month 2 KES 60,000; month 3 KES 60,000. Confirm monthly inclusions, residential/outpatient applicability, assessments, accommodation/meals/medication, eligibility, availability window, additional costs, payment terms and assessment requirement. The KES 190,000 total is withheld until package continuity is confirmed.
- **BLOCKED — training details:** Confirm durations, fees, delivery modes, prerequisites, learning objectives, assessment and issuing/certification bodies for each course. No qualification or employment promise is made.
- **BLOCKED — student placements:** Confirm eligible institutions, application process, placement duration, supervision, fees and capacity for psychology/counselling internships and practica.
- **BLOCKED — clinical scope:** Confirm that chiropractic, elderly physiotherapy and dementia support are offered, with appropriate practitioner qualifications, scope and facilities; confirm VIP pathway features. Copy asks visitors to confirm suitability and availability and makes no cure or universal suitability claim.
- **BLOCKED — credentials evidence:** No qualification, registration, award, partnership or accreditation evidence and publication permission were found. The new page contains no fabricated credentials or third-party logos.
- **BLOCKED — social profiles:** Facebook, Instagram and X official URLs are not known. Central config values remain empty; only existing LinkedIn URL is shown.
- **BLOCKED — video attribution:** Client describes the Short as an Eleos-organised Karen walk; supplied caption separately mentions BA Challenge and Arboretum Park. Date and organizer/event attribution need confirmation. No current schedule is advertised.
- **BLOCKED — privacy review:** Eleos must review Groq's processor terms, legal basis, notice/consent expectations, retention/deletion policy and cross-border processing before launch. Website chat itself does not persist transcripts or send them to Supabase.
- **BLOCKED — legacy content review:** Existing team/home/about copy contains clinical qualifications, availability and capability claims beyond this new content; client evidence review remains necessary before asserting them.

### Chat security, privacy and limitations

- **PASS — key handling in source:** `GROQ_API_KEY` is read only in the server route; no public env var, client prop or response includes it. No key value was printed or copied.
- **PASS — input and safety handling (code review):** JSON validation, 1,200-character message cap, 12-message history cap, origin/host check, short upstream timeout, safe provider errors, no transcript logging/persistence, deterministic emergency escalation and medical-advice refusal are implemented.
- **PARTIAL — rate limit:** Route throttles at 8 requests/minute per observed IP **per warm function instance**. This is not shared state across Vercel instances and is not sufficient as a global production abuse limit. Provision a shared rate limiter before public high-volume exposure.
- **PASS — local production server smoke:** With `GROQ_API_KEY` intentionally set empty for the local server, invalid and oversized-field inputs returned 400, emergency wording returned immediate escalation language, medical-diagnosis wording returned a clinician referral, missing key returned the controlled fallback (503), and repeated ordinary requests returned 429 within the local function instance. No real or sensitive information was used.
- **NOT RUN — live Groq call:** API key validity/upstream response has not been tested and no live request was made.
- **BLOCKED — Vercel config:** Add server-only `GROQ_API_KEY` in Vercel Project → Settings → Environment Variables for desired environments. Optional `GROQ_MODEL` defaults to `openai/gpt-oss-120b`. Local `.env.local` is ignored and does not populate Vercel. Redeploy after setting values.

### Supabase and deployment

- **PASS — policy preservation:** No RLS policies, grants, admin allowlists or Supabase production settings were changed. Existing review/enquiry auth and moderation code paths remain.
- **BLOCKED — schema/function rollout:** Apply `supabase/migrations/20261116140757_phase3_enquiry_categories.sql` and deploy updated `submit-enquiry` before the expanded category choices can persist. No remote migration or Edge Function deployment was made.
- **BLOCKED — Preview isolation:** Existing QA found Vercel Preview configured against production Supabase. Do not use Preview forms/admin for client tests until isolated or Supabase is disabled there.
- **NOT RUN — Git/deployment:** No commit, push, Vercel environment edit, production deployment or Supabase production change has been made.

### Acceptance checks

- `npm run lint`: **PASS**.
- `npm run typecheck`: **PASS**.
- `npm run build`: **PASS**. Static routes were prerendered and `/api/chat` was emitted as a dynamic route. Next.js reports that React 18 support is deprecated and will be removed in Next.js 17; no React migration was made.
- `git diff --check`: **PASS**.
- Supabase migration/policy tests and Edge Function checks: **NOT RUN**; remote migration is intentionally pending.
- Browser, keyboard, mobile, visual accessibility and performance review: **NOT RUN**.
- Chatbot missing-key, malformed/oversized input and local-instance throttling: **PASS** in a local production server smoke test. Live Groq/upstream-error path, distributed throttling and end-to-end contact UI: **NOT RUN**.
- API-key browser-bundle scan, `.env.local` ignore check and `NEXT_PUBLIC_` name scan: **NOT RUN**.
- **Production comparison:** A read-only visit to `https://eleos.vercel.app/` showed a materially different legacy site with unsupported claims and UI than the local repository. The client-provided `https://www.eleoswellness.co.ke/` was not accessible from this browsing environment. Confirm the actual Vercel project/domain mapping before any deployment.
- **PASS — secret exposure checks:** `.env.local` is ignored by `.gitignore`; no `GROQ_API_KEY`/`GROQ_MODEL` reference appears in `.next/static`; no `NEXT_PUBLIC_GROQ_API_KEY` or `NEXT_PUBLIC_GROQ_MODEL` configuration exists. Source inspection confirms only the server route reads the key. The key value was not printed.
- Browser-based route, keyboard and mobile verification remains **BLOCKED** because the computer-use browser host was unavailable. No Lighthouse run was made.
