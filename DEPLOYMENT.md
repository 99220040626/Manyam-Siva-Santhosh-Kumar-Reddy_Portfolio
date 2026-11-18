# Production Deployment Guide (Vercel & GitHub Pages)

## Option 1: One-Click Deploy to Vercel (Recommended for Next.js 15)
1. Push this repository to your GitHub account (`https://github.com/99220040626`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository.
4. Add the environment variables from `.env.example` (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`).
5. Click **Deploy**. Vercel will automatically run `npm run build` and deploy your portfolio globally on its Edge Network.

## Option 2: Static Export for GitHub Pages (`99220040626.github.io/portfolio/`)
1. Add `output: "export"` inside `next.config.ts` or deploy `public/standalone-preview.html` as `index.html` on your `gh-pages` branch.
