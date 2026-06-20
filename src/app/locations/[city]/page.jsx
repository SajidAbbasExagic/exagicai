import { notFound } from "next/navigation";
import Link from "next/link";
import { cities } from "@/data/cities";
import LogoStrip from "@/app/_components/LogoStrip/LogoStrip";
import Capabilities from "@/app/_components/Capabilities/Capabilities";
import IndustryFocus from "@/app/_components/IndustryFocus/IndustryFocus";
import SocialProof from "@/app/_components/SocialProof/SocialProof";
import ContactCTA from "@/app/_components/ContactCTA/ContactCTA";
import Image from "next/image";

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) return {};

  return {
    title: `${city.name} AI SEO & SRO | EXAGIC AI Industrial Methodology`,
    description: `Establishing Local Grounding and Entity Mapping for the ${city.profile} in ${city.name}, California. Case study: ${city.caseStudyTopic}.`,
    alternates: {
      canonical: `https://exagic.ai/locations/${city.slug}`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EXAGIC AI",
    url: "https://exagic.ai",
    areaServed: {
      "@type": "City",
      name: city.name,
      "@id": `https://www.wikidata.org/wiki/${city.wikidataId}`,
    },
    description: city.description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exagic.ai/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://exagic.ai/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `https://exagic.ai/locations/${city.slug}`,
      },
    ],
  };

  const faqSchema = city.richContent?.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: city.richContent.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* City Hero */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="rag-section relative flex min-h-[85vh] items-center bg-white pt-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="pt-8">
            <h2 className="text-sm font-bold leading-7 text-brand uppercase tracking-widest mb-4">
              Local AI Visibility & Entity Mapping
            </h2>
            <h1
              id="hero-heading"
              className="text-xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 leading-[1.2] tracking-tight"
            >
              {city.name} AI SEO Agency specialising in brand visibility
              optimisation for industrial and hardware brands.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-700">
              We help {city.name} brands dominate search results through
              advanced AI-driven SEO strategies, including mechanistic
              interpretability, model steering, and hyper-local entity
              grounding. {city.description}
            </p>

            <p className="mt-4 text-sm sm:text-base text-zinc-500 font-medium">
              Book a consultation with our senior strategy team to discuss your{" "}
              {city.name} project. The consultation is free and highly
              constructive.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="rounded-md bg-brand px-4 py-3 sm:px-6 text-sm sm:text-base font-bold text-white shadow-xl transition-colors hover:bg-brand-dark whitespace-nowrap"
              >
                Schedule a Call
              </Link>
              <Link
                href="/ai-seo"
                className="text-zinc-900 text-xs sm:text-base font-bold hover:text-brand transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
              >
                See Our Capabilities
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Logo Strip */}
      <LogoStrip />

      {/* Global Capabilities Section */}
      <div className="bg-zinc-50 pt-16">
        <Capabilities />
      </div>

      {/* Rich Industrial Content Section (Conditional) */}
      {city.richContent && (
        <section className="py-24 bg-white border-y border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6">
                Regional Industrial Analysis: {city.name}
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Authentic visibility in {city.name} requires more than just
                ranking. We map your physical footprint against the specific
                industrial nodes that define the city's supply chain authority.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
              {city.richContent.industrialNodes.map((node, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-300 font-bold text-xl group-hover:text-brand transition-colors border border-zinc-100 italic">
                    {i + 1}
                  </div>
                  <div className="pl-10 pt-2 pb-6 border-b border-zinc-100 h-full">
                    <h4 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-brand transition-colors">
                      {node.name}
                    </h4>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {city.richContent.aiStrategies.map((strat, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-zinc-950 text-white relative overflow-hidden group shadow-2xl"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-16 h-16"
                    >
                      <path d="M13 3l-2 3H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5l-2-3H13z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-4 relative z-10">
                    {strat.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                    {strat.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Local Stats / Facts Bar */}
            <div className="bg-brand/5 border border-brand/20 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand block mb-4">
                  Regional Status Monitor
                </span>
                <p className="text-xl font-bold text-zinc-900 leading-tight">
                  "{city.richContent.regionalStats.topQuery}"
                </p>
                <p className="text-sm text-zinc-500 mt-2 italic">
                  Critical local intent captured via Entity Grounding
                </p>
              </div>
              <div className="w-px h-16 bg-brand/20 hidden md:block" />
              <div className="flex gap-12">
                <div>
                  <span className="text-3xl font-bold text-zinc-900 block mb-1">
                    {city.richContent.regionalStats.visibilityGap.split(" ")[0]}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Visibility Gap
                  </span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-brand block mb-1">
                    {
                      city.richContent.regionalStats.targetCitationRate.split(
                        " ",
                      )[0]
                    }
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Target Rate
                  </span>
                </div>
              </div>
            </div>

            {/* Localized FAQ / AEO Knowledge Base */}
            {city.richContent.faqs && (
              <div className="mt-24 pt-24 border-t border-zinc-100">
                <div className="max-w-3xl mb-12">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                    Local AEO Knowledge Base: {city.name}
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium">
                    Addressing local industrial search patterns for machine
                    agents
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  {city.richContent.faqs.map((faq, i) => (
                    <div key={i} className="group">
                      <h4 className="text-lg font-bold text-zinc-900 mb-4 flex items-start gap-3">
                        <span className="text-brand font-black shrink-0">
                          Q.
                        </span>
                        {faq.question}
                      </h4>
                      <p className="text-zinc-600 text-[15px] leading-relaxed pl-7 border-l-2 border-zinc-50 group-hover:border-brand/30 transition-colors">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* City-Specific Analysis Section */}
      <section className="py-24 sm:py-32 bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-6">
                Advanced AI SEO Strategies for {city.name}
              </h2>
              <div className="space-y-4 text-zinc-600 leading-8 text-lg">
                <p>
                  For brands operating within the{" "}
                  <span className="font-semibold text-zinc-900">
                    {city.profile}
                  </span>
                  , generic SEO is no longer sufficient. Our specialized{" "}
                  <Link
                    href="/aeo"
                    className="text-brand hover:underline font-medium"
                  >
                    Answer Engine Optimization (AEO)
                  </Link>{" "}
                  strategies focus on linking your technical expertise directly
                  to geographic coordinates, ensuring that Large Language Models
                  (LLMs) accurately "ground" your entity as the definitive
                  regional authority.
                </p>
                <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm my-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-x-2">
                    <span className="h-6 w-1 bg-brand rounded-full" />
                    Strategic Focus
                  </h3>
                  <p className="text-zinc-600 italic">
                    "{city.caseStudyTopic}"
                  </p>
                </div>
                <p>
                  Instead of relying on dated ranking tactics, we implement
                  high-fidelity technical data sets that AI search engines use
                  to resolve intent. This prevents "AI hallucinations" where
                  models might incorrectly associate your brand with the wrong
                  physical address or region, maximizing your{" "}
                  <Link
                    href="/sro"
                    className="text-brand hover:underline font-medium"
                  >
                    Selection Rate Optimization (SRO)
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 lg:p-12 border border-zinc-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-32 h-32"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79l5.79 5.79v1.93zm5.91-2.91C15.65 18.2 13.92 19 12 19c-.3 0-.6-.02-.89-.07l.89-.89v-1.5l-1.5-1.5V11l2.5-2.5v3l3 3v2.02z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-100 pb-4 relative z-10">
                Core AI Local Capabilities
              </h3>
              <dl className="space-y-10 relative z-10">
                <div>
                  <dt className="flex items-center gap-x-4 text-lg font-bold leading-7 text-zinc-900">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand text-sm font-black">
                      01
                    </span>
                    Geographic Entity Linking
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-zinc-600 pl-14">
                    Mapping {city.name} industrial nodes to business entities
                    via Wikidata and JSON-LD AreaServed collections. This
                    ensures AI explicitly knows your service zone.
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-x-4 text-lg font-bold leading-7 text-zinc-900">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand text-sm font-black">
                      02
                    </span>
                    Targeting Localized Queries
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-zinc-600 pl-14">
                    Capturing high-intent B2B search strings specifically tuned
                    to the industrial profile of {city.name}. We optimize for
                    the prompts buyers actually use in AI chat.
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-x-4 text-lg font-bold leading-7 text-zinc-900">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand text-sm font-black">
                      03
                    </span>
                    Grounding Verification
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-zinc-600 pl-14">
                    Citing regional authority and specific location data to
                    prevent misattribution in model-generated answers, acting as
                    a safeguard for your AI visibility.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Traffic CTA Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Left Image Area */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[400px]">
                <Image
                  src="/team/arthur.jpg"
                  alt="Saif K - AI SEO Expert"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Right Text Area */}
            <div className="w-full md:w-7/12">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-zinc-900 tracking-tight leading-[1.15] mb-8 pr-4">
                See How My Agency Can Drive <span className="text-brand">More</span> Traffic to Your Website
              </h2>
              
              <div className="space-y-6 mb-12 text-lg text-zinc-700 leading-relaxed max-w-xl">
                <p>
                  <strong className="text-zinc-900 font-semibold">AI SEO</strong> - unlock more AI search traffic. See real results.
                </p>
                <p>
                  <strong className="text-zinc-900 font-semibold">Content Marketing</strong> - our team creates epic semantic content that will get shared, get links, and attract traffic.
                </p>
                <p>
                  <strong className="text-zinc-900 font-semibold">Paid Media & SRO</strong> - effective visibility strategies with clear ROI.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#f05a28] hover:bg-[#d94a1d] text-white font-bold tracking-[0.1em] uppercase text-sm px-10 py-5 rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                BOOK A CALL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Industry Focus */}
      <IndustryFocus />

      {/* Global Social Proof */}
      <SocialProof />

      <ContactCTA />
    </div>
  );
}
