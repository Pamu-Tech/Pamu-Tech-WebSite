# Pamu Tech Performance Optimisation Report

## 1. Original Audit Issues & Root Causes
1. **Oversized header/footer logo (594.8 KiB, 1254 × 1254 px)**: `Header.tsx` and `Footer.tsx` loaded `pamu-tech-logo.png` directly at full resolution for a `36 × 36 px` display slot.
2. **Missing explicit `width` and `height` attributes**: `Header.tsx`, `Footer.tsx`, and `FounderSection.tsx` omitted explicit `width` and `height` attributes on `<img>` elements.
3. **Hero LCP**: Homepage `<h1>` is rendered as static HTML with `next/font/google` (`Inter`, `display: "swap"`), with no opacity-0 entrance animation on the hero.

## 2. Optimisations Implemented
- **SVG Logo (`public/logos/pamu-tech-logo.svg`)**: Created a 371-byte SVG logo using `#000000` and `#EA701F` (down from 594.8 KiB PNG, >99.9% reduction), while preserving `public/logos/Logo.png` and `public/logos/pamu-tech-logo.png` for high-resolution/structured data use.
- **Explicit image dimensions**: Added `width={36} height={36}` in `src/components/layout/Header.tsx` and `src/components/layout/Footer.tsx`.
- **Founder portrait**: Added `width={400} height={500}`, `loading="lazy"`, and `decoding="async"` in `src/components/about/FounderSection.tsx`.

## 3. Build Verification
- `tsc --noEmit`: Passed with 0 errors.
- `next build`: Passed, exporting all 18 static routes to `out/`.

## 4. Remaining Limitations & Unmeasured Items
- **Lighthouse & Core Web Vitals**: Not measured in a headless browser in this environment; run Lighthouse against `https://www.pamutech.dev` after deployment to record actual LCP, INP, CLS, and category scores.
