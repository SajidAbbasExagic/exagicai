import Link from "next/link";
import ShiftingSearchLandscapeChart from "./charts/ShiftingSearchLandscapeChart";

export default function WHATISAISEO() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                What Is AI SEO?
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                AI SEO is search optimization adapted for a world where answers
                are generated, not listed. Instead of ranking web pages in a
                list of blue links, AI SEO focuses on ensuring your brand is
                selected, cited, and accurately represented when language models
                generate answers for industrial buyers and procurement teams.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ShiftingSearchLandscapeChart />
            </div>
          </div>
          <div className="mt-16 space-y-8 text-lg text-zinc-600 leading-relaxed max-w-4xl">
            <p>
              In the legacy era of search engines, the goal was relatively
              simple: rank as high as possible for specific keywords. Users
              would be presented with a list of links, and the competition was
              for their click. Today, that hierarchy is collapsing. When a user
              or procurement agent asks ChatGPT, Gemini, or Perplexity a complex
              question about supplier capabilities or technical specifications,
              the model does not return a list of links. Instead, it interprets
              the user's intent, retrieves source material from its index or the
              live web, synthesizes a coherent answer, and selects which
              specific sources to cite as evidence.
            </p>
            <p>
              This transition matters profoundly for industrial manufacturers in
              the San Francisco Bay Area and beyond. Industrial buyers are no
              longer manually combing through pages of Google results; they are
              increasingly using AI agents to source suppliers, compare
              tolerances, verify certifications, and shortlist vendors. In this
              new environment, being "first on Google" is irrelevant if the AI
              model answering the query overlooks your data or, worse,
              hallucinates incorrect information about your production capacity.
              If your brand is not visible in AI retrieval systems, you are
              invisible to the most efficient procurement channel in modern
              industry.
            </p>
            <p>
              AI SEO is the technical and strategic discipline of ensuring your
              brand's information is the most authoritative, extractable, and
              cited source in this new retrieval ecosystem. It involves
              restructuring your digital footprint to be "machine-first" without
              losing its human value, allowing AI models to traverse your
              technical data with zero friction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
