# Pamu Tech — Design System

Version: 1.0 · Status: proposed implementation standard

## 1. Brand direction

Pamu Tech should feel modern, trustworthy, precise and approachable. The visual identity is minimalist and suitable for a software development and digital products company. Prioritise clarity, readable content and consistent interactions over decoration.

**Core principles:** simplicity, consistency, accessibility, performance and purposeful use of colour.

Use the full name **Pamu Tech** in public-facing copy. Use the PT monogram as a compact brand identifier. Do not invent customer counts, certifications, product availability, testimonials or business achievements.

## 2. Brand colours

| Token | Hex | Purpose |
|---|---|---|
| Brand orange | `#EA701F` | Signature accent, logo, primary actions |
| Pure black | `#000000` | Brand foundation, dark surfaces, text |
| Pure white | `#FFFFFF` | Brand foundation, light surfaces, text |
| Neutral 50 | `#F8F8F8` | Light alternate section |
| Neutral 100 | `#F0F0F0` | Light muted surface |
| Neutral 200 | `#E5E5E5` | Decorative light borders |
| Neutral 500 | `#737373` | Neutral UI details |
| Neutral 600 | `#595959` | Light secondary text |
| Neutral 800 | `#262626` | Dark raised surfaces |
| Neutral 900 | `#171717` | Dark cards |
| Orange accessible dark | `#B54708` | Orange text on white, when needed |

Orange must remain the recognisable brand accent. Black and white should dominate the interface. Use neutral greys for hierarchy, not as additional brand colours. Avoid unrelated decorative colours. Semantic success, warning and error colours are permitted only when communicating status; pair them with text or icons.

### Contrast rules

- Black on brand orange has approximately 6.84:1 contrast; white on brand orange has approximately 3.07:1. Use black text on orange primary buttons.
- Do not use brand orange for normal-sized text on white. Use dark orange or black with an orange underline instead.
- Target WCAG 2.2 AA: 4.5:1 for normal text, 3:1 for large text and relevant non-text UI boundaries.
- Decorative borders may be subtle; required control boundaries and focus indicators must remain visible.
- Never rely on colour alone to convey meaning. Verify final rendered states, including hover, focus and disabled states.

## 3. CSS design tokens

Implement semantic tokens once and reuse them throughout the site. The following CSS is framework-independent and may be mapped to the existing Tailwind, CSS Modules or component-library configuration.

```css
:root {
  color-scheme: light;
  --brand: #EA701F;
  --black: #000000;
  --white: #FFFFFF;
  --bg: #FFFFFF;
  --surface: #F8F8F8;
  --surface-raised: #FFFFFF;
  --text: #111111;
  --text-muted: #595959;
  --border: #E5E5E5;
  --control-border: #737373;
  --accent-text: #B54708;
  --action: #EA701F;
  --action-text: #000000;
  --action-hover: #D76215;
  --action-pressed: #C85A12;
  --focus: #111111;
  --success: #166534;
  --danger: #B91C1C;
  --warning: #92400E;
  --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Consolas, monospace;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --shadow-sm: 0 2px 8px rgb(0 0 0 / 5%);
  --container: 1200px;
  --duration-fast: 150ms;
  --duration-normal: 220ms;
  --ease: cubic-bezier(.2,.8,.2,1);
}

[data-theme='dark'] {
  color-scheme: dark;
  --bg: #000000;
  --surface: #111111;
  --surface-raised: #171717;
  --text: #FFFFFF;
  --text-muted: #B3B3B3;
  --border: #303030;
  --control-border: #858585;
  --accent-text: #EA701F;
  --focus: #FFFFFF;
  --success: #86EFAC;
  --danger: #FCA5A5;
  --warning: #FCD34D;
  --shadow-sm: none;
}

*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text); font-family: var(--font-sans); line-height: 1.6; }
:focus-visible { outline: 2px solid var(--focus); outline-offset: 4px; }
img, svg { max-width: 100%; }
.container { width: min(var(--container), calc(100% - 2 * clamp(16px, 4vw, 40px))); margin-inline: auto; }
.section { padding-block: clamp(48px, 7vw, 96px); }
.button-primary { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; padding: 12px 24px; border: 1px solid transparent; border-radius: var(--radius-md); background: var(--action); color: var(--action-text); font: inherit; font-weight: 600; cursor: pointer; transition: background var(--duration-fast) var(--ease); }
.button-primary:hover:not(:disabled) { background: var(--action-hover); }
.button-primary:active:not(:disabled) { background: var(--action-pressed); }
.button-primary:disabled { opacity: .5; cursor: not-allowed; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
}
```

