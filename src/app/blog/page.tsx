import { ExternalLink, FileText } from "lucide-react";
import { site } from "@/config/site";
import { getLocalBlogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Read product updates, articles and engineering notes from Pamu Tech.",
  path: "/blog/",
});

export default function BlogPage() {
  const posts = getLocalBlogPosts();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">BLOG</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Pamu Tech Blog &amp; Updates
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted">
          Articles, product notes and technology updates are published on the official Pamu Tech blog.
        </p>
        <a
          href={site.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 font-semibold text-on-accent"
        >
          Visit Pamu Tech on Blogger
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Local articles</h2>
          {posts.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-border bg-bg p-8 text-center">
              <FileText className="mx-auto h-8 w-8 text-muted" aria-hidden />
              <p className="mt-3 font-semibold">No local articles published yet</p>
              <p className="mt-1 text-sm text-muted">
                In the meantime, you can read our latest posts on{" "}
                <a
                  href={site.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent-text underline-offset-4 hover:underline"
                >
                  pamutechofficial.blogspot.com
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.slug} className="rounded-2xl border border-border bg-bg p-6">
                  {post.date && <p className="text-xs font-semibold text-accent-text">{post.date}</p>}
                  <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                  {post.summary && <p className="mt-2 text-sm text-muted">{post.summary}</p>}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
