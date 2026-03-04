import Link from "next/link";
import RetrievalSelectionGapChart from "./charts/RetrievalSelectionGapChart";

export default function WHYCONTENTGETSRETRIEVEDBUTNOTSELECTED() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                Why Is My Brand Being Retrieved But Not Selected?
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                Content that is retrieved but not selected typically suffers
                from structural invisibility or vague entity mapping.
              </p>

              <div className="mt-16 space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Incomplete Opening Content
                  </h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    AI systems make selection decisions based on shallow context
                    — often just the first 150–300 characters. If your page
                    opens with marketing fluff, the model passes over you in
                    favor of direct answers.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Vague Entity Associations
                  </h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    If your content describes your company generically ("a
                    leading supplier") rather than precisely ("a Fremont-based
                    precision CNC manufacturer"), the model cannot confidently
                    cite you.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Poor Content Structure
                  </h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    AI systems extract information structurally. Dense, unbroken
                    paragraphs or unclear hierarchies are mathematically harder
                    to parse and select.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <RetrievalSelectionGapChart />
              <div className="mt-8 p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                <p className="text-xs text-zinc-500 font-medium italic leading-relaxed">
                  "Being found by an AI crawler is no longer the victory. The
                  victory is being selected as the grounding evidence for the
                  user's answer."
                </p>
                <p className="mt-4 text-[10px] font-bold text-zinc-900 tracking-widest uppercase">
                  — Exagic SRO Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
