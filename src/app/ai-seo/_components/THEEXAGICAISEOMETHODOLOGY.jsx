import Link from "next/link";
import MethodologyProcessFlow from "./charts/MethodologyProcessFlow";

export default function THEEXAGICAISEOMETHODOLOGY() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                How Exagic AI Approaches AI SEO for Industrial Brands
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed max-w-4xl">
                Our methodology is built on direct experimentation with language
                models, proprietary data structuring techniques, and a six-phase
                process designed specifically for industrial manufacturers and
                B2B suppliers.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-16">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 1 — Brand Knowledge Analysis
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  What do AI models currently believe about your brand? We begin
                  by systematically probing models across ChatGPT, Gemini, and
                  Perplexity to map how your brand, products, and services are
                  currently represented. This diagnostic phase identifies weak
                  associations where a model fails to connect you to your
                  product categories and inaccuracies that require correction.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 2 — Entity and Association Mapping
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Language models understand the world through entities and
                  their interrelationships. In this phase, we map your core
                  entities including your brand name, specific product lines,
                  and key technical capabilities. We then build associations
                  between your brand and high-authority industry categories and
                  critical technical specifications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 3 — Citation Analysis
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  When AI systems generate grounded answers, they retrieve and
                  cite specific sources. We analyze which domains and content
                  formats AI platforms currently select for queries in the
                  industrial manufacturing niche, identifying opportunity for
                  displacement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 4 — Grounding Prediction
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Not every query triggers AI to retrieve external sources. We
                  use proprietary testing to identify which queries in your
                  industrial niche trigger "grounding" behavior. This allows us
                  to focus optimization effort exclusively on queries where
                  content strategy actually influences the AI's output.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 5 — Optimization Execution
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  This includes content restructuring for entity clarity,
                  semantic completeness improvements, and heavy technical data
                  structuring—converting your technical spec sheets into
                  AI-readable formats.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Phase 6 — AI Visibility Tracking
                </h3>
                <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                  Tracking success in the AI era requires a new set of metrics.
                  We measure the frequency of your brand citations, the accuracy
                  of brand mentions, and your total share of citations compared
                  to competitors.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <MethodologyProcessFlow />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
