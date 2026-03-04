import Link from "next/link";

const getCategoryColor = (cat) => {
  switch (cat) {
    case "AI SEO Education":
      return "text-blue-600 bg-blue-50 border-blue-100";
    case "Industry Specific":
      return "text-emerald-600 bg-emerald-50 border-emerald-100";
    case "Location Specific":
      return "text-purple-600 bg-purple-50 border-purple-100";
    case "Q&A":
      return "text-amber-600 bg-amber-50 border-amber-100";
    default:
      return "text-zinc-600 bg-zinc-50 border-zinc-100";
  }
};

export default function LabArticleGrid({ filteredArticles }) {
  return (
    <section className="bg-zinc-50 py-24 pb-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.href}
              className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="h-1 w-full bg-zinc-100 transition-colors duration-300"></div>

              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-semibold ${getCategoryColor(article.category)}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    {article.date}
                  </span>
                </div>

                <h2 className="text-[1.35rem] font-bold text-zinc-900 leading-snug mb-4 transition-colors duration-300">
                  <Link href={article.href} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.title}
                  </Link>
                </h2>

                <p className="text-zinc-600 leading-relaxed mb-8 flex-grow line-clamp-3 text-sm md:text-base">
                  {article.description}
                </p>

                <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-zinc-600">
                        EA
                      </span>
                    </div>
                    <span className="text-sm font-medium text-zinc-700">
                      Exagic AI Lab
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-zinc-900 transition-transform group-hover:translate-x-1 duration-300">
                    Read →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-32">
            <p className="text-xl text-zinc-400 font-medium">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
