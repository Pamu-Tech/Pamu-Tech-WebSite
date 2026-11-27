import { site } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for the Pamu Tech informational website.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      <div className="rounded-xl border border-accent bg-surface p-4 text-sm font-semibold text-accent-text">
        Draft: requires founder review before publication
      </div>

      <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-muted">
        This website is an informational static site for {site.name}. It does not require user accounts, does not provide login functionality and does not run analytics or advertising trackers by default.
      </p>

      <div className="mt-10 space-y-8 text-muted">
        <div>
          <h2 className="text-xl font-bold text-fg">Information you send us</h2>
          <p className="mt-2">
            If you contact us using an email link (mailto) to{" "}
            <a href={`mailto:${site.email}`} className="text-accent-text underline-offset-4 hover:underline">
              {site.email}
            </a>{" "}
            or a product support address, your email client will send your message and email address directly to us. We use that information only to respond to your enquiry.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-fg">Theme preference</h2>
          <p className="mt-2">
            If you switch between dark and light mode, your preference is stored locally in your browser so the site remembers your choice. This preference is not sent to any server.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-fg">External links</h2>
          <p className="mt-2">
            This site links to external services such as Google Play and Blogger. Those services operate under their own privacy policies and terms, which we encourage you to review when visiting them.
          </p>
        </div>
      </div>
    </section>
  );
}
