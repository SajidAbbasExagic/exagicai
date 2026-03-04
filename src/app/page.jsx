import Hero from "./_components/Hero/Hero";
import Logic from "./_components/Logic/Logic";
import Capabilities from "./_components/Capabilities/Capabilities";
import IndustryFocus from "./_components/IndustryFocus/IndustryFocus";
import ProjectTypes from "./_components/ProjectTypes/ProjectTypes";
import Team from "./_components/Team/Team";
import LogoStrip from "./_components/LogoStrip/LogoStrip";
import SocialProof from "./_components/SocialProof/SocialProof";
import FAQ from "./_components/FAQ/FAQ";
import ContactCTA from "./_components/ContactCTA/ContactCTA";

export const metadata = {
  title: "Exagic AI | AI SEO & SRO Agency San Francisco",
  description:
    "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
  alternates: {
    canonical: "https://exagic-ai.vercel.app",
  },
};

export default function HomePage() {
  /* ═══════════════════════════════════════════════
     PRIMARY ENTITY: Organization
     ═══════════════════════════════════════════════ */
  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Exagic AI",
    url: "https://www.exagic.ai",
    logo: "https://www.exagic.ai/exagic-logo.png",
    description:
      "Exagic AI is a San Francisco AI SEO agency specializing in brand visibility optimization for industrial manufacturers, global suppliers, and hardware companies in the SF Bay Area corridor.",
    slogan: "Specialized AI SEO for the SF Industrial Corridor.",
    knowsAbout: [
      "Answer Engine Optimization",
      "Selection Rate Optimization",
      "AI Search Visibility",
      "Mechanistic Interpretability",
      "Industrial AI SEO",
      "Entity SEO",
      "Retrieval-Augmented Generation Optimization",
      "AI Procurement Visibility",
      "Technical Spec Retrieval",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Oakland",
        sameAs: "https://www.wikidata.org/wiki/Q17042",
      },
      {
        "@type": "City",
        name: "Fremont",
        sameAs: "https://www.wikidata.org/wiki/Q486517",
      },
      {
        "@type": "City",
        name: "San Leandro",
        sameAs: "https://www.wikidata.org/wiki/Q860166",
      },
      {
        "@type": "City",
        name: "San Jose",
        sameAs: "https://www.wikidata.org/wiki/Q16553",
      },
      {
        "@type": "City",
        name: "Richmond",
        sameAs: "https://www.wikidata.org/wiki/Q49114",
      },
      {
        "@type": "City",
        name: "Hayward",
        sameAs: "https://www.wikidata.org/wiki/Q866660",
      },
      {
        "@type": "City",
        name: "Vallejo",
        sameAs: "https://www.wikidata.org/wiki/Q108067",
      },
      {
        "@type": "City",
        name: "South San Francisco",
        sameAs: "https://www.wikidata.org/wiki/Q878503",
      },
      {
        "@type": "AdministrativeArea",
        name: "San Francisco Bay Area",
        sameAs: "https://www.wikidata.org/wiki/Q109186",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.6879",
      longitude: "-122.0470",
    },
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "San Francisco Bay Area",
      sameAs: "https://www.wikidata.org/wiki/Q109186",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI SEO Services for Industrial Manufacturers",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Search Engine Optimization",
            url: "https://www.exagic.ai/capabilities",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Answer Engine Optimization",
            url: "https://www.exagic.ai/capabilities/aeo",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Selection Rate Optimization",
            url: "https://www.exagic.ai/capabilities/sro",
          },
        },
      ],
    },
    sameAs: ["https://www.linkedin.com/company/exagic-ai"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Exagic AI",
    url: "https://exagic-ai.vercel.app",
    description:
      "AI SEO and Answer Engine Optimization for industrial manufacturers.",
    publisher: {
      "@type": "Organization",
      name: "Exagic AI",
    },
  };

  /* ═══════════════════════════════════════════════
     BREADCRUMB: Helps AI models understand site hierarchy
     ═══════════════════════════════════════════════ */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exagic-ai.vercel.app",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <Logic />
      <Capabilities />
      <Team />
      <LogoStrip />
      <SocialProof />
      <IndustryFocus />
      <ProjectTypes />
      <FAQ />
      <ContactCTA />
    </>
  );
}
