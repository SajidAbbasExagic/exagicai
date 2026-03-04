import Link from "next/link";
import AISEOHero from "./_components/AISEOHero";
import WHATISAISEO from "./_components/WHATISAISEO";
import WHYTRADITIONALSEOISNOLONGERENOUGH from "./_components/WHYTRADITIONALSEOISNOLONGERENOUGH";
import THEEXAGICAISEOMETHODOLOGY from "./_components/THEEXAGICAISEOMETHODOLOGY";
import TECHSTACKCAPABILITIES from "./_components/TECHSTACKCAPABILITIES";
import WHONEEDSAISEO from "./_components/WHONEEDSAISEO";
import PLATFORMSPECIFICOPTIMIZATION from "./_components/PLATFORMSPECIFICOPTIMIZATION";
import GLOSSARY from "./_components/GLOSSARY";
import AISEOFAQ from "./_components/AISEOFAQ";
import AISEOClosingCTA from "./_components/AISEOClosingCTA";
import ContactCTA from "../_components/ContactCTA/ContactCTA";

export const metadata = {
  title: "AI SEO for Industrial Manufacturers | Exagic AI | San Francisco",
  description:
    "World-class AI SEO services for SF Bay Area industrial manufacturers. From visibility analysis to practical model steering strategies, Exagic AI ensures your brand dominates AI retrieval.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app/ai-seo",
  },
};
export default function AISEOPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI SEO for Industrial Manufacturers",
    serviceType: "AI SEO",
    provider: {
      "@type": "Organization",
      name: "Exagic AI",
      url: "https://exagic-ai.vercel.app",
    },
    areaServed: "San Francisco Bay Area",
    description:
      "World-class AI SEO services for SF Bay Area industrial manufacturers. From visibility analysis to practical model steering strategies, Exagic AI ensures your brand dominates AI retrieval.",
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
    ],
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI SEO for Industrial Manufacturers | Exagic AI",
    description:
      "A comprehensive guide to AI SEO and AEO for industrial brands, suppliers, and hardware manufacturers in the San Francisco Bay Area.",
    author: {
      "@type": "Organization",
      name: "Exagic AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Exagic AI",
      logo: {
        "@type": "ImageObject",
        url: "https://exagic-ai.vercel.app/logo.png",
      },
    },
    datePublished: "2026-02-20",
    dateModified: "2026-02-20",
  };
  const faqItems = [
    {
      question: "What is AI SEO and how is it different from traditional SEO?",
      answer:
        "AI SEO optimizes your brand for citation inside AI-generated answers, not just ranking in a list of blue links. Traditional SEO targets Google's ranking algorithm. AI SEO targets how language models like ChatGPT, Gemini, and Perplexity retrieve, evaluate, and cite sources when generating answers for users and procurement agents.",
    },
    {
      question: "How does Exagic AI measure AI SEO results?",
      answer:
        "We track citation frequency across major AI platforms, brand mention accuracy and sentiment, entity association strength, and competitive citation share. These metrics replace traditional rank tracking with AI-native performance indicators that reflect actual visibility in generated answers.",
    },
    {
      question:
        "How long does AI SEO take to show results for industrial manufacturers?",
      answer:
        "Initial improvements in entity clarity and content extractability can appear within 30 to 60 days. Meaningful changes in citation frequency and brand association strength typically develop over 3 to 6 months as AI platforms update their retrieval behavior and grounding sources.",
    },
    {
      question: "Does Exagic AI work with companies outside the SF Bay Area?",
      answer:
        "Yes. While our core specialization is the SF Bay Area industrial corridor, we work with industrial manufacturers, global suppliers, and hardware companies across the US and internationally.",
    },
    {
      question: "What is Selection Rate Optimization and why does it matter?",
      answer:
        "Selection Rate is the percentage of times your content is cited when an AI system retrieves it. Low selection rate means AI is finding your content but not using it. Selection Rate Optimization improves content clarity, entity precision, and structural accessibility so that retrieved content is consistently chosen for the final answer.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AISEOHero />
      <WHATISAISEO />
      <WHYTRADITIONALSEOISNOLONGERENOUGH />
      <THEEXAGICAISEOMETHODOLOGY />
      <TECHSTACKCAPABILITIES />
      <WHONEEDSAISEO />
      <PLATFORMSPECIFICOPTIMIZATION />
      <GLOSSARY />
      <AISEOFAQ faqItems={faqItems} />
      <AISEOClosingCTA />
      <ContactCTA />
    </>
  );
}
