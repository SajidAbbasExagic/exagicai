import Link from "next/link";

export default function INDUSTRY6CLEANTECHANDENERGY() {
  return (
    <>
      <section
        id="cleantech"
        className="bg-zinc-50 py-24 border-y border-zinc-100 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for Cleantech and Energy Companies
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed text-zinc-900">
              Solar installers, energy storage integrators, EV charging
              infrastructure providers, water treatment technology companies,
              and cleantech manufacturers operating in Northern California face
              a rapidly growing AI procurement market driven by corporate
              sustainability mandates and public sector procurement
              requirements. Exagic AI ensures your cleantech solutions are
              discoverable and citable in AI-generated sustainability
              procurement searches.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-zinc-900">
              {[
                "Solar Energy",
                "Energy Storage",
                "EV Infrastructure",
                "Water Treatment",
                "CPUC Certified",
                "NEM 3.0",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed text-zinc-900">
              <p>
                Corporate sustainability commitments and California's aggressive
                clean energy mandates are driving a surge in AI-assisted
                procurement of cleantech solutions across the Bay Area.
                Procurement managers at tech companies, industrial
                manufacturers, and public agencies query AI systems for
                qualified solar integrators, energy storage vendors, EV charging
                infrastructure providers, and water treatment technology
                suppliers — often with specific certification, incentive
                eligibility, and performance criteria attached to those queries.
              </p>
              <p>
                Cleantech and energy companies face a specific AEO challenge:
                the technical and regulatory landscape changes rapidly, meaning
                content that was accurate twelve months ago may no longer
                reflect current incentive structures, certification
                requirements, or product capabilities. Exagic AI's AEO process
                for cleantech companies includes a content freshness protocol —
                ensuring that regulatory signals (NEM 3.0, IRA incentive
                eligibility, CPUC certification requirements) are updated
                regularly so AI systems cite current, accurate information
                rather than outdated descriptions.
              </p>
              <p>
                We also address the dual-audience procurement reality of
                cleantech — where procurement decisions often involve both
                technical evaluators (engineers assessing system specifications)
                and financial decision-makers (CFOs assessing ROI, incentive
                eligibility, and financing options). Our AEO process structures
                content to answer both audiences' AI queries — ensuring your
                brand appears in both technical specification searches and
                financial evaluation searches.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/aeo"
                className="text-lg font-bold text-brand hover:underline"
              >
                Learn how AEO handles multi-audience industrial content →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
