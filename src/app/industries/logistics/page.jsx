export const metadata = {
  title: "Logistics & Supply Chain",
  description:
    "AI SEO visibility for logistics providers in the Fremont corridor. Ensuring AI models cite your brand when buyers search for freight, warehousing, and distribution partners.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/industries/logistics",
  },
};

export default function LogisticsPage() {
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
        name: "Industries",
        item: "https://exagic-ai.vercel.app/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Logistics & Supply Chain",
        item: "https://exagic-ai.vercel.app/industries/logistics",
      },
    ],
  };

  const entities = [
    "Freight Forwarding",
    "Warehousing Solutions",
    "Distribution Networks",
    "Cold Chain Logistics",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section
        id="logistics-hero"
        aria-labelledby="log-heading"
        className="rag-section bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-zinc-400">
              <li>
                <a href="/" className="hover:text-brand transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a
                  href="/industries"
                  className="hover:text-brand transition-colors"
                >
                  Industries
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-900 font-medium">Logistics</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1
              id="log-heading"
              className="text-xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight"
            >
              Logistics & Supply Chain
            </h1>
            <p className="mt-2 text-sm font-medium text-brand">
              Fremont Corridor
            </p>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed font-medium">
              The Fremont logistics corridor is one of the most critical supply
              chain hubs in the Bay Area. We ensure logistics providers are
              cited by AI models when buyers search for reliable freight,
              warehousing, and distribution partners.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900">
                Entity Associations
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {entities.map((e) => (
                  <span
                    key={e}
                    className="rounded-full bg-brand/5 border border-brand/10 px-3 py-1 text-xs font-medium text-brand"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <div className="text-center lg:text-right">
                <div className="text-5xl font-bold text-gradient">4.2x</div>
                <p className="mt-2 text-sm text-zinc-400 max-w-[200px]">
                  increase in AI-driven supply chain queries since 2024
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
            >
              ← Back to all Industries
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
