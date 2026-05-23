export default function sitemap() {
  const baseUrl = "https://exagic.ai";

  const labArticles = [
    "neil-patel-llmo-industrial-ai-seo-playbook",
    "ai-visibility-kpi-dashboard-industrial-cmos",
    "how-ai-search-is-changing-b2b-vendor-shortlisting-2026",
    "2026-bay-area-industrial-ai-visibility-report",
    "aeo-vs-seo-industrial-brands",
    "ai-adoption-by-country",
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
    "rise-of-ai-referral-traffic",
    "silicon-valley-supply-chain-ai-visibility",
    "what-industrial-buyers-want-ai-answers",
    "what-is-entity-seo-industrial-brands",
    "what-is-grounding-in-ai-search",
    "what-is-sro-selection-rate-optimization",
    "do-ai-systems-only-cite-you-if-youre-in-googles-entity-database",
    "60-percent-searches-zero-click-industrial-existential-threat",
    "sro-grounding-snippets",
    "ai-agents-procurement-2027-manufacturing",
    "anthropic-institute-ai-society",
  ];

  const locations = [
    "san-francisco",
    "oakland",
    "fremont",
    "san-leandro",
    "san-jose",
    "alameda",
    "hayward",
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
    ...locations.map((slug) => ({
      url: `${baseUrl}/locations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
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
