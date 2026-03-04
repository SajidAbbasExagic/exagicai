export default function ProjectTypes() {
  const projects = [
    {
      title: "AI SEO Retainer",
      description: "Ongoing model steering and visibility maintenance",
    },
    {
      title: "Technical Entity Audit",
      description: "Full-day audit to ensure a solid AI foundation",
    },
    {
      title: "Technical Data Structuring",
      description: "Converting specs and catalogs into AI-readable JSON-LD",
    },
    {
      title: "Market Research",
      description: "Analyzing how LLMs categorize your brand vs. competitors",
    },
    {
      title: "Rank & Citation Recovery",
      description:
        "Risk assessment and manual data clean-up to fix AI hallucinations",
    },
    {
      title: "Content Strategy",
      description: "Surfacing content gaps and optimizing for AI extraction",
    },
    {
      title: "AI Visibility Tracking",
      description:
        "Tracking how ChatGPT, Gemini, and Perplexity perceive your brand",
    },
    {
      title: "Team Training",
      description:
        "Workshops for in-house teams on AI SEO and AEO fundamentals",
    },
  ];

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Exagic AI Campaign Types",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: project.title,
        description: project.description,
        provider: {
          "@id": "https://exagic-ai.vercel.app/#organization",
        },
      },
    })),
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="rag-section bg-white py-20 md:py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight text-center md:text-left"
        >
          Focused Campaigns
        </h2>

        <ul
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          role="list"
        >
          {projects.map((project, index) => (
            <li key={project.title}>
              <article
                className="flex flex-col sm:flex-row items-start gap-6 rounded-3xl border border-zinc-200 bg-white p-6 relative overflow-hidden shadow-sm"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100/80 text-sm font-black font-mono text-zinc-400"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-zinc-900 tracking-tight"
                    itemProp="name"
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mt-2 text-sm text-zinc-600 leading-relaxed"
                    itemProp="description"
                  >
                    {project.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
