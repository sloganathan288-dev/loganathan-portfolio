# Loganathan S — Professional Portfolio

A responsive portfolio presenting Loganathan S's work across AI & Data Science, full-stack development, automation and IoT. Built with React, TypeScript, Vite and Lucide icons.

## Design system
- Three-colour identity: Midnight Navy, Porcelain White and Electric Teal.
- Dark and light themes with saved visitor preference.
- Responsive layouts, accessible skip link, keyboard focus and reduced-motion support.
- Restrained motion and interaction effects designed to keep the content readable.

## Portfolio experience
- Animated introduction and professional hero profile.
- About, education, skills and interactive skills universe.
- Filterable project gallery with detailed project views, technologies and repository/demo links.
- Project approach overview: understand, build and improve.
- Professional experience with role focus areas and technology context.
- Certification and learning section.
- Career call-to-action, direct contact links and resume download.
- Interactive terminal and portfolio Q&A assistant.
- GitHub activity panel.

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
GitHub Actions runs the production Vite build on pushes and pull requests to `main`. The workflow intentionally does not enable npm dependency caching because this repository does not currently contain a package-lock file.

## Deployment
The repository is connected to Vercel for automatic production deployments from `main`.

## Configuration
The portfolio assistant has a built-in local fallback. To enable its server-side AI response, add `OPENAI_API_KEY` to the Vercel project environment variables. Optionally set `OPENAI_MODEL`. Never place API keys in frontend code.

## Content integrity
Project details, experience, education, certificates and contact information should remain accurate and verifiable. Add quantified achievements only when supporting evidence is available; do not publish placeholder credentials, invented metrics or unverified claims.
