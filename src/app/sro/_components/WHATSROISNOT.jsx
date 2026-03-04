import Link from "next/link";

export default function WHATSROISNOT() {
  return (
    <>
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              What Selection Rate Optimization Is Not
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
              SRO is not keyword stuffing, AI-generated content spamming, or any
              form of manipulation that violates platform guidelines. It is the
              structured, data-driven improvement of genuine content quality —
              making accurate information about your brand more accessible and
              more useful to AI systems that are already trying to answer
              questions about your industry.
            </p>
            <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                SRO does not involve creating misleading content, fabricating
                entity associations, or attempting to deceive AI models. The
                optimization process works with your brand's actual
                capabilities, real products, and genuine expertise — making
                accurate descriptions more precise, more complete, and more
                structurally accessible. AI models are trained to evaluate
                source quality; content that misrepresents a brand's actual
                capabilities tends to be deprioritized rather than selected as a
                grounding source.
              </p>
              <p>
                SRO also does not replace traditional SEO. It extends it. Strong
                technical SEO fundamentals — crawlability, site speed,
                structured data, authoritative backlinks — remain important
                inputs to AI selection decisions. SRO adds a layer of
                AI-specific optimization on top of that foundation, targeting
                the specific signals that influence model selection behavior
                rather than the ranking signals that influence traditional
                search position.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
