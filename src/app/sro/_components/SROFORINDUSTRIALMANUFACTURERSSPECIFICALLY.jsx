import Link from "next/link";
import MarketMindshareChart from "./charts/MarketMindshareChart";

export default function SROFORINDUSTRIALMANUFACTURERSSPECIFICALLY() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">
                How Does SRO Apply to SF Bay Area Manufacturers?
              </h2>
              <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed">
                For industrial manufacturers in the SF Bay Area corridor, SRO
                addresses a specific challenge: AI procurement tools are
                shortlisting suppliers, but most local brands remain
                structurally invisible.
              </p>

              <div className="mt-10 space-y-8 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Enterprise buyers now routinely query AI platforms — ChatGPT,
                  Perplexity, Gemini — to identify qualified suppliers.
                  Suppliers whose content is not selected do not appear on those
                  shortlists, regardless of their actual capabilities or
                  geographic proximity.
                </p>
                <p>
                  The SF Bay Area industrial corridor spans Fremont, San
                  Leandro, and San Jose. Thousands of qualified manufacturers
                  here are effectively invisible in AI procurement searches
                  because their content is not structured for AI retrieval and
                  selection.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <MarketMindshareChart />
            </div>
          </div>

          <div className="mt-16 text-lg text-zinc-600 leading-relaxed max-w-4xl">
            <p>
              Exagic AI specializes exclusively in this segment. We understand
              the technical language and competitive dynamics of industrial
              manufacturing in Northern California. Our SRO process is
              calibrated for industrial content — converting product
              specifications and capability statements into citable content that
              AI procurement tools prefer to select and cite.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
