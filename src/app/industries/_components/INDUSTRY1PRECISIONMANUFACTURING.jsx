import Link from "next/link";

export default function INDUSTRY1PRECISIONMANUFACTURING() {
  return (
    <>
      <section
        id="precision-manufacturing"
        className="bg-white py-24 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for Precision Manufacturing
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Precision manufacturers in the SF Bay Area — including CNC
              machining shops, metal fabricators, injection molders, and
              aerospace component suppliers — are increasingly being sourced
              through AI procurement queries. Exagic AI ensures your technical
              capabilities, certifications, and production capacities are
              structured as AI-citable entities rather than buried in PDF spec
              sheets.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-zinc-900">
              {[
                "CNC Machining",
                "Metal Fabrication",
                "Aerospace Components",
                "AS9100 Certified",
                "ITAR Compliant",
                "ISO 9001",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                Buyers sourcing precision manufactured components query AI
                systems with highly specific technical criteria. A procurement
                engineer searching for a qualified CNC machining vendor might
                ask Perplexity "which SF Bay Area manufacturers are AS9100
                certified and handle titanium components under 0.001 inch
                tolerance?" If your capabilities are not structured as
                machine-readable entities with clear certification and
                specification signals, you will not appear in that answer —
                regardless of your actual qualifications.
              </p>
              <p>
                Exagic AI's AEO process for precision manufacturers focuses on
                three core areas: converting technical specifications from PDFs
                and static catalog pages into structured, AI-readable content;
                building entity associations between your brand and the specific
                certifications, materials, tolerances, and application
                categories your buyers search for; and ensuring your regional
                presence (East Bay, Fremont, San Jose) is precisely defined so
                AI systems match you to location-specific supplier queries.
              </p>
              <p>
                The result is a brand that appears as a cited, specific,
                verifiable answer when procurement teams query AI systems for
                qualified precision manufacturing suppliers in Northern
                California — rather than being invisible while less-qualified
                competitors with better-structured content capture the
                recommendation.
              </p>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-6">
              <div className="text-5xl font-bold text-brand">73%</div>
              <div className="text-lg font-medium text-zinc-900 leading-tight">
                of industrial buyers are expected to use AI agents for initial
                supplier sourcing by the end of 2030
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/aeo"
                className="text-lg font-bold text-brand hover:underline"
              >
                Learn about our AEO services for manufacturers →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
