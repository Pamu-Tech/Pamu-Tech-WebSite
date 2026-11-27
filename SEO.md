# Pamu Tech SEO Audit & Implementation Report

## 1. Issues Found
1. **Duplicated page titles**: `src/app/layout.tsx` used `title.template: "%s | Pamu Tech"` while `src/lib/metadata.ts` passed `${title} | Pamu Tech`, resulting in `"<Page> | Pamu Tech | Pamu Tech"`.
2. **Domain consistency**: `NEXT_PUBLIC_SITE_URL` fallback needed to be standardised on `https://www.pamutech.dev`.
3. **Preview deployment indexing**: Preview deployments on Vercel needed `noindex, nofollow` and `Disallow: /` in `robots.txt` to prevent duplicate/staging indexing.
4. **Search engine verification**: No configurable hooks existed for Google Search Console or Bing Webmaster Tools.
5. **Structured data**: `Organization` JSON-LD lacked `alternateName: "PamuTech"`, `logo`, `addressCountry: "LK"`, `sameAs`, and a linked `WebSite` entity.

## 2. Changes Implemented
- **Fixed duplicated titles** in `src/lib/metadata.ts` by passing the raw `title` to Next.js `Metadata.title` (so `layout.tsx` template applies once), while keeping `fullTitle` for Open Graph and Twitter Card tags.
- **Standardised official domain** (`https://www.pamutech.dev`) across `src/app/layout.tsx`, `src/lib/metadata.ts`, `src/app/robots.ts`, and `src/app/sitemap.ts`.
- **Preview indexing protection**: Added `VERCEL_ENV === "preview"` checks in `src/app/layout.tsx` (`robots: { index: false, follow: false }`) and `src/app/robots.ts` (`disallow: "/"`).
- **Search engine verification**: Added `NEXT_PUBLIC_GOOGLE_VERIFICATION` and `NEXT_PUBLIC_BING_VERIFICATION` support in `src/app/layout.tsx`.
- **Structured data**: Updated `src/app/layout.tsx` with `@graph` containing `Organization` (`Pamu Tech`, `alternateName: "PamuTech"`, `addressCountry: "LK"`, `logo`, `email`, `sameAs`) and `WebSite`, alongside `SoftwareApplication` on `/products/pin-potha/` and `FAQPage` on `/faq/`.

## 3. Verification Results
- `tsc --noEmit`: Passed with 0 errors.
- `next build`: Passed, exporting all 18 static routes to `out/`.
- `out/robots.txt` and `out/sitemap.xml`: Generated and verified.
- `out/about/index.html`: Verified single `| Pamu Tech` title suffix and self-referencing canonical URL.
- **Not measured**: Lighthouse scores (Performance, Accessibility, Best Practices, SEO) were not run in a headless browser in this environment.

## 4. IndexNow & Search Engine Submission
- **IndexNow**: Because this site uses Next.js static export (`output: "export"`), there is no server runtime to host an IndexNow API route. You can still submit updated URLs from CI/CD (e.g. a GitHub Action on deploy) by placing a `<key>.txt` file in `public/` and POSTing `https://api.indexnow.org/indexnow`.
- **Google Search Console**:
  1. Add `https://www.pamutech.dev` as a property and set `NEXT_PUBLIC_GOOGLE_VERIFICATION` in Vercel environment variables.
  2. Submit `https://www.pamutech.dev/sitemap.xml` under **Sitemaps**.
  3. Use **URL Inspection** to request indexing for `/`, `/about/`, `/products/`, `/products/pin-potha/`, `/products/slbis/`, `/faq/`, and `/contact/`.
- **Bing Webmaster Tools**:
  1. Import from Google Search Console or set `NEXT_PUBLIC_BING_VERIFICATION` in Vercel.
  2. Submit `https://www.pamutech.dev/sitemap.xml`.

## 5. Remaining Manual Tasks
- Set `NEXT_PUBLIC_SITE_URL=https://www.pamutech.dev` in Vercel production environment variables.
- Add `NEXT_PUBLIC_GOOGLE_VERIFICATION` and `NEXT_PUBLIC_BING_VERIFICATION` once obtained.
- Run Lighthouse in Chrome DevTools against the deployed `https://www.pamutech.dev` to record actual scores.
