import Link from "next/link";

export default function Capabilities() {
  const capabilities = [
    {
      title: "AI SEO",
      slug: "ai-seo",
      description:
        "World-class AI SEO services ranging from visibility analysis to practical model steering strategies for the SF Bay Area industrial belt.",
      href: "/ai-seo",
    },
    {
      title: "Answer Engine Optimization (AEO)",
      slug: "aeo",
      description:
        "Visibility optimization for AI chat assistants, AI agents, and Answer Engines. We ensure your products are the default recommendation.",
      href: "/aeo",
    },
    {
      title: "SRO (Selection Rate Optimization)",
      slug: "sro",
      description:
        "Advanced techniques to influence the probability of your brand being selected as the primary citation by an LLM during retrieval.",
      href: "/sro",
    },
    {
      title: "AI Visibility Tracking",
      slug: "tracking",
      description:
        "Robust tracking for brands looking to understand how Gemini, ChatGPT, and Perplexity perceive their technical hardware and services.",
      href: "/ai-seo",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Exagic AI Services",
    itemListElement: capabilities.map((cap, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: cap.title,
        description: cap.description,
        provider: {
          "@id": "https://exagic.ai/#organization",
        },
      },
    })),
  };

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="rag-section bg-white py-20 md:py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2
          id="capabilities-heading"
          className="max-w-4xl text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight leading-tight"
        >
          We are an industry leader in machine learning driven digital
          marketing.
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="relative pl-8 border-l border-zinc-200 group hover:border-brand transition-colors"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3
                className="text-xl font-bold text-zinc-900 tracking-tight"
                itemProp="name"
              >
                <span itemProp="knowsAbout">{cap.title}</span>
              </h3>
              <p
                className="mt-3 text-zinc-600 text-base leading-relaxed"
                itemProp="description"
              >
                {cap.description}
              </p>
              <div className="mt-6">
                <Link
                  href={cap.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors uppercase tracking-wider"
                  aria-label={`Learn more about ${cap.title}`}
                >
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
