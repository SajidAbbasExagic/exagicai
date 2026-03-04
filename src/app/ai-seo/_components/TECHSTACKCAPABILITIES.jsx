import Link from "next/link";
import CitationStackChart from "./charts/CitationStackChart";

export default function TECHSTACKCAPABILITIES() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                What Tools and Techniques Does Exagic AI Use?
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                Our process combines structured data engineering, semantic
                entity optimization, and AI retrieval analysis, built for
                industrial brands operating in the SF Bay Area corridor.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                        Capability
                      </th>
                      <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                        What It Does
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {[
                      {
                        cap: "Entity Audit",
                        desc: "Maps AI perception of brand & products",
                      },
                      {
                        cap: "Technical Data Structuring",
                        desc: "Converts PDF catalogs into AI JSON-LD",
                      },
                      {
                        cap: "Citation Analysis",
                        desc: "Identifies sources AI platforms cite",
                      },
                      {
                        cap: "Grounding Classification",
                        desc: "Predicts grounding-trigger queries",
                      },
                      {
                        cap: "Selection Rate Optimization",
                        desc: "Improves likelihood of citation",
                      },
                      {
                        cap: "AI Visibility Tracking",
                        desc: "Monthly tracking across frontier models",
                      },
                    ].map((item) => (
                      <tr key={item.cap}>
                        <td className="px-6 py-4 text-sm font-bold text-zinc-900 uppercase tracking-widest leading-tight">
                          {item.cap}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600 font-medium">
                          {item.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <CitationStackChart />
              <div className="mt-8 p-6 bg-zinc-950 rounded-[2rem] border border-zinc-800 shadow-sm">
                <h4 className="text-[10px] font-bold text-brand uppercase tracking-widest mb-2">
                  Deep Tech Highlight
                </h4>
                <h5 className="text-white font-bold mb-2">
                  Mechanistic Interpretability
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We use interpretability principles to understand how content
                  framing influences a model&apos;s latent representation of
                  your brand.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-8 text-lg text-zinc-600 leading-relaxed max-w-4xl">
            <p>
              To deliver these capabilities, we utilize a combination of
              industry-standard SEO tools and custom-built internal pipelines.
              Our technical team is proficient in{" "}
              <strong>schema engineering</strong>, which is the "language" of
              AI-ready data. By providing clear, unambiguous signals through
              advanced JSON-LD, we help models understand the complex
              hierarchical relationships inherent in industrial product lines.
            </p>
            <p>
              Our capability set is specifically designed for the B2B industrial
              cycle. We understand that a manufacturing contract is not a "buy
              now" click; it is a multi-month evaluation of technical
              specifications, reliability, and regional presence. Our technology
              stack ensures that at every point of that AI-aided evaluation,
              your brand is present and accurate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
