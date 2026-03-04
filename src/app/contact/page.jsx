import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";

export const metadata = {
  title: "Contact Us | Exagic AI Strategy Team",
  description:
    "Schedule a consultation with the Exagic AI strategy team to discuss AI SEO, AEO, and SRO for your industrial business.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] pointer-events-none"></div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
