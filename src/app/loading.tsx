export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20" aria-busy="true" aria-label="Loading page">
      <div className="h-3 w-28 animate-pulse rounded bg-surface" />
      <div className="mt-4 h-10 w-3/4 animate-pulse rounded-lg bg-surface sm:h-12" />
      <div className="mt-4 h-5 w-2/3 animate-pulse rounded bg-surface" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="h-56 animate-pulse rounded-2xl border border-border bg-surface p-6" />
        <div className="h-56 animate-pulse rounded-2xl border border-border bg-surface p-6" />
      </div>
    </div>
  );
}
