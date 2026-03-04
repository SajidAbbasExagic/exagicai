import Link from "next/link";

export default function LabCTA() {
  return (
    <section className="bg-white py-24 pb-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="rounded-[3rem] bg-zinc-900 p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Stop guessing about AI visibility.
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12 font-medium">
              If you aren&apos;t showing up in procurement searches, you are
              losing market share every day. Let&apos;s fix your data structure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Secure Your Citations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
