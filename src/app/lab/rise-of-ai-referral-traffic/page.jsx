import LabArticleLayout from "@/components/LabArticleLayout";
import Link from "next/link";

export const metadata = {
  title:
    "The Rise of AI Traffic: Which LLM Is Sending the Most Visitors? | Exagic AI",
  description:
    "ChatGPT, Gemini, Perplexity, Claude — AI referral traffic is growing exponentially. Here's what the latest data shows and what it means for your traffic strategy in 2026.",
  alternates: {
    canonical: "https://exagic.ai/lab/rise-of-ai-referral-traffic",
  },
};

export default function ArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Rise of AI Traffic: Which LLM Is Sending the Most Visitors to Your Website?",
    description: "ChatGPT, Gemini, Perplexity, Claude — AI referral traffic is growing exponentially. Here's what the latest data shows and what it means for your traffic strategy in 2026.",
    author: { "@type": "Organization", name: "Exagic AI" },
    datePublished: "2026-03-19",
    publisher: { "@type": "Organization", name: "Exagic AI" },
  };

  const faqSchema = [
    {
      question: "How can I start tracking AI referral traffic today?",
      answer: "In Google Analytics 4, create a segment filtering sessions by source containing 'chatgpt.com', 'perplexity.ai', 'gemini.google.com', and 'claude.ai'. Understanding the baseline is the first step.",
    },
    {
      question: "How do I run an AI citation audit?",
      answer: "Open ChatGPT, Gemini, Perplexity, and Claude. Search for your core product or service category with and without your brand name. Note who gets cited when you are not.",
    },
    {
      question: "Which LLM should I optimize for fastest traffic growth?",
      answer: "While ChatGPT has the largest share today, Claude has a 40x growth rate, and Gemini has 20x growth. Optimizing for all major platforms builds crucial referral channel diversity.",
    },
  ];

  const breadcrumbItems = [
    { name: "Home", item: "https://exagic.ai/" },
    { name: "Lab", item: "https://exagic.ai/lab" },
    {
      name: "Rise of AI Referral Traffic",
      item: "https://exagic.ai/lab/rise-of-ai-referral-traffic",
    },
  ];

  const barChartData = [
    { name: "ChatGPT", v2024: 0.07, v2025: 0.19, v2026: 0.5 },
    { name: "Gemini", v2024: 0.01, v2025: 0.04, v2026: 0.2 },
    { name: "Perplexity", v2024: 0.005, v2025: 0.02, v2026: 0.06 },
    { name: "Claude", v2024: 0.002, v2025: 0.008, v2026: 0.08 },
  ];

  return (
    <LabArticleLayout
      authorId="muqaddas"
      title="The Rise of AI Traffic: Which LLM Is Sending the Most Visitors to Your Website?"
      metaTitle="The Rise of AI Traffic: Which LLM Is Sending the Most Visitors? | Exagic AI"
      metaDescription="ChatGPT, Gemini, Perplexity, Claude — AI referral traffic is growing exponentially. Here's what the latest data shows and what it means for your traffic strategy in 2026."
      datePublished="March 19, 2026"
      category="AI SEO Education"
      tags={["AI Traffic", "LLM Citations", "Growth Strategy", "ChatGPT", "Claude"]}
      articleSchema={articleSchema}
      faqSchema={faqSchema}
      breadcrumbItems={breadcrumbItems}
      previousArticle={{
        title: "AI Adoption by Country",
        href: "/lab/ai-adoption-by-country",
      }}
      nextArticle={{
        title: "Anthropic Just Created a Dedicated Institute",
        href: "/lab/anthropic-institute-ai-society",
      }}
    >
      <p className="lead text-xl font-medium text-zinc-900 mb-10">
        For the past decade, the referral traffic conversation has been simple: Google sends traffic, everyone else is noise. That conversation is over.
      </p>

      <p>
        AI-generated referral traffic — visitors arriving at your site because an LLM cited you in an answer — is growing exponentially across every major platform. The numbers are still small relative to organic search. But the growth rate tells you exactly where this is heading, and the businesses paying attention right now are the ones who will benefit most.
      </p>

      <h2>The Data: AI Referral Traffic by Platform, 2024–2026</h2>
      <p>Here is what the numbers show across each platform:</p>

      {/* Grouped Bar Chart */}
      <div className="my-10 border border-zinc-200 rounded-2xl p-6 md:p-8 bg-white not-prose shadow-sm">
        <h3 className="text-lg font-bold text-zinc-900 mb-2">AI Referral Traffic Share by Platform</h3>
        <p className="text-sm text-zinc-500 mb-6">Percentage of total referral traffic from each LLM, 2024–2026.</p>
        
        <div className="relative w-full" style={{ paddingBottom: '55%' }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 280" preserveAspectRatio="xMidYMid meet">
            {/* Background */}
            <rect x="80" y="10" width="400" height="240" fill="#fafafa" rx="4" />
            
            {/* Grid lines */}
            <line x1="80" y1="250" x2="480" y2="250" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="80" y1="10" x2="80" y2="250" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="80" y1="130" x2="480" y2="130" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="280" y1="10" x2="280" y2="250" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="480" y1="10" x2="480" y2="250" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4,4" />
            
            {/* X Axis Labels */}
            <text x="80" y="268" fill="#71717a" fontSize="9" textAnchor="middle">0%</text>
            <text x="280" y="268" fill="#71717a" fontSize="9" textAnchor="middle">0.25%</text>
            <text x="480" y="268" fill="#71717a" fontSize="9" textAnchor="middle">0.50%</text>
            
            {/* ChatGPT Group — Y: 20-75 */}
            <text x="70" y="50" fill="#18181b" fontSize="11" fontWeight="bold" textAnchor="end">ChatGPT</text>
            <rect x="80" y="25" width={Math.max(0.07 / 0.5 * 400, 6)} height="12" fill="#d4d4d8" rx="2" />
            <text x={80 + Math.max(0.07 / 0.5 * 400, 6) + 6} y="35" fill="#71717a" fontSize="9">0.07%</text>
            <rect x="80" y="40" width={Math.max(0.19 / 0.5 * 400, 6)} height="12" fill="#93c5fd" rx="2" />
            <text x={80 + Math.max(0.19 / 0.5 * 400, 6) + 6} y="50" fill="#71717a" fontSize="9">0.19%</text>
            <rect x="80" y="55" width={Math.max(0.5 / 0.5 * 400, 6)} height="12" fill="#0f766e" rx="2" />
            <text x={80 + Math.max(0.5 / 0.5 * 400, 6) - 30} y="65" fill="white" fontSize="9" fontWeight="bold">0.50%</text>
            
            {/* Gemini Group — Y: 85-135 */}
            <text x="70" y="115" fill="#18181b" fontSize="11" fontWeight="bold" textAnchor="end">Gemini</text>
            <rect x="80" y="90" width={Math.max(0.01 / 0.5 * 400, 6)} height="12" fill="#d4d4d8" rx="2" />
            <text x={80 + Math.max(0.01 / 0.5 * 400, 6) + 6} y="100" fill="#71717a" fontSize="9">0.01%</text>
            <rect x="80" y="105" width={Math.max(0.04 / 0.5 * 400, 6)} height="12" fill="#93c5fd" rx="2" />
            <text x={80 + Math.max(0.04 / 0.5 * 400, 6) + 6} y="115" fill="#71717a" fontSize="9">0.04%</text>
            <rect x="80" y="120" width={Math.max(0.2 / 0.5 * 400, 6)} height="12" fill="#0f766e" rx="2" />
            <text x={80 + Math.max(0.2 / 0.5 * 400, 6) + 6} y="130" fill="#18181b" fontSize="9" fontWeight="bold">0.20%</text>
            
            {/* Perplexity Group — Y: 150-200 */}
            <text x="70" y="180" fill="#18181b" fontSize="11" fontWeight="bold" textAnchor="end">Perplexity</text>
            <rect x="80" y="155" width={Math.max(0.005 / 0.5 * 400, 6)} height="12" fill="#d4d4d8" rx="2" />
            <text x={80 + Math.max(0.005 / 0.5 * 400, 6) + 6} y="165" fill="#71717a" fontSize="9">0.005%</text>
            <rect x="80" y="170" width={Math.max(0.02 / 0.5 * 400, 6)} height="12" fill="#93c5fd" rx="2" />
            <text x={80 + Math.max(0.02 / 0.5 * 400, 6) + 6} y="180" fill="#71717a" fontSize="9">0.02%</text>
            <rect x="80" y="185" width={Math.max(0.06 / 0.5 * 400, 6)} height="12" fill="#0f766e" rx="2" />
            <text x={80 + Math.max(0.06 / 0.5 * 400, 6) + 6} y="195" fill="#18181b" fontSize="9" fontWeight="bold">0.06%</text>
            
            {/* Claude Group — Y: 215-245 */}
            <text x="70" y="240" fill="#18181b" fontSize="11" fontWeight="bold" textAnchor="end">Claude</text>
            <rect x="80" y="215" width={Math.max(0.002 / 0.5 * 400, 6)} height="12" fill="#d4d4d8" rx="2" />
            <text x={80 + Math.max(0.002 / 0.5 * 400, 6) + 6} y="225" fill="#71717a" fontSize="9">0.002%</text>
            <rect x="80" y="230" width={Math.max(0.008 / 0.5 * 400, 6)} height="12" fill="#93c5fd" rx="2" />
            <text x={80 + Math.max(0.008 / 0.5 * 400, 6) + 6} y="240" fill="#71717a" fontSize="9">0.008%</text>
            <rect x="80" y="245" width={Math.max(0.08 / 0.5 * 400, 6)} height="12" fill="#0f766e" rx="2" />
            <text x={80 + Math.max(0.08 / 0.5 * 400, 6) + 6} y="255" fill="#18181b" fontSize="9" fontWeight="bold">0.08%</text>
          </svg>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium text-zinc-600">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-zinc-300"></div> 2024</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-blue-200"></div> 2025</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-[#0f766e]"></div> 2026</div>
        </div>
      </div>

      <ul>
        <li><strong>ChatGPT</strong> has grown from 0.07% of total referral traffic in 2024 to 0.5% in 2026 — a 7x increase in two years. It remains the dominant LLM for referral traffic by a significant margin.</li>
        <li><strong>Gemini</strong> has jumped from 0.01% to 0.2% — a 20x increase. Google's deep integration of Gemini into Search, Gmail, and Workspace is clearly beginning to translate into meaningful referral volume.</li>
        <li><strong>Perplexity</strong> has grown from 0.005% to 0.06% — 12x growth. For a platform that most marketing teams are still not tracking, this is a number worth paying attention to.</li>
        <li><strong>Claude</strong> has gone from 0.002% to 0.08% — a 40x increase, the fastest growth rate of any LLM in the dataset. Claude's expansion across enterprise tools, the Claude.ai consumer interface, and API integrations has driven it from a near-zero referral source to one that is outpacing Perplexity on growth trajectory.</li>
      </ul>

      <h2>Why This Growth Curve Matters More Than the Raw Numbers</h2>
      <p>0.5% sounds small. But context changes everything.</p>

      {/* Line Chart */}
      <div className="my-10 border border-zinc-200 rounded-2xl p-6 md:p-8 bg-white not-prose shadow-sm">
        <h3 className="text-sm uppercase tracking-wider font-bold text-zinc-500 mb-4">ChatGPT Referral Traffic Growth Curve</h3>
        
        <div className="relative w-full" style={{ paddingBottom: '45%' }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 220" preserveAspectRatio="xMidYMid meet">
            {/* Background */}
            <rect x="50" y="10" width="430" height="170" fill="#f9fafb" rx="4" />
            
            {/* Grid lines */}
            <line x1="50" y1="52" x2="480" y2="52" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="50" y1="95" x2="480" y2="95" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="50" y1="137" x2="480" y2="137" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4,4" />
            
            {/* Axes */}
            <line x1="50" y1="180" x2="480" y2="180" stroke="#d4d4d8" strokeWidth="2" />
            <line x1="50" y1="10" x2="50" y2="180" stroke="#d4d4d8" strokeWidth="2" />
            
            {/* Y Axis Labels */}
            <text x="42" y="183" fill="#71717a" fontSize="9" textAnchor="end">0%</text>
            <text x="42" y="140" fill="#71717a" fontSize="9" textAnchor="end">0.2%</text>
            <text x="42" y="98" fill="#71717a" fontSize="9" textAnchor="end">0.5%</text>
            <text x="42" y="55" fill="#71717a" fontSize="9" textAnchor="end">0.8%</text>
            <text x="42" y="14" fill="#71717a" fontSize="9" textAnchor="end">1.0%+</text>

            {/* Gradient fill under curve */}
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f766e" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path 
              d="M 93,172 C 150,165 190,155 236,148 C 280,140 330,100 380,60 L 380,180 L 93,180 Z" 
              fill="url(#curveGrad)" 
            />
            
            {/* The curve */}
            <path 
              d="M 93,172 C 150,165 190,155 236,148 C 280,140 330,100 380,60" 
              fill="none" 
              stroke="#0f766e" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            
            {/* Projected dashed extension */}
            <path 
              d="M 380,60 C 410,35 440,15 465,10" 
              fill="none" 
              stroke="#0f766e" 
              strokeWidth="3" 
              strokeDasharray="6,4" 
              strokeLinecap="round"
              opacity="0.5"
            />
            
            {/* Data dots */}
            <circle cx="93" cy="172" r="5" fill="#0f766e" />
            <circle cx="236" cy="148" r="5" fill="#0f766e" />
            <circle cx="380" cy="60" r="6" fill="#0f766e" stroke="white" strokeWidth="2" />
            <circle cx="465" cy="10" r="6" fill="white" stroke="#0f766e" strokeWidth="2" strokeDasharray="3,2" />

            {/* Data labels */}
            <text x="93" y="167" fill="#0f766e" fontSize="9" fontWeight="bold" textAnchor="middle" dy="-10">0.07%</text>
            <text x="236" y="143" fill="#0f766e" fontSize="9" fontWeight="bold" textAnchor="middle" dy="-10">0.19%</text>
            <text x="380" y="50" fill="#0f766e" fontSize="10" fontWeight="bold" textAnchor="middle" dy="-10">0.50%</text>
            <text x="465" y="10" fill="#0f766e" fontSize="9" fontWeight="bold" textAnchor="middle" dy="-14" opacity="0.6">Projected</text>
            
            {/* X Axis Labels */}
            <text x="93" y="198" fill="#52525b" fontSize="10" fontWeight="bold" textAnchor="middle">2024</text>
            <text x="236" y="198" fill="#52525b" fontSize="10" fontWeight="bold" textAnchor="middle">2025</text>
            <text x="380" y="198" fill="#52525b" fontSize="10" fontWeight="bold" textAnchor="middle">2026</text>
            <text x="465" y="198" fill="#ea580c" fontSize="10" fontWeight="bold" textAnchor="middle">2027</text>
          </svg>
        </div>
      </div>

      <p>
        Google's current share of referral traffic was not always dominant either. Search engine referral traffic looked negligible in its early years before compounding into the primary traffic source for most websites on the internet. The businesses that optimized for Google early built structural advantages that took competitors years to close.
      </p>
      <p>
        AI referral traffic is at that same inflection point right now. The platforms driving it — ChatGPT, Gemini, Perplexity, Claude — are all growing simultaneously, meaning the total pool of AI-generated referrals is expanding faster than any single platform's numbers suggest.
      </p>
      <p>
        Add them together: 0.5% + 0.2% + 0.06% + 0.08% = nearly 0.84% of total referral traffic in 2026 coming from LLMs. That is not noise. That is a channel.
      </p>

      <h2>The Claude Story Is the Most Interesting One</h2>
      <p>
        Most marketers are optimizing for ChatGPT. That makes sense — it has the largest share. But Claude's rapid climb is the signal that should be recalibrating how you think about this space.
      </p>

      {/* Stat Card / Pull Quote */}
      <div className="my-12 p-8 rounded-3xl bg-gradient-to-br from-[#0f766e] to-[#042f2e] text-white shadow-2xl relative overflow-hidden not-prose">
        <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-[12rem] leading-none">"</div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="flex-shrink-0 text-7xl md:text-8xl font-black tracking-tighter text-teal-300">
            40x
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-2">Claude's growth rate from 2024 to 2026</h4>
            <p className="text-teal-50 text-base md:text-lg opacity-90 leading-relaxed">
              A platform growing this fast does not stay small. Optimizing for Claude today builds visibility in a referral channel your competitors are completely ignoring.
            </p>
          </div>
        </div>
      </div>

      <p>
        If Claude continues even half that growth rate into 2027, it becomes a referral source that rivals Perplexity and approaches Gemini. The businesses showing up in Claude's answers today — through structured content, <Link href="/ai-seo" className="text-brand underline font-medium">schema markup</Link>, and clear brand signals — are building visibility in a channel directly feeding powerful enterprise ecosystems.
      </p>

      <h2>What Drives AI Referral Traffic in the First Place</h2>
      <p>
        Unlike Google, where links and domain authority are the primary ranking signals, LLMs decide what to cite based on different criteria entirely.
      </p>

      <ul className="space-y-4">
        <li><strong>Clarity of expertise.</strong> AI models consistently cite sources that are clearly, specifically expert on a topic — not generalist content that touches on many things without going deep on any of them.</li>
        <li><strong>Structured, parseable content.</strong> FAQs, numbered lists, definition-led sections, and <Link href="/lab/how-to-structure-technical-data-for-ai-sourcing" className="text-brand underline font-medium">schema markup</Link> all make it easier for AI models to extract and attribute information. Unstructured walls of text get processed but rarely cited.</li>
        <li><strong>Brand consistency across the web.</strong> LLMs build a model of your brand from everything they have been trained on — your website, mentions in press, social content, third-party reviews, forum discussions. A consistent, coherent signal across all of those sources increases citation likelihood significantly.</li>
        <li><strong>Recency signals.</strong> Platforms like Perplexity with live web access actively prioritize fresh content. Publishing consistently matters not just for SEO but for AI referral visibility.</li>
      </ul>

      <h2>The Platform-by-Platform Strategy</h2>
      <p>Not all LLMs cite the same way, and your strategy should reflect that.</p>

      <div className="space-y-4 my-8">
        <p><strong>ChatGPT</strong> draws primarily from its training data and, for GPT-4o with browsing enabled, from live web results. Optimizing for ChatGPT means strong foundational content, consistent brand presence across authoritative third-party sources, and clear topical authority on your core subject matter.</p>
        <p><strong>Gemini</strong> is increasingly integrated with Google Search results. Businesses that appear in Google's top organic results have a structural advantage in Gemini citations. Traditional SEO and AI visibility are most tightly coupled here.</p>
        <p><strong>Perplexity</strong> runs live web searches for almost every query and cites sources directly. It behaves most like a search engine of the four. Fresh, well-structured content with clear headings, FAQs, and factual specificity performs best.</p>
        <p><strong>Claude</strong> draws heavily from training data but also from web content in certain configurations. Claude tends to favor sources that demonstrate genuine depth — detailed guides, original research, and data-backed analysis over surface-level overviews.</p>
      </div>

      {/* 2x2 Matrix */}
      <div className="my-12 p-6 md:p-8 border border-zinc-200 rounded-3xl bg-white shadow-sm not-prose">
        <h3 className="text-lg font-bold text-zinc-900 mb-8 text-center">LLM Citation Mechanics Matrix</h3>
        
        <div className="relative w-full max-w-2xl mx-auto" style={{ paddingBottom: '80%' }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 340" preserveAspectRatio="xMidYMid meet">
            {/* Quadrant backgrounds */}
            <rect x="60" y="10" width="165" height="140" fill="#f9fafb" rx="4" />
            <rect x="225" y="10" width="165" height="140" fill="#f0f9ff" rx="4" />
            <rect x="60" y="150" width="165" height="140" fill="#fefce8" rx="4" />
            <rect x="225" y="150" width="165" height="140" fill="#f9fafb" rx="4" />
            
            {/* Grid lines */}
            <line x1="60" y1="150" x2="390" y2="150" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="225" y1="10" x2="225" y2="290" stroke="#d4d4d8" strokeWidth="1.5" />
            
            {/* Outer border */}
            <rect x="60" y="10" width="330" height="280" fill="none" stroke="#d4d4d8" strokeWidth="2" rx="4" />
            
            {/* Quadrant labels */}
            <text x="142" y="28" fill="#a1a1aa" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="0.5">TRAINING + EXPLICIT</text>
            <text x="307" y="28" fill="#a1a1aa" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="0.5">LIVE WEB + EXPLICIT</text>
            <text x="142" y="283" fill="#a1a1aa" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="0.5">TRAINING + SYNTHESIZED</text>
            <text x="307" y="283" fill="#a1a1aa" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="0.5">LIVE WEB + SYNTHESIZED</text>
            
            {/* X Axis Label */}
            <text x="225" y="310" fill="#52525b" fontSize="10" fontWeight="bold" textAnchor="middle">Training Data ←────→ Live Web</text>
            
            {/* Y Axis Label */}
            <text x="20" y="150" fill="#52525b" fontSize="10" fontWeight="bold" textAnchor="middle" transform="rotate(-90, 20, 150)">Synthesized ←────→ Cites Explicitly</text>
            
            {/* Perplexity — Top Right (Live Web + Explicit) */}
            <circle cx="330" cy="55" r="18" fill="#0891b2" opacity="0.15" />
            <circle cx="330" cy="55" r="10" fill="#0891b2" />
            <text x="330" y="58" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">P</text>
            <text x="330" y="80" fill="#0e7490" fontSize="10" fontWeight="bold" textAnchor="middle">Perplexity</text>
            
            {/* Gemini — Mid-Right (Live Web, Mixed Explicit) */}
            <circle cx="290" cy="120" r="18" fill="#3b82f6" opacity="0.15" />
            <circle cx="290" cy="120" r="10" fill="#3b82f6" />
            <text x="290" y="123" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">G</text>
            <text x="290" y="102" fill="#2563eb" fontSize="10" fontWeight="bold" textAnchor="middle">Gemini</text>
            
            {/* ChatGPT — Center-Left (Training Heavy, semi-explicit) */}
            <circle cx="165" cy="110" r="18" fill="#16a34a" opacity="0.15" />
            <circle cx="165" cy="110" r="10" fill="#16a34a" />
            <text x="165" y="113" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">C</text>
            <text x="165" y="93" fill="#15803d" fontSize="10" fontWeight="bold" textAnchor="middle">ChatGPT</text>
            
            {/* Claude — Bottom-Left (Training Heavy, Synthesis) */}
            <circle cx="130" cy="210" r="18" fill="#ea580c" opacity="0.15" />
            <circle cx="130" cy="210" r="10" fill="#ea580c" />
            <text x="130" y="213" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">C</text>
            <text x="130" y="235" fill="#c2410c" fontSize="10" fontWeight="bold" textAnchor="middle">Claude</text>
          </svg>
        </div>
      </div>

      <h2>Three Things to Do With This Data</h2>
      
      <div className="grid grid-cols-1 gap-6 my-8 not-prose">
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">1</div>
          <div>
            <h4 className="font-bold text-zinc-900 text-lg mb-2">Start tracking AI referral traffic today.</h4>
            <p className="text-zinc-600">
              In Google Analytics 4, create a segment filtering sessions by source containing "chatgpt.com", "perplexity.ai", "gemini.google.com", and "claude.ai". Most businesses have been receiving this traffic for months without knowing it. Understanding the baseline is the first step.
            </p>
          </div>
        </div>
        
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">2</div>
          <div>
            <h4 className="font-bold text-zinc-900 text-lg mb-2">Run the citation audit.</h4>
            <p className="text-zinc-600">
              Open each of the four platforms. Search for your core product or service category with and without your brand name. Note who gets cited when you are not. That is your <Link href="/audit" className="text-brand font-medium hover:underline">content gap map</Link>.
            </p>
          </div>
        </div>
        
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">3</div>
          <div>
            <h4 className="font-bold text-zinc-900 text-lg mb-2">Prioritize the fastest-growing platforms, not just the biggest.</h4>
            <p className="text-zinc-600">
              Optimizing only for ChatGPT because it has the largest share today is the same mistake as optimizing only for Yahoo in 2003. Claude's 40x growth and Gemini's 20x growth are the signals that should shape where you invest attention over the next 12 months.
            </p>
          </div>
        </div>
      </div>

      <h2>The Bottom Line</h2>
      <p>
        AI referral traffic is not a future trend. It is a present reality that is compounding every quarter. ChatGPT leads in volume. Claude leads in growth rate. Gemini has structural advantages through Google integration. Perplexity punches above its size for live-query citations.
      </p>
      <p>
        The businesses that are visible across all four platforms — not just the biggest one — are building referral channel diversity that will be very difficult for late movers to replicate.
      </p>
      <p className="font-medium text-xl text-zinc-900 mt-8 pb-8 border-b border-zinc-200">
        The traffic is already flowing. The question is whether it is flowing to you.
      </p>

      {/* CTA Section */}
      <div className="my-12 p-8 rounded-3xl bg-zinc-900 text-center text-white not-prose shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <h3 className="text-2xl font-bold mb-4 relative z-10">Want to know if you're appearing in AI-generated answers?</h3>
        <p className="text-zinc-400 mb-8 max-w-lg mx-auto relative z-10">Discover your baseline visibility across ChatGPT, Gemini, Perplexity, and Claude in minutes.</p>
        <Link 
          href="/audit" 
          className="inline-flex items-center justify-center rounded-full bg-brand hover:bg-[#0d645e] px-8 py-4 text-sm font-bold shadow-lg transition-colors relative z-10"
        >
          Run a free citation audit &rarr;
        </Link>
      </div>

      <div className="mt-8 text-sm text-zinc-500 bg-zinc-50 p-6 rounded-xl">
        <strong>Sources:</strong> NP Digital, March 2026. Data from TechCrunch, Alphamatic, Search Engine Land, Conductor, Ubersuggest, Answer the Public, Similar Web, Adobe Analytics, Digiday, Growth Unhinged, Wallaroo Media, Rank Science, and Microsoft Clarity.
      </div>
    </LabArticleLayout>
  );
}
