export default function LabHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-zinc-50 border-b border-zinc-100">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1]">
            Exagic AI <span className="text-brand/50">Lab</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl font-medium text-zinc-900 leading-tight">
            We research why some industrial brands get cited by AI and others
            don&apos;t.
          </p>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed max-w-2xl">
            This is our lab, where we document the math of visibility and the
            reality of Answer Engine Optimization. No jargon. Only numbers.
          </p>
        </div>
      </div>
    </section>
  );
}
