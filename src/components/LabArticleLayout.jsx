import Link from "next/link";
import Script from "next/script";
import ArticleComments from "./ArticleComments";
import ArticleNavigation from "./ArticleNavigation";
import UnifiedBlogCTA from "./UnifiedBlogCTA";
import SidebarTOC from "./SidebarTOC";
import SidebarAuthor from "./SidebarAuthor";
import SidebarCTA from "./SidebarCTA";

export default function LabArticleLayout({
  title,
  metaTitle,
  metaDescription,
  datePublished,
  category,
  tags = [],
  articleSchema,
  faqSchema = [],
  breadcrumbItems = [],
  children,
  previousArticle = null,
  nextArticle = null,
}) {
  const getCategoryColor = (cat) => {
    switch (cat) {
      case "AI SEO Education":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Industry Specific":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Location Specific":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Q&A":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-zinc-100 text-zinc-800 border-zinc-200";
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  const faqJsonLd =
    faqSchema.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqSchema.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {breadcrumbItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Premium Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-zinc-100 overflow-hidden">
        <div
          className="h-full bg-brand transition-all duration-300"
          id="reading-progress"
          style={{ width: "0%" }}
        />
      </div>

      <header className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 bg-zinc-50 border-b border-zinc-100">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/lab"
              className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-8 inline-block hover:text-brand transition-colors"
            >
              ← Back to Lab
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              {category && (
                <span
                  className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(
                    category,
                  )}`}
                >
                  {category}
                </span>
              )}
              {datePublished && (
                <span className="text-zinc-400 text-sm font-medium">
                  {datePublished}
                </span>
              )}
            </div>

            <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-8">
              {title}
            </h1>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white text-zinc-500 border border-zinc-200 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <article className="bg-white py-24 md:py-32 scroll-smooth">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Article column */}
            <div className="lg:w-2/3">
              <div
                className="
                article-content
                max-w-3xl
                [&>h2]:text-2xl
                [&>h2]:font-bold
                [&>h2]:text-zinc-900
                [&>h2]:tracking-tight
                [&>h2]:mt-14
                [&>h2]:mb-4
                [&>h2]:leading-snug
                [&>h2]:scroll-mt-40

                [&>h3]:text-lg
                [&>h3]:font-semibold
                [&>h3]:text-zinc-800
                [&>h3]:mt-8
                [&>h3]:mb-3
                [&>h3]:scroll-mt-40

                [&>p]:text-base
                [&>p]:leading-relaxed
                [&>p]:text-zinc-700
                [&>p]:mb-5

                [&>p:first-of-type]:text-xl
                [&>p:first-of-type]:font-medium
                [&>p:first-of-type]:text-zinc-900
                [&>p:first-of-type]:leading-relaxed
                [&>p:first-of-type]:mb-8

                [&>ul]:my-5
                [&>ul]:pl-6
                [&>ul>li]:mb-2
                [&>ul>li]:text-zinc-700
                [&>ul>li]:leading-relaxed

                [&>ol]:my-5
                [&>ol]:pl-6
                [&>ol>li]:mb-2
                [&>ol>li]:text-zinc-700
                [&>ol>li]:leading-relaxed

                [&>table]:w-full
                [&>table]:my-6
                [&>table]:text-sm
                [&>table]:border-collapse
                [&>table_th]:bg-zinc-100
                [&>table_th]:font-semibold
                [&>table_th]:text-zinc-900
                [&>table_th]:text-left
                [&>table_th]:p-3
                [&>table_th]:border
                [&>table_th]:border-zinc-200
                [&>table_td]:p-3
                [&>table_td]:border
                [&>table_td]:border-zinc-200
                [&>table_td]:text-zinc-700
                [&>table_td]:align-top

                [&>strong]:font-bold
                [&>strong]:text-zinc-900

                [&_strong]:font-bold
                [&_strong]:text-zinc-900
              "
              >
                {children}
              </div>

              {/* End of article footer content - Still inside lg:w-2/3 to keep sidebar sticky alongside */}
              <div className="mt-24 space-y-24 max-w-3xl">
                {/* Unified Author & CTA Card */}
                <UnifiedBlogCTA />

                {faqSchema.length > 0 && (
                  <div className="pt-16 border-t border-zinc-100">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                      Frequently Asked Questions
                    </h2>
                    <dl className="space-y-6">
                      {faqSchema.map((faq, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm"
                        >
                          <dt className="text-lg font-bold text-zinc-900 mb-3">
                            {faq.question}
                          </dt>
                          <dd className="text-zinc-600 leading-relaxed">
                            {faq.answer}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Sidebar column */}
            <aside className="hidden lg:block lg:w-1/3">
              <div className="space-y-8 h-full">
                <SidebarTOC />
                <SidebarAuthor />
                <div className="sticky top-28 z-40">
                  <SidebarCTA />
                </div>
              </div>
            </aside>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="mt-24 rounded-[3rem] bg-zinc-900 p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
              <div className="absolute -top-24 -right-24 h-48 w-48 bg-brand blur-[100px] opacity-20"></div>
              <div className="absolute -bottom-24 -left-24 h-48 w-48 bg-blue-500 blur-[100px] opacity-20"></div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10 tracking-tight">
                Ready to build your <br className="hidden md:block" /> AI
                visibility?
              </h2>
              <p className="text-zinc-400 mb-10 text-lg max-w-xl mx-auto relative z-10">
                Join the industrial brands already winning the race for AI
                citations and procurement search dominance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 relative z-10"
              >
                Discuss Your Strategy
              </Link>
            </div>

            <ArticleComments />
            <ArticleNavigation
              previousArticle={previousArticle}
              nextArticle={nextArticle}
            />
          </div>
        </div>
      </article>

      {/* Script for progress bar */}
      <Script id="progress-bar-script" strategy="afterInteractive">
        {`
          window.addEventListener('scroll', () => {
            const h = document.documentElement, 
                  b = document.body,
                  st = 'scrollTop',
                  sh = 'scrollHeight';
            const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
            const bar = document.getElementById('reading-progress');
            if (bar) bar.style.width = percent + '%';
          });
        `}
      </Script>
    </>
  );
}
