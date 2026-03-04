import Link from "next/link";

export default function AEOFORSPECIFICINDUSTRIALCONTEXTS() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              How Does AEO Apply to Different Industrial Sectors?
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              AEO strategy varies by industrial sector because the questions
              buyers ask, the entities AI systems track, and the content
              structures that perform best all differ across manufacturing,
              logistics, hardware supply, and technical services. Exagic AI
              tailors AEO implementation to the specific procurement language
              and buyer behavior of each client's industrial niche.
            </p>

            <div className="mt-16 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Precision Manufacturing and CNC Machining
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Buyers sourcing precision manufactured components query AI
                  with highly specific technical criteria — material
                  specifications, tolerance ranges, certification requirements
                  (AS9100, ISO 9001, ITAR), and lead time parameters. AEO for
                  precision manufacturers focuses on making these technical
                  specifications entity-precise and directly extractable —
                  ensuring that when a buyer queries for a qualified supplier
                  meeting specific criteria, your capabilities appear as the
                  cited answer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Electronics and Hardware Supply Chain
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Silicon Valley hardware companies and electronics suppliers
                  face procurement queries that combine technical specifications
                  with supply chain reliability signals. Buyers ask AI about
                  component availability, lead times, minimum order quantities,
                  and supplier qualification. AEO for electronics suppliers
                  ensures that your stock profile, lead time data, and
                  qualification certifications are structured for AI extraction
                  — not buried in PDFs or static catalog pages.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Industrial Logistics and Freight
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Logistics providers in the SF Bay Area corridor — serving the
                  Port of Oakland, Silicon Valley, and the East Bay
                  manufacturing belt — face procurement queries focused on
                  service areas, load types, carrier certifications, and transit
                  times. AEO for logistics focuses on geographic entity
                  precision (specific corridors, hubs, and service areas) and
                  service-specific structured data that AI systems can match to
                  buyer queries about regional freight logistics.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  B2B Technical Services
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Engineering firms, testing labs, and technical consultancies
                  serving industrial clients prioritize credentials and domain
                  expertise. Procurement queries focus on certifications,
                  methodologies, and specialist credentials. AEO for technical
                  services focuses on expert entity signals — ensuring AI models
                  reliably associate your firm with high-authority industrial
                  standards and specific regional service capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
