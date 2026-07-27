import FAQAccordion from "@/components/ui/FAQAccordion";

export default function SROFAQ({ faqItems }) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-12">
            Selection Rate Optimization (SRO) FAQs
          </h2>
          
          <FAQAccordion items={faqItems} defaultOpenIndex={0} />

          <div className="mt-16 text-lg text-zinc-600 leading-relaxed italic border-l-4 border-brand pl-6 bg-zinc-50/50 py-4 pr-4 rounded-r-xl">
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
  );
}
