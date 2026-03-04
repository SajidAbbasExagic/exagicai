export default function LabFilterBar({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100 overflow-x-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-sm font-bold text-zinc-400 mr-4 uppercase tracking-widest">
            Research Categories:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-zinc-900 text-white shadow-lg shadow-zinc-200"
                  : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
