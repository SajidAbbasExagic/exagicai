import Link from "next/link";

export default function INDUSTRY5ENGINEERINGANDCONSTRUCTION() {
  return (
    <>
      <section id="engineering" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for Engineering and Construction Firms
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed text-zinc-900">
              General contractors, specialty engineering firms, structural
              consultancies, and MEP (mechanical, electrical, plumbing)
              contractors serving industrial clients in the SF Bay Area are
              increasingly evaluated through AI-powered project sourcing tools.
              Exagic AI ensures your project history, certifications, bonding
              capacity, and specialty capabilities are structured for AI
              procurement citation.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-zinc-900">
              {[
                "General Contracting",
                "Structural Engineering",
                "MEP Engineering",
                "LEED Certified",
                "Design-Build",
                "Industrial Construction",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed text-zinc-900">
              <p>
                Large-scale industrial construction and engineering projects in
                the Bay Area — data center builds, manufacturing facility
                expansions, warehouse developments, and infrastructure projects
                — involve procurement processes that increasingly rely on AI
                tools for contractor identification and preliminary
                qualification. Project owners and general contractors query AI
                systems to identify qualified specialty subcontractors,
                engineering firms, and construction managers with specific
                capabilities, licensure, and regional experience.
              </p>
              <p>
                AEO for engineering and construction firms focuses on project
                history as entity data — converting completed projects, client
                relationships, specialty certifications (LEED, DSA, Caltrans
                pre-qualification), and bonding capacity into AI-readable
                signals that procurement tools can match to specific project
                type queries. A firm with documented experience in tilt-up
                industrial construction in the East Bay is far more citable than
                a firm with a generic "commercial and industrial construction"
                service description.
              </p>
              <p>
                Geographic entity precision is particularly important for
                construction and engineering firms, where local licensing,
                regional experience, and proximity to project sites are primary
                qualification criteria. We ensure your service territory,
                licensing jurisdictions, and completed project locations are
                precisely defined as entities — enabling AI systems to
                accurately match your firm to geographically specific contractor
                searches across the Bay Area.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/ai-seo"
                className="text-lg font-bold text-brand hover:underline"
              >
                See how Exagic AI structures entity data for technical firms →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
