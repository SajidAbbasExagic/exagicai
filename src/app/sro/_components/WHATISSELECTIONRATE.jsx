import Link from "next/link";
import SelectionRateComparisonChart from "./charts/SelectionRateComparisonChart";

export default function WHATISSELECTIONRATE() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                What Is Selection Rate?
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                Selection Rate (SR) is the percentage of times your content is
                cited when an AI system retrieves it. It is the AI-native
                equivalent of click-through rate — measuring whether AI models
                choose your content to build their answer.
              </p>

              <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
                <p>
                  When AI platforms like Gemini or ChatGPT generate a grounded
                  response, they retrieve multiple candidate sources. The model
                  then decides which to incorporate into the final answer. A
                  brand can rank highly in traditional search and still have a
                  near-zero selection rate in AI-generated answers.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SelectionRateComparisonChart />
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white max-w-4xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                    Click-Through Rate (CTR)
                  </th>
                  <th className="px-6 py-4 font-semibold text-zinc-900 border-b border-zinc-200">
                    Selection Rate (SR)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {[
                  {
                    label: "Behavior",
                    ctr: "Human behavior metric",
                    sr: "AI behavior metric",
                  },
                  {
                    label: "Action",
                    ctr: "Measures user clicks",
                    sr: "Measures AI citation",
                  },
                  {
                    label: "Trigger",
                    ctr: "Title tags & metas",
                    sr: "Entity precision & clarity",
                  },
                  {
                    label: "Platform",
                    ctr: "Google Search Console",
                    sr: "Retrieval Analysis",
                  },
                ].map((item) => (
                  <tr key={item.label}>
                    <td className="px-6 py-4 text-sm text-zinc-600 font-medium">
                      {item.ctr}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600 font-medium">
                      {item.sr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
