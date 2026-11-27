import { products } from "@/config/site";
import { createMetadata } from "@/lib/metadata";
import ProductList from "@/components/products/ProductList";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Explore software products built by Pamu Tech, including Pin Potha and the Sri Lanka Biodiversity Information System (SLBIS).",
  path: "/products/",
});

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">PRODUCTS</p>
      <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
        Practical software built for real-world use
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted">
        Every Pamu Tech product is designed around a clear problem, built with dependable technology and maintained for the long term.
      </p>

      <ProductList products={products} />
    </section>
  );
}
