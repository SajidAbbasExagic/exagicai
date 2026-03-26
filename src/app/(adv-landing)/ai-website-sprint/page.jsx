import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

export const metadata = {
  title: "AI-Visible Website in 48 Hours | Get Recommended by ChatGPT & Gemini",
  description: "We'll build your AI-visible website in 48 hours. Zero upfront, pay $999 only if you love it. Be the professional AI search recommends.",
};

export default function AIWebsiteSprintPage() {
  return (
    <div className="bg-[#0a1628] text-white min-h-screen selection:bg-orange-500/30">
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative pt-24 pb-20 px-6 md:pt-32 md:pb-32 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-blue-400">Next Slot: Monday, March 30</span>
          </div>

          <h1 className={`${playfair.className} text-4xl md:text-7xl font-extrabold leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100`}>
            We&apos;ll Build Your <span className="text-[#d4a853]">AI-Visible</span> Website in 48 Hours.
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            When someone asks ChatGPT, Gemini, or Google AI who the best professional in your field is — <span className="text-white font-semibold">your name should come up.</span> We make that happen. Zero risk. Zero upfront.
          </p>

          <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link 
              href="#form" 
              className="bg-[#d4a853] hover:bg-[#e8c97a] text-[#0a1628] font-bold px-10 py-5 rounded-xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-orange-500/20"
            >
              Claim Your Spot →
            </Link>
            <p className="text-sm text-zinc-500 font-medium tracking-tight">
              Pay <span className="text-white">$999</span> Only If You Love It.
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-zinc-800/50">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-8">Trusted by 2,500+ professionals across 40+ countries</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <LogoItem icon="G" name="ChatGPT" color="bg-emerald-600" />
              <LogoItem icon="G" name="Gemini" color="bg-blue-500" />
              <LogoItem icon="P" name="Perplexity" color="bg-teal-500" />
              <LogoItem icon="C" name="Copilot" color="bg-indigo-500" />
              <LogoItem icon="G" name="Google AI" color="bg-red-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── THE PROBLEM ─────────────────── */}
      <section className="py-20 px-6 bg-[#0f2137]/30 border-y border-zinc-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 block">The Critical Gap</span>
            <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold`}>
              90% of Professional Websites Are <span className="text-red-400">Invisible</span> to AI.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProblemCard 
              icon="🔍"
              title="AI Can't Read Your Site"
              desc="Your website looks great to humans. But AI engines need schema markup, entity data, and structured content to understand and recommend you. Most sites don't have it."
            />
            <ProblemCard 
              icon="📉"
              title="Google Isn't Enough Anymore"
              desc="AI search traffic grew 527% year-over-year. Only 10% of AI citations match Google's top results. Ranking on Google doesn't mean AI recommends you."
            />
            <ProblemCard 
              icon="😶"
              title="Your Competitors Show Up. You Don't."
              desc="When someone asks AI for the best professional in your field, it gives specific names. If yours isn't one of them — someone with less experience is getting your clients."
            />
          </div>
        </div>
      </section>

      {/* ─────────────────── ZERO RISK OFFER ─────────────────── */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative border-2 border-[#d4a853]/30 bg-gradient-to-br from-[#d4a853]/10 to-transparent p-8 md:p-16 rounded-[40px] text-center backdrop-blur-sm">
            <div className="bg-[#d4a853] text-[#0a1628] items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-10 inline-block">Zero Risk Offer</div>
            
            <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-6`}>We Deliver First. You Decide After.</h2>
            
            <div className={`${playfair.className} text-7xl md:text-9xl font-black text-[#d4a853] mb-4`}>$999</div>
            <p className="text-xl md:text-2xl text-[#d4a853] font-medium mb-10">Only if you love it. If you don&apos;t — pay nothing.</p>
            
            <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl mx-auto mb-12">
              We build your complete AI-visible website — custom design, domain, hosting, email, booking forms, and full AI optimization — and deliver it in 48 hours. <span className="text-white font-semibold">You see the finished product on your own domain before you spend a single dollar.</span>
            </p>

            <Link 
              href="#form" 
              className="inline-block bg-white text-[#0a1628] hover:bg-zinc-100 font-bold px-10 py-5 rounded-xl text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl mb-6"
            >
              Get My Website Built Free First →
            </Link>
            
            <div className="flex items-center justify-center gap-4 text-emerald-400">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm font-semibold tracking-wide">No credit card required. No contracts. No catch.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── WHAT'S INCLUDED ─────────────────── */}
      <section className="py-20 px-6 border-t border-zinc-800/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-4`}>Everything You Need — Plus Everything AI Needs.</h2>
            <p className="text-zinc-500 text-lg">One package. One price. Only if you love it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureBox title="Custom Professional Design" desc="Handcrafted by designers, tailored to your profession and personal brand." />
            <FeatureBox title="AI-Optimized Structure" desc="Schema markup, entity optimization, and structured data so AI engines recommend you." />
            <FeatureBox title="Domain & Hosting Setup" desc="Your own domain name, professional hosting, and SSL security — fully configured." />
            <FeatureBox title="Business Email" desc="Professional email (contact@yourname.com) set up and ready to use." />
            <FeatureBox title="Booking & Contact Forms" desc="Integrated appointment booking or inquiry forms sent directly to your inbox." />
            <FeatureBox title="Mobile-Optimized & Fast" desc="Responsive design that loads fast on every device and passes Core Web Vitals." />
            <FeatureBox title="AI Crawler Access" desc="GPTBot, ClaudeBot, PerplexityBot — all AI crawlers can access and index your site." />
            <FeatureBox title="Global Leaders Spotlight" desc="Featured on GlobalLeaders.io — an additional AI authority signal boosting your visibility." />
          </div>
        </div>
      </section>

      {/* ─────────────────── HOW IT WORKS ─────────────────── */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold`}>From Invisible to AI-Recommended in 3 Steps.</h2>
          </div>

          <div className="space-y-12 relative">
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/50 via-orange-500/50 to-emerald-500/50 hidden md:block"></div>
            
            <StepItem 
              num="1" 
              title="Fill Out the Form Below" 
              desc="Tell us your name, profession, and what you do. Share any design preferences or inspiration. Takes 2 minutes." 
              color="bg-blue-500"
            />
            <StepItem 
              num="2" 
              title="We Build Your AI-Visible Website in 48 Hours" 
              desc="Our team designs your website, writes your content, sets up your domain — and optimizes the entire structure for AI engines. You do nothing." 
              color="bg-orange-500"
            />
            <StepItem 
              num="3" 
              title="Review It. Love It. Then Pay." 
              desc="We send you the live link. If you love it — pay $999. If you don't — you owe absolutely nothing. The website is deleted and you walk away free." 
              color="bg-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────── SOCIAL PROOF ─────────────────── */}
      <section className="py-20 px-6 border-y border-zinc-800/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-8`}>Trusted by Professionals Who Lead.</h2>
              <div className="grid grid-cols-2 gap-8">
                <StatItem val="2,500+" label="Professionals trust Global Leaders" />
                <StatItem val="40+" label="Countries represented" />
                <StatItem val="48hr" label="Average delivery time" />
                <StatItem val="32K+" label="Monthly network visitors" />
              </div>
            </div>
            <div className="lg:col-span-7 grid gap-6">
              <TestimonialCard 
                author="Dr. Ayesha Khan" 
                role="Psychologist & Author" 
                quote="My website was built within two days. It's elegant, professional, and perfectly aligned with my vision. The process was easy, fast, and inspiring."
              />
              <TestimonialCard 
                author="David Liu" 
                role="FinTech Founder" 
                quote="Exactly what I needed to showcase my work to investors. The team delivered fast, understood my goals, and made everything feel effortless."
              />
              <TestimonialCard 
                author="James Carter" 
                role="Real Estate Consultant" 
                quote="From concept to launch, the experience was seamless and personal. I finally have a website that feels authentic, polished, and impactful."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── FAQ ─────────────────── */}
      <section className="py-24 px-6 md:px-0 max-w-3xl mx-auto">
        <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold text-center mb-16`}>Got Questions? Good.</h2>
        <div className="space-y-6">
          <FAQItem q="What does 'pay only if you love it' actually mean?" a="Exactly what it says. We build your live, fully functional website first. After 48 hours, we send you the link. You review it, test the booking forms, and check the mobile design. If you're 100% happy, you pay the $999. If not, we take the site down and you move on with your day. Zero friction." />
          <FAQItem q="What is AI visibility and why does it matter?" a="Traditional SEO focuses on keywords for Google Search. AI Visibility focuses on 'Entity-Based SRO' — structuring your data so LLMs (ChatGPT, Claude, etc.) understand your expertise. If AI can't verify you as an authority, it won't recommend you to users asking for professional help." />
          <FAQItem q="How is this different from a normal website?" a="Most websites are built for humans to browse. Our websites are built for both humans AND AI crawlers. We integrate advanced JSON-LD schema, define your entity relationships in the code, and ensure every page is machine-readable while maintaining high-end aesthetics." />
          <FAQItem q="How long does it take?" a="We guarantee a live preview link on your chosen domain within 48 hours of your profile review call. It's a high-velocity sprint." />
          <FAQItem q="Do I need any technical knowledge?" a="None. We handle the domain registration, DNS configuration, hosting server setup, and ongoing technical maintenance. You just focus on your business." />
          <FAQItem q="What if I already have a website?" a="We can either rebuild your existing site to be AI-ready or set up your new profile alongside it to handle AI-specific traffic and leads." />
        </div>
      </section>

      {/* ─────────────────── LEAD FORM ─────────────────── */}
      <section id="form" className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${playfair.className} text-4xl md:text-6xl font-bold mb-6`}>Claim Your Spot</h2>
            <p className="text-xl text-zinc-400">Ready to Become the Person AI Recommends?</p>
          </div>
          
          <div className="bg-[#0f2137] p-8 md:p-12 rounded-[32px] border border-white/5 relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                </svg>
            </div>

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="First Name" placeholder="John" />
                <InputGroup label="Last Name" placeholder="Smith" />
              </div>
              <InputGroup label="Professional Email" placeholder="john@example.com" type="email" />
              <InputGroup label="Phone (Optional)" placeholder="+1 (555) 000-0000" />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#d4a853]">Your Profession</label>
                <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#d4a853] transition-colors appearance-none cursor-pointer">
                  <option className="bg-[#0a1628]">Select your field</option>
                  <option className="bg-[#0a1628]">Psychologist</option>
                  <option className="bg-[#0a1628]">Real Estate Agent</option>
                  <option className="bg-[#0a1628]">Consultant</option>
                  <option className="bg-[#0a1628]">Attorney</option>
                  <option className="bg-[#0a1628]">Architect</option>
                  <option className="bg-[#0a1628]">Other</option>
                </select>
              </div>
              <InputGroup label="Your Current Website (if any)" placeholder="https://yourwebsite.com or 'None'" />
              
              <div className="pt-6">
                <button type="submit" className="w-full bg-[#d4a853] hover:bg-[#e8c97a] text-[#0a1628] font-black text-xl py-4 md:py-6 rounded-2xl shadow-xl shadow-orange-500/10 transition-all active:scale-95">
                  Build My AI-Visible Website — $0 Upfront →
                </button>
                <p className="text-center text-sm text-zinc-500 mt-6 font-medium leading-relaxed">
                  No credit card required. No contracts. We build first — you pay $999 only if you love the result.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─────────────────── FOOTER ─────────────────── */}
      <footer className="py-20 px-6 bg-[#0a1628] border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-10`}>Your Expertise Deserves to Be the Answer.</h2>
          <Link href="#form" className="text-[#d4a853] text-xl font-bold hover:underline mb-16 inline-block">Claim Your Spot →</Link>
          <p className="text-zinc-600 text-sm font-medium tracking-tight">© 2026 Global Leaders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function LogoItem({ icon, name, color }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center font-black text-white text-sm`}>{icon}</span>
      <span className="text-sm font-bold text-zinc-300">{name}</span>
    </div>
  );
}

function ProblemCard({ icon, title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 hover:bg-white/[0.07] transition-all group">
      <div className="text-4xl mb-6 scale-100 group-hover:scale-110 transition-transform origin-left">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureBox({ title, desc }) {
  return (
    <div className="p-6 border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.04] transition-all">
      <div className="text-emerald-500 font-bold mb-4">✓</div>
      <h4 className="font-bold text-sm mb-2">{title}</h4>
      <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}

function StepItem({ num, title, desc, color }) {
  return (
    <div className="flex gap-8 relative items-start">
      <div className={`flex-shrink-0 w-14 h-14 rounded-full ${color} flex items-center justify-center text-white text-2xl font-black shadow-lg relative z-10`}>{num}</div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm md:text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StatItem({ val, label }) {
  return (
    <div>
      <div className="text-4xl font-extrabold text-[#d4a853] mb-1">{val}</div>
      <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{label}</div>
    </div>
  );
}

function TestimonialCard({ author, role, quote }) {
  return (
    <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.02] relative group hover:bg-white/[0.04] transition-all">
      <div className="text-[#d4a853] text-2xl mb-4">★★★★★</div>
      <p className="text-zinc-400 italic mb-6 leading-relaxed">&quot;{quote}&quot;</p>
      <div>
        <div className="font-bold text-white tracking-tight">{author}</div>
        <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">{role}</div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="border-b border-white/10 pb-6 group cursor-pointer">
      <div className="flex justify-between items-center gap-6">
        <h3 className="text-lg font-bold group-hover:text-white transition-colors text-zinc-300">{q}</h3>
        <span className="text-[#d4a853] text-2xl group-hover:rotate-45 transition-transform">+</span>
      </div>
      <div className="hidden group-hover:block mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
        <p className="text-zinc-500 text-base leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold uppercase tracking-widest text-[#d4a853]">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#d4a853] transition-colors"
      />
    </div>
  );
}
