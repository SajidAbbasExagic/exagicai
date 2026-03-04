import Link from "next/link";
import AEOHero from "./_components/AEOHero";
import WHATISAEO from "./_components/WHATISAEO";
import HOWAEODIFFERSFROMSEOANDSRO from "./_components/HOWAEODIFFERSFROMSEOANDSRO";
import THEEXAGICAIAEOPROCESS from "./_components/THEEXAGICAIAEOPROCESS";
import WHYINDUSTRIALBRANDSAREUNDERREPRESENTEDINAIANSWERS from "./_components/WHYINDUSTRIALBRANDSAREUNDERREPRESENTEDINAIANSWERS";
import AEOFORSPECIFICINDUSTRIALCONTEXTS from "./_components/AEOFORSPECIFICINDUSTRIALCONTEXTS";
import AEOFAQ from "./_components/AEOFAQ";
import AEOClosingCTA from "./_components/AEOClosingCTA";
import ContactCTA from "../_components/ContactCTA/ContactCTA";

export const metadata = {
  title: "Answer Engine Optimization (AEO) for Industrial Brands | Exagic AI",
  description:
    "Answer Engine Optimization services for industrial brands. Exagic AI ensures your products and services are the default recommendation in ChatGPT, Gemini, and Perplexity when industrial buyers search.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/aeo",
  },
};
export default function AEOPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Answer Engine Optimization (AEO)",
    serviceType: "AEO",
    provider: {
      "@type": "Organization",
      name: "Exagic AI",
      url: "https://exagic-ai.vercel.app",
    },
    areaServed: "San Francisco Bay Area",
    description:
      "Answer Engine Optimization services for SF Bay Area industrial manufacturers, hardware suppliers, and B2B companies, ensuring brand citation in ChatGPT, Gemini, and Perplexity.",
  };
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
        name: "AI SEO",
        item: "https://exagic-ai.vercel.app/ai-seo",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Answer Engine Optimization",
        item: "https://exagic-ai.vercel.app/aeo",
      },
    ],
  };
  const faqItems = [
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer:
        "AEO is the practice of structuring your brand's content and data so that AI platforms, including ChatGPT, Google Gemini, and Perplexity, can extract, trust, and cite it as a direct answer to buyer queries. It focuses on citation in AI-generated answers rather than ranking in traditional search results.",
    },
    {
      question: "How is AEO different from traditional SEO?",
      answer:
        "Traditional SEO optimizes for ranking position in a list of search results. AEO optimizes for citation inside AI-generated answers, where there may be no list of links at all. Both share the same technical foundation, crawlable content, structured data, and authoritative signals, but AEO adds a layer of AI-specific content structuring and entity optimization on top.",
    },
    {
      question: "Why do industrial manufacturers need AEO specifically?",
      answer:
        "Industrial procurement has shifted. Enterprise buyers increasingly query AI tools like ChatGPT, Gemini, and Perplexity before they use traditional search engines to identify and shortlist suppliers. Industrial brands whose content is not structured for AI citation are absent from AI-generated procurement answers, regardless of their actual capabilities or traditional search performance.",
    },
    {
      question:
        "How long does AEO take to produce results for industrial brands?",
      answer:
        "Initial improvements in AI citation frequency can appear within 4–8 weeks of content and schema implementation. Sustained citation growth across a competitive query set typically develops over 3–6 months. The timeline depends on the starting state of your content structure, domain authority, and competitive citation landscape.",
    },
    {
      question: "Which AI platforms does Exagic AI optimize for?",
      answer:
        "We optimize for Google Gemini and AI Overviews, ChatGPT and GPT-based models, and Perplexity AI, built",
    },
    {
      question: "How does Exagic AI measure AEO success?",
      answer:
        "We track citation frequency across defined query sets, brand mention accuracy in AI-generated answers, entity association strength over time, and competitive citation share — measured monthly across all major AI platforms. These AI-native metrics replace traditional rank tracking as the primary performance indicators.",
    },
    {
      question: "Does AEO require rebuilding our entire website?",
      answer:
        "No. AEO optimizations are applied at the content and schema level — restructuring existing pages, improving opening paragraphs, adding structured data, and expanding question coverage. A complete website rebuild is rarely necessary. We begin with your highest-priority pages and expand from there based on citation tracking results.",
    },
    {
      question: "What is the difference between AEO and SRO?",
      answer:
        "AEO focuses on getting your content into the set of sources AI systems retrieve when answering relevant queries. SRO (Selection Rate Optimization) focuses on ensuring your content is selected from that retrieved set as the primary citation. AEO gets you retrieved. SRO gets you chosen. Both are part of Exagic AI's full-service offering.",
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AEOHero />
      <WHATISAEO />
      <HOWAEODIFFERSFROMSEOANDSRO />
      <THEEXAGICAIAEOPROCESS />
      <WHYINDUSTRIALBRANDSAREUNDERREPRESENTEDINAIANSWERS />
      <AEOFORSPECIFICINDUSTRIALCONTEXTS />
      <AEOFAQ faqItems={faqItems} />
      <AEOClosingCTA />
      <ContactCTA />
    </>
  );
}
