import Link from "next/link";
import VisibilityEfficiencyChart from "./charts/VisibilityEfficiencyChart";

export default function WHONEEDSAISEO() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="max-w-4xl lg:flex-1">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                Which Industrial Brands Need AI SEO?
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                AI SEO is essential for any industrial manufacturer, hardware
                supplier, or B2B company whose buyers use AI tools to research,
                compare, or source products.
              </p>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    Manufacturers competing in procurement queries
                  </h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    When industrial buyers ask AI assistants for supplier
                    recommendations or product comparisons, will your brand be
                    mentioned? If competitors are cited and you are not, you are
                    losing visibility in a procurement channel that is growing
                    rapidly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    Companies with complex technical products
                  </h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    Language models struggle with technical nuance. If your
                    products involve specific tolerances or certifications, you
                    need to ensure AI models represent your specifications
                    accurately.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    Brands affected by AI-generated misinformation
                  </h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    AI models can perpetuate outdated information or competitor
                    narratives. If an AI hallucinates about your capacity or
                    quality, your business suffers. AI SEO executes targeted
                    data corrections to steer models back to reality.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    Suppliers seeking to own their category definitions
                  </h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    AI SEO ensures AI models associate your brand with your
                    specific niche. We prevent your brand from being buried
                    under larger, generic competitors by reinforcing your
                    specific entity authority.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 lg:sticky lg:top-32">
              <VisibilityEfficiencyChart />
              <div className="mt-8 p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                <p className="text-sm text-zinc-500 italic leading-relaxed">
                  "The delta between brands that optimize for AI retrieval and
                  those that don't is widening. By 2026, citation share will be
                  more valuable than keyword rank."
                </p>
                <p className="mt-4 text-xs font-bold text-zinc-900 mx-auto tracking-widest uppercase">
                  — Exagic Engineering Lab
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-lg text-zinc-600 leading-relaxed max-w-4xl">
            <p>
              The industrial sector is uniquely vulnerable to the shift to AI
              search because its data is often dense, technical, and hidden in
              legacy formats. Companies that act now to structure this data for
              AI consumption will build an insurmountable lead in "model
              mindshare"—the degree to which an AI system defaults to their
              brand as the trusted recommendation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
