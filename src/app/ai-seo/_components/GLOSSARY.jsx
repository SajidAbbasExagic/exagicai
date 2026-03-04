import Link from "next/link";

export default function GLOSSARY() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO Glossary — Key Terms for Industrial Brands
            </h2>

            <dl className="mt-12 space-y-10">
              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">Grounding</dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  The process by which an AI model retrieves external
                  information to support its response. A grounded response cites
                  real sources rather than generating from training data alone,
                  preventing hallucinations and ensuring technical accuracy.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Entity Association
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  The strength of connection between two concepts in an AI
                  model's understanding. Strong entity associations cause
                  consistent co-occurrence in model outputs—for example,
                  reliably linking your brand to your specific industrial
                  specialization in the Bay Area.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Citation Mining
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  The process of systematically querying AI systems and
                  extracting which sources they cite. This data enables
                  competitive analysis of citation patterns and identifies gaps
                  where your brand can displace current authorities.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Selection Rate
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  The percentage of times content is cited when it is retrieved
                  by an AI system. Low selection rate means your content is
                  being "seen" by the AI but not chosen for the final answer,
                  indicating a need for better structuring or clarity.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Query Fanout
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  Expanding a single query into many related variations to
                  comprehensively map how AI systems interpret a topic and what
                  sources they prefer across different phrasings. This is
                  critical for capturing the full scope of industrial search
                  intent.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Query Deserves Grounding (QDG)
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  A prediction of whether a given query will cause an AI system
                  to retrieve external sources—or answer from training data
                  alone. QDG analysis tells us which technical queries are most
                  susceptible to our optimization efforts.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm transition-all hover:bg-zinc-100">
                <dt className="text-xl font-bold text-zinc-900">
                  Token Probability
                </dt>
                <dd className="mt-3 text-lg text-zinc-600 leading-relaxed">
                  A measure of how confidently an AI model associates one
                  concept with another during inference. High-confidence
                  associations mean the model reliably connects your brand to
                  your category. Low confidence means the association is weak
                  and needs semantic reinforcement.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
