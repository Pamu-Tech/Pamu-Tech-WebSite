"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, CheckCircle2, Clock, Wrench } from "lucide-react";
import type { Product, ProductStatus } from "@/config/site";

const statuses: ("All" | ProductStatus)[] = ["All", "Available", "In Development", "Planned"];

function StatusBadge({ status, accent }: { status: ProductStatus; accent: "orange" | "green" }) {
  const Icon = status === "Available" ? CheckCircle2 : status === "In Development" ? Wrench : Clock;
  const label = status === "Available" ? "Available" : status;
  const colorClass =
    accent === "green"
      ? "border-leaf text-leaf"
      : "border-accent text-accent-text";

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${colorClass}`}>
      <Icon className="h-3.5 w-3.5" aria-hidden />
      <span>{label}</span>
    </span>
  );
}

export default function ProductList({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<"All" | ProductStatus>("All");

  const filtered = filter === "All" ? products : products.filter((p) => p.status === filter);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter products by status">
        {statuses.map((status) => {
          const active = filter === status;
          return (
            <button
              key={status}
              type="button"
              onClick={() => setFilter(status)}
              aria-pressed={active}
              className={`inline-flex min-h-11 items-center rounded-lg border px-4 text-sm font-semibold transition-colors ${
                active
                  ? "border-accent bg-accent text-on-accent"
                  : "border-border bg-surface text-fg hover:border-accent"
              }`}
            >
              {status}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-border bg-surface p-8 text-center">
          <p className="text-muted">No products currently have the &ldquo;{filter}&rdquo; status.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={p.slug}
              className={`rounded-2xl border bg-surface p-6 ${
                p.accent === "green" ? "border-leaf/50" : "border-border"
              }`}
            >
              <StatusBadge status={p.status} accent={p.accent} />
              <h2 className="mt-4 text-xl font-bold">
                {p.name}: {p.tagline}
              </h2>
              <p className="mt-3 text-muted">{p.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <Check
                      className={`h-4 w-4 shrink-0 ${p.accent === "green" ? "text-leaf" : "text-accent-text"}`}
                      aria-hidden
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.external && (
                  <a
                    href={p.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center rounded-lg bg-accent px-5 font-semibold text-on-accent"
                  >
                    Get it on Google Play
                  </a>
                )}
                <Link
                  href={p.href}
                  className="inline-flex h-11 items-center rounded-lg border border-border px-5 font-semibold hover:border-accent"
                >
                  Explore {p.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
