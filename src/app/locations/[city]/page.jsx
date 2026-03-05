import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import ContactCTA from "@/app/_components/ContactCTA/ContactCTA";

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

      {/* City Hero */}
      <section className="relative isolate overflow-hidden bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.zinc.900),theme(colors.zinc.950))] opacity-40" />
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand uppercase tracking-widest">
            Local Grounding & Entity Mapping
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {city.name} Methodology
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-3 text-zinc-400 text-sm">
            <span>{city.profile}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>EXAGIC Industrial Strategy</span>
          </div>
          <p className="mt-10 text-xl leading-8 text-zinc-300 max-w-3xl mx-auto">
            {city.description}
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-6">
                City-Specific Industrial Analysis
              </h2>
              <div className="space-y-8 text-zinc-600 leading-8">
                <p>
                  For brands operating within the{" "}
                  <span className="font-semibold text-zinc-900">
                    {city.profile}
                  </span>
                  , generic SEO is no longer sufficient. Our methodology focuses
                  on linking technical expertise directly to geographic
                  coordinates, ensuring that LLMs accurately "ground" your
                  entity as a regional authority.
                </p>
                <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-x-2">
                    <span className="h-6 w-1 bg-brand rounded-full" />
                    Methodology Topic
                  </h3>
                  <p className="text-zinc-600 italic">
                    "{city.caseStudyTopic}"
                  </p>
                </div>
                <p>
                  Instead of generic landing pages, we implement high-fidelity
                  technical data sets that AI search engines use to resolve
                  intent. This prevents "AI hallucinations" where models might
                  incorrectly associate your brand with the wrong physical
                  address or region.
                </p>
              </div>
            </div>

            <div className="bg-zinc-100 rounded-3xl p-8 lg:p-12 border border-zinc-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 underline decoration-brand/30 decoration-4 underline-offset-8">
                Local Strategic Pillars
              </h3>
              <dl className="space-y-10">
                <div>
                  <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-zinc-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white text-xs">
                      01
                    </span>
                    Geographic Entity Linking
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-zinc-600 pl-11">
                    Mapping {city.name} industrial nodes to business entities
                    via Wikidata and JSON-LD AreaServed collections.
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-zinc-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white text-xs">
                      02
                    </span>
                    Targeting Localized Queries
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-zinc-600 pl-11">
                    Capturing high-intent B2B search strings specifically tuned
                    to the industrial profile of {city.name}.
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-zinc-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white text-xs">
                      03
                    </span>
                    Grounding Verification
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-zinc-600 pl-11">
                    Citing regional authority and specific location data to
                    prevent misattribution in model-generated answers.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
