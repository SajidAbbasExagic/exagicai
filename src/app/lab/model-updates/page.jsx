import Link from "next/link";

export const metadata = {
  title: "Model Updates",
  description:
    "Tracking how AI model releases impact industrial brand visibility. Analysis of Gemini, GPT-4o, and other LLMs for supply chain and manufacturing queries.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/lab/model-updates",
  },
};

export default function ModelUpdatesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exagic-ai.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lab",
        item: "https://exagic-ai.vercel.app/lab",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Model Updates",
        item: "https://exagic-ai.vercel.app/lab/model-updates",
      },
    ],
  };

  const modelUpdates = [
    {
      date: "Feb 2026",
      title: "Gemini 2.5 Pro: Impact on Industrial Entity Retrieval",
      summary:
        "Analysis of how Gemini 2.5 Pro changes citation weighting for manufacturing entities in the SF Bay Area knowledge cluster.",
      tag: "Model Analysis",
    },
    {
      date: "Jan 2026",
      title: "GPT-4o Retrieval Patterns for Supply Chain Queries",
      summary:
        "Mapping how GPT-4o prioritizes supplier data during RAG retrieval for B2B industrial queries.",
      tag: "RAG Research",
    },
    {
      date: "Dec 2025",
      title: "Mechanistic Interpretability: Steering Industrial Citations",
      summary:
        "Technical paper on using activation patching to understand how LLMs weight brand authority signals in manufacturing verticals.",
      tag: "Interpretability",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-50 border-b border-zinc-100">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <Link
              href="/lab"
              className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-8 inline-block hover:text-brand transition-colors"
            >
              ← Back to Lab
            </Link>
            <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 tracking-tight leading-[0.9]">
              Model <span className="text-brand/50">Updates</span>
            </h1>
            <p className="mt-10 text-2xl md:text-3xl font-medium text-zinc-900 leading-tight">
              Tracking how AI model releases impact industrial brand visibility.
            </p>
            <p className="mt-8 text-xl text-zinc-500 leading-relaxed max-w-2xl">
              Analysis of Gemini, GPT-4o, and other LLMs for supply chain and
              manufacturing queries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="space-y-6">
            {modelUpdates.map((update) => (
              <article
                key={update.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-brand/20 hover:shadow-sm"
                itemScope
                itemType="https://schema.org/TechArticle"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="text-xs font-medium text-zinc-400 shrink-0 sm:w-24 sm:pt-1">
                    <time itemProp="datePublished">{update.date}</time>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="rounded-full bg-brand/10 px-3 py-0.5 text-xs font-medium text-brand">
                        {update.tag}
                      </span>
                    </div>
                    <h2
                      className="text-lg font-semibold text-zinc-900"
                      itemProp="headline"
                    >
                      {update.title}
                    </h2>
                    <p
                      className="mt-2 text-sm text-zinc-500 leading-relaxed"
                      itemProp="description"
                    >
                      {update.summary}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="/lab"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
            >
              ← Back to Lab
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
