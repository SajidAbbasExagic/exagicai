import Link from "next/link";
import RepresentationGapChart from "./charts/RepresentationGapChart";

export default function WHYINDUSTRIALBRANDSAREUNDERREPRESENTEDINAIANSWERS() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                Why Are SF Bay Area Industrial Brands Underrepresented?
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                Most industrial manufacturers and suppliers have websites built
                for human readers and traditional search engines — not for AI
                extraction.
              </p>

              <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Industrial websites are typically designed around product
                  catalogs, specification sheets, and company history pages.
                  This content is valuable to human visitors but structurally
                  inaccessible to AI systems. Dense specification tables without
                  contextual explanation and product names without entity
                  context cause AI retrieval systems to skip over otherwise
                  qualified suppliers.
                </p>
                <p>
                  The SF Bay Area industrial corridor is particularly
                  underserved. Thousands of manufacturers in Fremont, San Jose,
                  and the broader East Bay operate with web presences built
                  before AI-generated search became a primary discovery channel.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <RepresentationGapChart />
              <div className="mt-8 p-6 bg-zinc-50 rounded-[2rem] border border-zinc-100 shadow-sm">
                <p className="text-xs text-zinc-500 font-medium italic leading-relaxed">
                  "Most industrial sites score {">"}80% on human readability but
                  &lt;15% on machine extractability. This delta is where AI
                  visibility is lost."
                </p>
                <p className="mt-4 text-[10px] font-bold text-zinc-900 tracking-widest uppercase">
                  — Exagic Analysis Lab
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-lg text-zinc-600 leading-relaxed max-w-4xl">
            <p>
              Exagic AI was built specifically to serve this gap. We understand
              the technical language of industrial manufacturing — the component
              categories, tolerance specifications, and certification standards.
              Our AEO process converts that existing technical knowledge into
              AI-citable content structures, without changing the substance of
              what your brand actually offers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
