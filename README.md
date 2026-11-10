# Loganathan S — Portfolio

A premium, responsive portfolio for Loganathan S, an AI & Data Science student and full-stack developer. Built with React 19, TypeScript, Vite and Lucide icons.

## Design system

- Three-colour identity: Midnight Navy, Porcelain White and Electric Teal.
- Light and dark themes with saved visitor preference.
- Responsive navigation, accessible skip link and visible keyboard focus.
- Motion effects respect the user's reduced-motion preference.

## Portfolio features

- Animated intro and hero identity.
- About, skills, interactive skill map and technology stack.
- Filterable project gallery with detailed project views.
- Professional experience and education timeline.
- Certification, career CTA and direct contact links.
- Interactive terminal and portfolio Q&A assistant.
- GitHub activity panel.
- Resume download.

## SEO and sharing

- Search metadata, canonical URL and Person structured data.
- Open Graph and Twitter summary metadata.
- SVG favicon, web manifest, robots.txt and XML sitemap.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Automated verification

GitHub Actions runs the production Vite build on pushes and pull requests to `main`.

## Deployment

The repository is connected to Vercel for automatic production deployments from `main`.

## Configuration

The portfolio assistant has a built-in local fallback. To enable its server-side AI response, add `OPENAI_API_KEY` to the Vercel project environment variables. Optionally set `OPENAI_MODEL`. Never place API keys in frontend code.

## Content maintenance

Before adding new achievements, certificates, dates or metrics, verify the exact details and links. Do not publish placeholder credentials or unverified claims.
