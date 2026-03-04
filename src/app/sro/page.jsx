import Link from "next/link";
import SROHero from "./_components/SROHero";
import WHATISSELECTIONRATE from "./_components/WHATISSELECTIONRATE";
import THEEXAGICAISROPROCESS from "./_components/THEEXAGICAISROPROCESS";
import WHYCONTENTGETSRETRIEVEDBUTNOTSELECTED from "./_components/WHYCONTENTGETSRETRIEVEDBUTNOTSELECTED";
import SROFORINDUSTRIALMANUFACTURERSSPECIFICALLY from "./_components/SROFORINDUSTRIALMANUFACTURERSSPECIFICALLY";
import WHATSROISNOT from "./_components/WHATSROISNOT";
import SROFAQ from "./_components/SROFAQ";
import SROClosingCTA from "./_components/SROClosingCTA";
import ContactCTA from "../_components/ContactCTA/ContactCTA";

export const metadata = {
  title: "Selection Rate Optimization (SRO) for Industrial Brands | Exagic AI",
  description:
    "Selection Rate Optimization by Exagic AI — advanced techniques to increase the probability of your brand being selected as the primary citation by AI models during retrieval.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/sro",
  },
};
export default function SROPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Selection Rate Optimization (SRO)",
    serviceType: "SRO",
    provider: {
      "@type": "Organization",
      name: "Exagic AI",
      url: "https://exagic-ai.vercel.app",
    },
    areaServed: "San Francisco Bay Area",
    description:
      "Advanced techniques to increase the probability of your brand being selected as the primary citation by AI models during retrieval.",
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
        name: "Selection Rate Optimization",
        item: "https://exagic-ai.vercel.app/sro",
      },
    ],
  };
  const faqItems = [
    {
      question: "What is Selection Rate Optimization (SRO)?",
      answer:
        "SRO is an AI SEO discipline that improves the probability of your brand's content being selected as a primary citation by AI models during retrieval. When AI systems retrieve multiple sources to generate an answer, SRO ensures your content is the one they choose.",
    },
    {
      question: "How is SRO different from traditional SEO?",
      answer:
        "Traditional SEO optimizes for ranking position in a list of search results. SRO optimizes for citation selection inside AI-generated answers. The metrics, techniques, and success indicators are fundamentally different — though both disciplines share the same technical foundation of crawlability, structured data, and content quality.",
    },
    {
      question: "How does Exagic AI measure Selection Rate?",
      answer:
        "We measure selection rate as the number of times your content is cited divided by the number of times it is retrieved across a defined query set, expressed as a percentage. We track this metric over time alongside citation frequency, brand mention accuracy, and competitive selection share.",
    },
    {
      question: "How long does SRO take to show results?",
      answer:
        "Initial improvements in snippet quality and content structure can produce selection rate changes within 30–60 days. Sustained improvement in selection rate across a competitive query set typically develops over 3–6 months as optimization cycles compound and AI platforms update their retrieval behavior.",
    },
    {
      question: "Does SRO work for all AI platforms?",
      answer:
        "We optimize for Google Gemini and AI Overviews, ChatGPT and GPT-based models, and Perplexity AI. Each platform uses different retrieval and selection mechanisms, and our process accounts for platform-specific behavior in both the diagnostic and optimization stages.",
    },
    {
      question: "Is SRO relevant for industrial manufacturers specifically?",
      answer:
        "Yes — SRO is particularly relevant for industrial manufacturers because AI procurement tools are increasingly used by buyers to identify and shortlist suppliers. Industrial brands with unoptimized content are being retrieved but not selected in these AI-generated supplier searches, making them invisible to a growing segment of their target buyers.",
    },
    {
      question: "What does an SRO engagement with Exagic AI include?",
      answer:
        "A full SRO engagement includes entity mapping, query fanout and prompt generation, grounding candidate analysis, baseline selection rate measurement, snippet and content optimization, implementation support, and ongoing monthly tracking with iterative refinement cycles.",
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
      <SROHero />
      <WHATISSELECTIONRATE />
      <THEEXAGICAISROPROCESS />
      <WHYCONTENTGETSRETRIEVEDBUTNOTSELECTED />
      <SROFORINDUSTRIALMANUFACTURERSSPECIFICALLY />
      <WHATSROISNOT />
      <SROFAQ faqItems={faqItems} />
      <SROClosingCTA />
      <ContactCTA />
    </>
  );
}