Theme selection: default to the operating system preference if dark mode is implemented. Persist explicit user choice and initialise it before first paint. Both themes must use identical layout and content.

## 4. Logo system

The chosen direction is a combined PT monogram enclosed by an orange rounded-square outline on a black square background.

- Use exact solid `#EA701F` for the orange mark and border.
- Maintain the approved monogram geometry; do not replace it with typed PT letters.
- Use a 1:1 icon canvas with equal outer margins on all sides. Centre the symbol optically inside the border.
- No glow, gradients, bevel, shadow, texture, distortion or extra text inside the icon.
- Use a master SVG with outlined paths and a fixed viewBox. Keep a high-resolution PNG for platforms that require raster images.
- Create consistent orange-on-black, black-on-transparent and white-on-transparent variants. Optional orange-on-white use requires visual verification at small sizes.
- Suggested clear space: at least one monogram stem width around the icon. Suggested minimum size: 32 px for the bordered mark; test a simplified, approved favicon at 16 px.
- Use the icon with a plain Pamu Tech wordmark in the navigation. Do not redraw the mark for individual products.

Proposed asset names (not supplied by this guide): `logo-primary.svg`, `logo-black.svg`, `logo-white.svg`, `logo-wordmark.svg`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`.

## 5. Typography

Primary font: Inter. Use a system sans-serif fallback. Self-host WOFF2 where appropriate; load only required weights. Use the monospace stack for code and technical identifiers, not ordinary copy.

| Role | Desktop | Mobile | Weight | Line height |
|---|---:|---:|---:|---:|
| Hero H1 | 64 px | 36 px | 700 | 1.08–1.15 |
| Page H1 | 48 px | 32 px | 700 | 1.15 |
| H2 | 36 px | 28 px | 650–700 | 1.2 |
| H3 | 24 px | 22 px | 600 | 1.3 |
| H4 | 20 px | 18 px | 600 | 1.4 |
| Body large | 18 px | 18 px | 400 | 1.6 |
| Body | 16 px | 16 px | 400 | 1.6 |
| Small / metadata | 14 px | 14 px | 400–500 | 1.5 |
| Label | 12 px | 12 px | 600 | 1.5 |

Use responsive `clamp()` sizing between mobile and desktop values. Keep body text around 55–75 characters per line. Use sentence case for headings and buttons. Reserve uppercase for short eyebrow labels. Maintain one meaningful page H1 and semantic heading order.

## 6. Layout and responsiveness

| Viewport | Grid | Gutter | Outer padding |
|---|---|---|---|
| Under 640 px | 4 columns | 16 px | 16 px |
| 640–1023 px | 8 columns | 24 px | 24 px |
| 1024 px and above | 12 columns | 24 px | 32–40 px |

Maximum content width: 1200 px. Use the spacing tokens rather than arbitrary values. Desktop section padding: 80–96 px. Mobile: 48–64 px. Cards: 20–24 px internal padding. Use content-driven heights, never fixed heights for text-heavy cards. Avoid horizontal page overflow at 320 px and support zoom to 200% and reflow at 400%.

## 7. Component specifications

| Component | Style and behaviour |
|---|---|
| Header | 72 px desktop, 64 px mobile; logo left, navigation centre/right, primary CTA right; subtle bottom border; accessible mobile menu |
| Primary button | Orange fill, black text, 48 px minimum height, 10 px radius, visible focus and loading state |
| Secondary button | Transparent or neutral fill, theme-aware text, visible control border |
| Text link | Descriptive label, underline or other non-colour indicator; accessible text colour |
| Card | Theme-aware surface, 16 px radius, subtle border, restrained shadow; avoid nested decorative cards |
| Input/select | 48 px minimum height, 10 px radius, visible label, control border, helper/error text |
| Textarea | Visible label, resizable vertically, minimum height 120 px |
| Badge | Compact neutral or semantic status label; not a decoration for every section |
| Icon | Consistent outline family, 20–24 px, approximately 1.75–2 px stroke; accessible name for icon-only controls |
| Dialog | Focus trap, Escape support, focus restoration, labelled title, responsive width |
| Toast | Brief feedback with appropriate live-region semantics; do not rely on transient messages for critical information |
| Footer | Full brand name, short description, grouped links, verified contact details and legal links; stack on mobile |

All interactive components must support default, hover, focus-visible, active, disabled (when applicable) and loading/error states. Do not add hover movement to static cards. Use links for navigation and buttons for actions. Aim for 44 × 44 px touch targets, even where the WCAG minimum is smaller.

## 8. Website page patterns

These are suggested patterns, not claims about current services or existing content. Preserve the actual site navigation and confirmed offerings.

### Home

1. Header and clear hero with one main CTA and one secondary action.
2. Verified service or product overview.
3. Selected projects or product demonstrations, if available.
4. Brief company introduction and reasons to work with Pamu Tech, based on real capabilities.
5. Contact CTA and footer.

Use an uncluttered hero, strong typography and a restrained visual. Avoid generic stock photos, fake dashboards, fake trust logos and excessive promotional badges.

### About

Company introduction, mission, vision, values and a founder section. Founder layout: portrait left and biography right on desktop; stacked on mobile. Include the verified professional name, Founder of Pamu Tech title, Computer Science undergraduate background, and real profile links where supplied. Hide missing portrait or social links rather than publishing broken placeholders. Do not add invented achievements or attribute fictional quotes.

### Services and products

Use clear cards with title, short summary, relevant icon or genuine screenshot, and meaningful CTA. Product detail pages should explain the problem, capabilities, audience and availability. Clearly label concepts or products under development. Only show pricing when confirmed.

### Projects / case studies

Use actual project visuals and accurately describe the challenge, approach and outcome. Quantitative results require evidence. Label internal demonstrations as such.

### Contact

Use a concise form with name, email, message and optional project details. Include validation, loading, submission success and failure states. Do not claim a message was sent until the backend confirms it. Display only verified contact information. Include a privacy notice appropriate to the actual data handling.

## 9. Imagery and motion

Use genuine product screenshots, consistent geometric illustrations and authentic team portraits. Crop deliberately and provide useful alt text for informative images. Use empty alt text for purely decorative images. No unnecessary glowing effects, glassmorphism, neon gradients, parallax or animated backgrounds.

Motion should clarify state changes. Use 150–220 ms transitions for controls and 200–350 ms for larger panels. Prefer opacity and small transforms. Honour reduced-motion settings and never hide essential content behind animation.

## 10. Accessibility and performance

- Target WCAG 2.2 AA. Use semantic HTML, skip-to-content link, landmarks, keyboard navigation, visible focus and correctly associated form labels.
- Ensure mobile navigation is keyboard accessible and its expanded state is announced.
- Announce dynamic form feedback appropriately; move focus only when it improves usability.
- Test contrast in both themes and all interactive states.
- Use SVG for logos and icons; optimise raster media to WebP/AVIF where supported. Specify image dimensions to avoid layout shift. Lazy-load below-the-fold imagery, not the main hero image if it is the LCP element.
- Minimise JavaScript, third-party scripts and font payload. Avoid animation libraries for basic CSS transitions.
- Aim for field Core Web Vitals at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. These are targets, not measured results.

## 11. Content and SEO

Use simple British English, short paragraphs and descriptive headings. Use a consistent brand name. Every page needs a unique descriptive title, meta description, canonical URL where appropriate and social sharing metadata. Add a sitemap and robots configuration for the production domain. Use structured data only for verified company information. Never publish placeholder claims, URLs or personal details without approval.

## 12. Implementation contract for developers and AI coding tools

1. Inspect the existing framework, component library, routes and styling before making changes.
2. Map existing styles to semantic tokens. Reuse the existing architecture rather than migrating frameworks unnecessarily.
3. Replace inconsistent hard-coded brand colours with the central tokens. Keep status colours semantic.
4. Build reusable Header, Footer, Container, Section, Button, Card, Input and Logo components as appropriate to the existing stack.
5. Preserve working forms, routing, APIs, authentication and business logic. Do not change unrelated functionality.
6. Use real assets where available. Never invent a final logo SVG, contact details, products or achievements.
7. Check responsive behaviour at 320, 375, 768, 1024 and 1440 px; test both themes if supported.
8. Run existing lint, type-check, build and tests; fix introduced regressions. Report actual results and remaining issues.

## 13. Definition of done

- [ ] Exact brand colours are centralised and consistently applied.
- [ ] Approved PT mark is undistorted, centred and free of glow.
- [ ] Typography, spacing and components follow the defined system.
- [ ] Navigation, forms, links and CTAs work on desktop and mobile.
- [ ] Keyboard, focus, contrast and reduced-motion checks pass.
- [ ] No broken links, horizontal overflow or unverified public content.
- [ ] Production assets are optimised and metadata is correct.
- [ ] Existing functionality remains intact and build/test results are documented.

## 14. Decisions requiring approval

The three main colours and combined PT logo direction come from the brand brief. Inter, supporting neutrals, layout measurements, dark theme behaviour and component specifications are proposed defaults. The actual website stack, product list, final logo source files and contact details have not been inspected or verified. Trademark clearance and live accessibility/performance testing are outside the scope of this guide and must be completed separately.
