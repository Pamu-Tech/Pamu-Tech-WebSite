import Link from "next/link";
import { nav, products, site } from "@/config/site";

export default function Footer() {
  const socials = [
    ["LinkedIn", site.social.linkedin],
    ["Facebook", site.social.facebook],
    ["YouTube", site.social.youtube],
    ["Blog", site.blog],
  ].filter(([, url]) => url);
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight" aria-label="Pamu Tech home">
            <img src="/logos/no%20background.png" alt="" className="h-9 w-auto" aria-hidden />
            <span>Pamu<span className="text-accent-text"> Tech</span></span>
          </Link>
          <p className="mt-3 text-sm text-muted">{site.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {nav.map((n) => (
              <li key={n.href}><Link className="inline-flex min-h-8 items-center hover:text-fg" href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Products</h2>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {products.map((p) => (
              <li key={p.slug}><Link className="inline-flex min-h-8 items-center hover:text-fg" href={p.href}>{p.name}</Link></li>
            ))}
            <li><Link className="inline-flex min-h-8 items-center hover:text-fg" href="/ai-solutions/">AI Solutions</Link></li>
            <li><Link className="inline-flex min-h-8 items-center hover:text-fg" href="/investors/">Investors &amp; Funders</Link></li>
            <li><Link className="inline-flex min-h-8 items-center hover:text-fg" href="/faq/">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Connect</h2>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            <li><a className="inline-flex min-h-8 items-center break-all hover:text-fg" href={`mailto:${site.email}`}>{site.email}</a></li>
            {socials.map(([label, url]) => (
              <li key={label}><a className="inline-flex min-h-8 items-center hover:text-fg" href={url} rel="noopener noreferrer" target="_blank">{label}</a></li>
            ))}
            <li><Link className="inline-flex min-h-8 items-center hover:text-fg" href="/privacy/">Privacy Policy</Link></li>
            <li><Link className="inline-flex min-h-8 items-center hover:text-fg" href="/terms/">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-border py-4 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Pamu Tech. All rights reserved.
      </p>
    </footer>
  );
}
