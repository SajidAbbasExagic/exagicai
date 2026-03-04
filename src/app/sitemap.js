export default function sitemap() {
  const baseUrl = "https://exagic-ai.vercel.app";

  const labArticles = [
    "2026-bay-area-industrial-ai-visibility-report",
    "aeo-vs-seo-industrial-brands",
    "ai-overviews-industrial-procurement",
    "ai-procurement-aerospace-defense-bay-area",
    "ai-procurement-pharmaceutical-manufacturing",
    "ai-procurement-semiconductor-supply-chain",
    "ai-search-fremont-san-jose-manufacturing-suppliers",
    "ai-search-industrial-safety-compliance-suppliers",
    "ai-search-industrial-suppliers-sf-bay-area",
    "ai-search-port-of-oakland-freight-suppliers",
    "ai-search-richmond-refinery-chemical-suppliers",
    "ai-search-south-san-francisco-biotech-suppliers",
    "ai-search-vallejo-defense-maritime-suppliers",
    "ai-seo-silicon-valley-hardware-startups",
    "case-studies",
    "east-bay-industrial-corridor-ai-seo",
    "east-bay-manufacturers-invisible-ai-search",
    "how-llms-build-brand-associations",
    "how-to-structure-technical-data-for-ai-sourcing",
    "model-updates",
    "precision-machining-san-leandro-ai-sourcing",
    "qa-engine-playbook-industrial-faq",
    "questions-buyers-ask-ai-finding-suppliers",
    "silicon-valley-supply-chain-ai-visibility",
    "what-industrial-buyers-want-ai-answers",
    "what-is-entity-seo-industrial-brands",
    "what-is-grounding-in-ai-search",
    "what-is-sro-selection-rate-optimization",
  ];

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" },
    { url: "/ai-seo", priority: 0.9, changeFrequency: "monthly" },
    { url: "/aeo", priority: 0.8, changeFrequency: "monthly" },
    { url: "/sro", priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries", priority: 0.9, changeFrequency: "monthly" },
    {
      url: "/industries/manufacturing",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { url: "/industries/logistics", priority: 0.8, changeFrequency: "monthly" },
    { url: "/lab", priority: 0.9, changeFrequency: "weekly" },
    { url: "/privacy", priority: 0.5, changeFrequency: "monthly" },
    { url: "/terms", priority: 0.5, changeFrequency: "monthly" },
  ];

  const sitemapEntries = [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...labArticles.map((slug) => ({
      url: `${baseUrl}/lab/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];

  return sitemapEntries;
}
