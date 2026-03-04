import Link from "next/link";

export default function INDUSTRY2LOGISTICSANDSUPPLYCHAIN() {
  return (
    <>
      <section
        id="logistics"
        className="bg-zinc-50 py-24 border-y border-zinc-100 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for Logistics and Supply Chain
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              Logistics providers and supply chain operators in the Fremont
              corridor, Port of Oakland region, and Silicon Valley distribution
              network face a critical AI visibility gap. Procurement teams use
              AI to identify freight partners, warehousing providers, and 3PL
              operators — and most logistics companies in the Bay Area are
              structurally invisible to these AI-generated queries.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Freight Forwarding",
                "Warehousing",
                "3PL",
                "Cold Chain",
                "Last-Mile Delivery",
                "Port of Oakland",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                The SF Bay Area logistics corridor is one of the most
                strategically significant supply chain hubs on the West Coast —
                connecting the Port of Oakland, Silicon Valley manufacturing
                operations, and the broader Northern California distribution
                network. AI-powered procurement tools are increasingly used by
                logistics buyers to identify and evaluate freight partners, 3PL
                providers, and warehousing operators across this corridor.
                Logistics companies not optimized for AI citation are absent
                from these evaluations at the point of first contact.
              </p>
              <p>
                AEO for logistics providers focuses on geographic entity
                precision — defining your service corridors, hub locations, and
                network reach in AI-readable terms rather than vague coverage
                statements. A logistics provider that serves "the Bay Area" is
                far less citable than one whose content precisely defines
                service between the Port of Oakland, the Fremont logistics hub,
                San Jose distribution centers, and Sacramento last-mile delivery
                zones. Precision in geographic entity language directly
                translates to higher citation rates in location-specific AI
                procurement queries.
              </p>
              <p>
                We also focus on service-specific entity structuring —
                differentiating your capabilities across freight forwarding,
                warehousing, cold chain logistics, hazmat handling, and
                intermodal services in ways that allow AI systems to match your
                brand to highly specific buyer queries. Generic service
                descriptions produce low selection rates. Precise, entity-rich
                service definitions produce citations.
              </p>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-white border border-zinc-100 flex items-center gap-6 text-zinc-900">
              <div className="text-5xl font-bold text-brand">4.2x</div>
              <div className="text-lg font-medium text-zinc-900 leading-tight">
                increase in AI-driven supply chain queries since 2024
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/sro"
                className="text-lg font-bold text-brand hover:underline text-zinc-900"
              >
                Learn about SRO for logistics providers →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
