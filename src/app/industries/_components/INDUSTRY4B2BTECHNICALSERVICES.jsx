import Link from "next/link";

export default function INDUSTRY4B2BTECHNICALSERVICES() {
  return (
    <>
      <section
        id="technical-services"
        className="bg-zinc-50 py-24 border-y border-zinc-100 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-zinc-900">
          <div className="max-w-4xl text-zinc-900">
            <h2 className="text-4xl font-semibold text-zinc-900">
              AI SEO for B2B Technical Services
            </h2>
            <p className="mt-6 text-xl font-medium text-zinc-900 leading-relaxed text-zinc-900">
              Engineering consultancies, calibration labs, testing facilities,
              quality assurance firms, and technical staffing agencies serving
              industrial clients in the SF Bay Area rely on expert credibility
              signals that AI systems struggle to extract from typical
              professional services websites. Exagic AI structures your
              expertise, credentials, and methodologies as AI-citable authority
              signals.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 text-zinc-900">
              {[
                "Engineering Consulting",
                "Calibration Services",
                "Quality Assurance",
                "NADCAP Certified",
                "ISO 17025",
                "Technical Staffing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-lg text-zinc-600 leading-relaxed text-zinc-900">
              <p>
                Buyers sourcing B2B technical services query AI systems for
                verifiable expertise — specific certifications, named
                methodologies, accreditation standards, and documented outcomes.
                A quality assurance firm with ISO 17025 accreditation, NADCAP
                certification, and a documented track record in aerospace
                component testing is a highly specific, verifiable entity that
                AI systems can confidently cite. The same firm described as "a
                leading quality assurance provider" with no specifics is
                invisible to those queries.
              </p>
              <p>
                AEO for B2B technical services focuses on expert entity signals
                — making named specialists, documented methodologies, held
                certifications, and specific service outcomes into AI-readable
                entities on your website. This includes Person schema for key
                experts, Service schema for accredited service lines, and
                content that directly answers the questions buyers ask AI when
                evaluating technical service providers: "which Bay Area
                calibration labs are ISO 17025 accredited?", "what testing
                capabilities does [firm] have for aerospace materials?"
              </p>
              <p>
                The authority gap between technical service providers with
                well-structured digital presence and those without is growing
                rapidly as AI procurement becomes the default first step in
                vendor evaluation. Exagic AI helps B2B technical services firms
                close that gap — ensuring that genuine expertise translates into
                AI-cited recommendations rather than being invisible because
                content structure does not meet AI extraction standards.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/aeo"
                className="text-lg font-bold text-brand hover:underline"
              >
                Learn how AEO builds expert authority signals →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
