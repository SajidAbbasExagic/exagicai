import Link from "next/link";
import IndustriesHero from "./_components/IndustriesHero";
import INTROPARAGRAPH from "./_components/INTROPARAGRAPH";
import INDUSTRY1PRECISIONMANUFACTURING from "./_components/INDUSTRY1PRECISIONMANUFACTURING";
import INDUSTRY2LOGISTICSANDSUPPLYCHAIN from "./_components/INDUSTRY2LOGISTICSANDSUPPLYCHAIN";
import INDUSTRY3ELECTRONICSANDHARDWARE from "./_components/INDUSTRY3ELECTRONICSANDHARDWARE";
import INDUSTRY4B2BTECHNICALSERVICES from "./_components/INDUSTRY4B2BTECHNICALSERVICES";
import INDUSTRY5ENGINEERINGANDCONSTRUCTION from "./_components/INDUSTRY5ENGINEERINGANDCONSTRUCTION";
import INDUSTRY6CLEANTECHANDENERGY from "./_components/INDUSTRY6CLEANTECHANDENERGY";
import REGIONALENTITYSECTION from "./_components/REGIONALENTITYSECTION";
import IndustriesFAQ from "./_components/IndustriesFAQ";
import IndustriesClosingCTA from "./_components/IndustriesClosingCTA";
import ContactCTA from "../_components/ContactCTA/ContactCTA";

export const metadata = {
  title: "AI SEO for SF Bay Area Industrial Sectors | Exagic AI",
  description:
    "AI SEO for SF Bay Area industrial manufacturers, East Bay suppliers, Silicon Valley hardware companies, and Fremont logistics hubs. Exagic AI specializes in your sector.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/industries",
  },
};
export default function IndustriesPage() {
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
    ],
  };
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Precision Manufacturing",
        url: "https://exagic-ai.vercel.app/industries#precision-manufacturing",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Logistics and Supply Chain",
        url: "https://exagic-ai.vercel.app/industries#logistics",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Electronics and Hardware",
        url: "https://exagic-ai.vercel.app/industries#electronics",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "B2B Technical Services",
        url: "https://exagic-ai.vercel.app/industries#technical-services",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Engineering and Construction",
        url: "https://exagic-ai.vercel.app/industries#engineering",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Cleantech and Energy",
        url: "https://exagic-ai.vercel.app/industries#cleantech",
      },
    ],
  };
  const faqItems = [
    {
      question: "Which industries does Exagic AI serve?",
      answer:
        "Exagic AI serves six core industrial sectors in the SF Bay Area: precision manufacturing, logistics and supply chain, electronics and hardware, B2B technical services, engineering and construction, and cleantech and energy. All services are delivered with deep knowledge of the procurement language, buyer behavior, and AI search patterns specific to each sector.",
    },
    {
      question: "Does Exagic AI work with companies outside the SF Bay Area?",
      answer:
        "Yes. While our core specialization is the SF Bay Area industrial corridor, we work with industrial manufacturers, global suppliers, and hardware companies across the US and internationally. Our AEO and SRO processes are effective regardless of geography.",
    },
    {
      question:
        "How does Exagic AI tailor its approach for different industrial sectors?",
      answer:
        "Each industrial sector has its own procurement language, certification landscape, and buyer behavior patterns. We begin every engagement with an industry-specific AI visibility audit — mapping the exact queries buyers in your sector are asking AI platforms and calibrating our optimization process to the specific entity language and content structures that perform in your niche.",
    },
    {
      question: "What makes industrial AI SEO different from standard AI SEO?",
      answer:
        "Industrial procurement involves highly technical, specification-driven queries — tolerance ranges, certification standards, load capacities, geographic service areas — that require entity-precise content structures very different from consumer or general B2B content. Industrial AI SEO requires deep familiarity with technical procurement language and the ability to convert specification data into AI-citable entities.",
    },
    {
      question:
        "How quickly can Exagic AI improve AI visibility for industrial brands?",
      answer:
        "Initial improvements in citation frequency can appear within 4–8 weeks of content and schema implementation. Sustained visibility growth across a competitive industrial query set typically develops over 3–6 months, with ongoing monthly tracking and iteration cycles maintaining and improving performance over time.",
    },
  ];
  const faqJsonLd = {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <IndustriesHero />
      <INTROPARAGRAPH />
      <INDUSTRY1PRECISIONMANUFACTURING />
      <INDUSTRY2LOGISTICSANDSUPPLYCHAIN />
      <INDUSTRY3ELECTRONICSANDHARDWARE />
      <INDUSTRY4B2BTECHNICALSERVICES />
      <INDUSTRY5ENGINEERINGANDCONSTRUCTION />
      <INDUSTRY6CLEANTECHANDENERGY />
      <REGIONALENTITYSECTION />
      <IndustriesFAQ faqItems={faqItems} />
      <IndustriesClosingCTA />
      <ContactCTA />
    </>
  );
}
