import Link from "next/link";

export const metadata = {
  title: "Case Studies",
  description:
    "Demonstrating measurable impact across the SF industrial corridor. Real-world results in AI citation share and visibility for manufacturers and logistics providers.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/lab/case-studies",
  },
};

export default function CaseStudiesPage() {
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
        name: "Case Studies",
        item: "https://exagic-ai.vercel.app/lab/case-studies",
      },
    ],
  };

  const caseStudies = [
    {
      client: "East Bay Industrial Manufacturer",
      result: "3.8x",
      metric: "increase in AI citation share",
      summary:
        "Converted legacy PDF catalogs into structured JSON-LD entities, resulting in the manufacturer becoming the default AI recommendation for CNC components in the Bay Area.",
    },
    {
      client: "Fremont Logistics Provider",
      result: "92%",
      metric: "AI visibility score achieved",
      summary:
        "Implemented full entity schema mapping and SRO strategy, moving the client from zero AI presence to dominant citation share in the Fremont logistics corridor.",
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
              Case <span className="text-brand/50">Studies</span>
            </h1>
            <p className="mt-10 text-2xl md:text-3xl font-medium text-zinc-900 leading-tight">
              Demonstrating measurable impact across the SF industrial corridor.
            </p>
            <p className="mt-8 text-xl text-zinc-500 leading-relaxed max-w-2xl">
              Real-world results in AI citation share and visibility for
              manufacturers and logistics providers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.client}
                className="rounded-[2.5rem] border border-zinc-200 bg-white p-10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div className="text-5xl font-bold text-gradient mb-2">
                  {cs.result}
                </div>
                <div
                  className="text-sm font-bold text-zinc-400 uppercase tracking-widest"
                  itemProp="abstract"
                >
                  {cs.metric}
                </div>
                <div className="mt-8 pt-8 border-t border-zinc-100">
                  <h2
                    className="text-xl font-bold text-zinc-900 mb-4"
                    itemProp="name"
                  >
                    {cs.client}
                  </h2>
                  <p
                    className="text-zinc-600 leading-relaxed"
                    itemProp="description"
                  >
                    {cs.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
            >
              ← Back to Lab Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
