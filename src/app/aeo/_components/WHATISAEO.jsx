import Link from "next/link";
import AEOInclusionChart from "./charts/AEOInclusionChart";

export default function WHATISAEO() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                What Is Answer Engine Optimization?
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                Answer Engine Optimization (AEO) is the practice of structuring
                your brand's content and data so that AI platforms — ChatGPT,
                Google Gemini, Perplexity, and AI procurement agents — can
                easily extract, trust, and cite it as a direct answer to buyer
                queries.
              </p>

              <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Traditional search optimization targeted rankings in a list of
                  blue links. AEO targets something fundamentally different —
                  the single synthesized response AI systems generate when a
                  user asks a question directly. When an industrial buyer asks
                  an AI assistant "who are the leading precision machining
                  suppliers?" the AI generates one answer, drawing from a small
                  set of retrieved and selected sources. AEO determines whether
                  your brand is in that source set.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <AEOInclusionChart />
            </div>
          </div>

          <div className="mt-16 space-y-8 text-lg text-zinc-600 leading-relaxed max-w-4xl">
            <p>
              AEO is not a replacement for traditional SEO — it is an extension
              of it. A technically sound website with strong fundamentals is
              still the foundation. But once those fundamentals are in place,
              AEO shifts the focus from ranking pages to packaging information
              in a way AI systems can trust, extract, and reuse.
            </p>
            <p>
              For industrial manufacturers and SF Bay Area suppliers, the
              urgency of AEO is driven by a specific behavioral shift.
              Procurement teams are increasingly using AI tools as their first
              point of contact in the supplier discovery process. If your brand
              is not optimized for AI citation, you are absent from the
              consideration set before the buyer even begins a traditional
              search.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
