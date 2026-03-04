import Link from "next/link";

export default function SROFAQ({ faqItems }) {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold text-zinc-900">
              Selection Rate Optimization (SRO) FAQs
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
                Still have questions about how Selection Rate impacts your
                contract pipeline? Reach out to our specialist team in the SF
                Bay Area for a detailed technical audit of your current AI
                selection performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
