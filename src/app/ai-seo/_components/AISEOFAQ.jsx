import Link from "next/link";

export default function AISEOFAQ({ faqItems }) {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              FAQs about AI SEO for Manufacturers
            </h2>
            <div className="mt-12 space-y-12">
              {faqItems.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-lg text-zinc-600 leading-relaxed italic border-l-4 border-brand pl-6">
              <p>
                Do you have more questions about how AI is reshaping the
                industrial supply chain? Our team is available for deep-dive
                consultations specifically for manufacturers located in Fremont,
                San Jose, Oakland, and the wider SF Bay Area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
