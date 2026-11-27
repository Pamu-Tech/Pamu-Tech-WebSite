import { Github, Globe, Linkedin, User } from "lucide-react";

// TODO: Replace with confirmed founder portrait path and social profile URLs.
const founder = {
  name: "Pamuda U. de A. Goonatilake",
  position: "Founder of Pamu Tech",
  background: "Computer Science Undergraduate",
  interests: [
    "Software Development",
    "Artificial Intelligence",
    "Technology",
    "Entrepreneurship",
  ],
  portraitUrl: "/Photos/Profile%20Jacket2.png",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pamuda-uposath-goonatilake/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/PamudaUposath", icon: Github },
    { label: "Personal Portfolio", href: "https://pamudauposath.github.io/portfolio/", icon: Globe },
  ],
};

export default function FounderSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">
          MEET OUR FOUNDER
        </p>
        <div className="mt-8 grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            {founder.portraitUrl ? (
              <img
                src={founder.portraitUrl}
                alt={`${founder.name}, ${founder.position}`}
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-2xl border border-border object-cover"
              />
            ) : (
              <div
                className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-bg p-6 text-center"
                role="img"
                aria-label="Founder portrait placeholder"
              >
                <User className="h-12 w-12 text-muted" aria-hidden />
                <p className="mt-3 text-sm font-semibold">{founder.name}</p>
                <p className="mt-1 text-xs text-muted">Founder portrait placeholder</p>
              </div>
            )}
          </div>

          <div className="md:col-span-8">
            <h2 className="text-2xl font-bold sm:text-3xl">{founder.name}</h2>
            <p className="mt-1 font-semibold text-accent-text">{founder.position}</p>
            <p className="mt-1 text-sm text-muted">{founder.background}</p>

            <div className="mt-6 space-y-4 text-muted">
              <p>
                Pamuda is the founder of Pamu Tech and a Computer Science undergraduate with a passion for software development, artificial intelligence and entrepreneurship.
              </p>
              <p>
                He founded Pamu Tech with a vision to transform innovative ideas into practical, reliable and modern digital solutions. His focus is on building technology that solves real-world problems and creates meaningful value for businesses and individuals.
              </p>
              <p>
                Through continuous learning, innovation and a commitment to quality, he aims to grow Pamu Tech into a trusted technology company.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold">Interests</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {founder.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-border bg-bg px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {founder.socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on ${s.label}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-bg px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent-text"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    <span>{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
