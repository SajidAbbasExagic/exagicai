# Exagic AI

Marketing website for [Exagic AI](https://exagic.ai) — a San Francisco AI SEO agency specializing in brand visibility for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- Framer Motion

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file for contact form and email delivery:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |

## Project Structure

```
src/app/          # Next.js App Router pages
  ai-seo/         # AI SEO service page
  aeo/            # Answer Engine Optimization page
  sro/            # Selection Rate Optimization page
  lab/            # Content hub (articles & research)
  industries/     # Industry-specific pages
  contact/        # Contact form
src/components/   # Shared React components
public/           # Static assets, llms.txt, robots.txt
```

## Deployment

Production deploys to a VPS via GitHub Actions on push to `main`. See `.github/workflows/deploy.yml`.
