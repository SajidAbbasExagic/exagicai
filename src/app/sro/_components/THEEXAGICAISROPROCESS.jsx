import Link from "next/link";
import SROOperationalChart from "./charts/SROOperationalChart";

export default function THEEXAGICAISROPROCESS() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                The Selection Rate Optimization Process
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                Exagic AI's SRO process follows three data-driven stages,
                grounded in real AI retrieval behavior.
              </p>

              <div className="mt-16 space-y-16">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Stage 1 — Project Setup & Mapping
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                    We define your core entities — brand, products, and regional
                    presence — ensuring we optimize for the identity markers AI
                    models use to categorize industrial suppliers. We baseline
                    your current selection versus retrieved candidates.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Stage 2 — Optimization & Refinement
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                    We perform snippet optimization and token-level refinement.
                    Beyond structural changes, we analyze which specific
                    technical phrases shift selection behavior in models like
                    Claude or Gemini, refining content to strengthen trust
                    signals.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Stage 3 — Implementation & Tracking
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                    Changes are implemented directly on your platform. We
                    monitor citation frequency, competitive position shifts, and
                    entity association strength. Results feed back into the next
                    cycle for continuous SRO improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SROOperationalChart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
