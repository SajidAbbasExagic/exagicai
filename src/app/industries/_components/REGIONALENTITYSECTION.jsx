import Link from "next/link";

export default function REGIONALENTITYSECTION() {
  return (
    <>
      <section className="bg-white py-24 text-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900">
              SF Bay Area Industrial Regions we serve
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed text-zinc-900">
              Exagic AI serves industrial clients across the full SF Bay Area
              corridor, from the East Bay manufacturing belt and Fremont
              logistics hub to Silicon Valley hardware companies and the Port of
              Oakland supply chain network. Regional entity precision is core to
              our AI SEO process for every client.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                East Bay Manufacturing Belt
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Home to precision manufacturers, metal fabricators, and
                industrial component suppliers. Key cities: Oakland, Hayward,
                Union City, Newark.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                Fremont Logistics Hub
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                One of the most critical logistics and distribution hubs in
                Northern California, serving the Port of Oakland and Silicon
                Valley supply chains.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                Silicon Valley Hardware Corridor
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Electronics manufacturers, semiconductor suppliers, PCB
                assemblers, and hardware startups concentrated across San Jose,
                Santa Clara, and Sunnyvale.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                San Jose Industrial District
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Home to aerospace component manufacturers, cleantech companies,
                and heavy industrial operations in South Bay.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                San Francisco Industrial Corridor
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                The historic SF industrial waterfront, including Dogpatch,
                Bayview, and the Potrero district, housing design-build firms,
                specialty manufacturers, and technical services companies.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900">
                Port of Oakland Supply Chain Network
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                The third-busiest container port in the US, serving as the
                primary import/export hub for Northern California industrial
                supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
