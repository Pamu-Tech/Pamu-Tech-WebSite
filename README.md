# Pamu Tech Website

Static Next.js (App Router, TypeScript, Tailwind CSS v4) website for Pamu Tech.

## Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

The production static export is generated in `out/`.

## How to Add Products

Edit the `products` array in `src/config/site.ts`. Each entry automatically appears on `/products/`, the homepage featured products section, and the footer.

## How to Add Local Blog Posts

Create a Markdown file in `src/content/blog/` (for example `src/content/blog/my-post.md`) with frontmatter:

```markdown
---
title: "Post Title"
date: "2026-12-01"
summary: "A short summary of the post."
---

Post content here.
```

## How to Update Homepage Latest Updates

Edit `src/content/updates.json` to add, update or remove items shown in the "Latest updates" section on `/`.

## How to Update Links and Social Channels

Edit `site` in `src/config/site.ts`:

- `NEXT_PUBLIC_SITE_URL` (or `site.url`): Set to the production domain.
- `site.social`: Add confirmed LinkedIn, Facebook or YouTube URLs. Empty values are hidden automatically.
- `products[].privacyPolicyUrl`: Add a confirmed privacy policy URL for a product when available.
