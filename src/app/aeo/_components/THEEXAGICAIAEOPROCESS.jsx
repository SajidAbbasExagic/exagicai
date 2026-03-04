import Link from "next/link";
import AEOProcessChart from "./charts/AEOProcessChart";

export default function THEEXAGICAIAEOPROCESS() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                The Exagic AI AEO Process
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                Our process is engineered to move your brand from hidden
                technical data to cited AI answer authority.
              </p>

              <div className="mt-16 space-y-16">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Data Structural Analysis
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                    We begin by analyzing your existing technical documentation,
                    PDF catalogs, and specification sheets to identify the core
                    entities and data points that AI models value.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Semantic Content Restructuring
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                    We convert technical data into AI-readable formats, ensuring
                    that every specification is mapped to its corresponding
                    industry entity and ontology.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Authority Signal Propagation
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                    We build the external signals that AI systems use to verify
                    truth. By placing your technical data on authoritative
                    sources, we increase the probability of your brand being
                    selected as the grounded answer.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <AEOProcessChart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
