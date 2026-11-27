import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="mt-6 inline-flex h-12 items-center rounded-lg bg-accent px-6 font-semibold text-on-accent">Back to home</Link>
    </section>
  );
}
