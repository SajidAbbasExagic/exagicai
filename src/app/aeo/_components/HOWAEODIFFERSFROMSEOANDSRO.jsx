import Link from "next/link";
import ServiceStackChart from "./charts/ServiceStackChart";

export default function HOWAEODIFFERSFROMSEOANDSRO() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                How Is AEO Different from SEO and SRO?
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                SEO optimizes for ranking position in search results. AEO
                optimizes for citation in AI-generated answers. SRO optimizes
                the selection decision once your content is retrieved.
              </p>

              <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                        Goal
                      </th>
                      <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                        SEO
                      </th>
                      <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                        AEO
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {[
                      {
                        label: "Goal",
                        seo: "Rank in results",
                        aeo: "Be citable answer",
                      },
                      {
                        label: "Metric",
                        seo: "Clicks/Rankings",
                        aeo: "Citation frequency",
                      },
                      {
                        label: "Lever",
                        seo: "Keywords/Links",
                        aeo: "Schema/Entities",
                      },
                      {
                        label: "Time",
                        seo: "Months/Years",
                        aeo: "Weeks/Months",
                      },
                    ].map((item) => (
                      <tr key={item.label}>
                        <td className="px-6 py-4 text-sm font-bold text-zinc-900 uppercase tracking-widest bg-zinc-50/30">
                          {item.label}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600">
                          {item.seo}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600">
                          {item.aeo}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <ServiceStackChart />
              <div className="mt-8 p-6 bg-zinc-950 rounded-[2rem] border border-zinc-800 shadow-sm">
                <h4 className="text-[10px] font-bold text-brand uppercase tracking-widest mb-2">
                  Technical Insight
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  "Optimization is no longer a linear path to rank #1. It is a
                  multi-layered verification process where your brand must be
                  searchable (SEO), readable (AEO), and preferable (SRO) for
                  models."
                </p>
                <p className="mt-4 text-[10px] font-bold text-white tracking-widest uppercase">
                  — Exagic Architecture Lab
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-lg text-zinc-600 leading-relaxed max-w-4xl">
            <p>
              In practice, the three disciplines work together. Strong SEO
              fundamentals make content crawlable and authoritative. AEO makes
              that content structured and entity-precise enough for AI to
              extract and trust. SRO then ensures that once your content is
              retrieved, it is the source the model selects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
