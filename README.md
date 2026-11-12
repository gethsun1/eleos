# Eleos Wellness & Rehabilitation Centre

The Eleos public website is built with Next.js App Router, TypeScript, React and Tailwind CSS. It generates a static export for deployment on Vercel while using Supabase Edge Functions for persisted enquiries and visitor reviews when configured.

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

The forms remain unavailable until the public Supabase URL/key are configured and the SQL migration and Edge Functions are deployed. They show a direct contact fallback instead of simulating delivery.

## Verification and build

```bash
npm run typecheck
npm run build
```

With `output: 'export'`, Next.js writes static files to `out/`. Next.js API routes and server actions are not available in this deployment mode.

## Backend and deployment

- [Implementation plan](docs/IMPLEMENTATION_MASTER_PLAN.md)
- [Implementation status](docs/IMPLEMENTATION_STATUS.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Supabase backend setup](docs/BACKEND_SETUP.md)
- [Deployment steps](docs/DEPLOYMENT.md)
- [QA report](docs/QA_REPORT.md)
- [Client information required](docs/CLIENT_INFORMATION_REQUIRED.md)

The confirmed public contact details are Gatitu, Thika, Kenya; +254 711 143210; and eleoswellnesscentre@gmail.com. Do not deploy without configuring and testing the backend, obtaining image permissions, and approving the draft legal pages.
