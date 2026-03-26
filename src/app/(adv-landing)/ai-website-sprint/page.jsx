"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

// Animation presets
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function AIWebsiteSprintPage() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen selection:bg-brand/10 overflow-x-hidden">
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative pt-24 pb-16 px-6 md:pt-40 md:pb-32 overflow-hidden border-b border-zinc-50">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand">Next Slot: Monday, March 30</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`${playfair.className} text-4xl md:text-7xl font-extrabold leading-[1.1] mb-6 md:mb-8 text-zinc-900`}
          >
            We&apos;ll Build Your <span className="text-brand">AI-Visible</span> Website in 48 Hours.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed px-4 md:px-0"
          >
            When someone asks ChatGPT, Gemini, or Google AI who the best professional in your field is — <span className="text-zinc-900 font-semibold underline decoration-brand/30 decoration-2 underline-offset-4">your name should come up.</span> We make that happen.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <Link 
              href="#form" 
              className="w-full md:w-auto bg-brand hover:bg-brand-dark text-white font-bold px-12 py-5 rounded-xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-brand/20 flex items-center justify-center group"
            >
              Claim Your Spot 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <p className="text-sm text-zinc-400 font-medium">
              Zero upfront. Pay <span className="text-zinc-900 font-bold">$999</span> Only If You Love It.
            </p>
          </motion.div>

          {/* Social Icons Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 pt-10 border-t border-zinc-100 px-2"
          >
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-bold mb-8">Trusted by 2,500+ professionals worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 grayscale opacity-80">
              <LogoItem icon="G" name="ChatGPT" color="bg-emerald-600" />
              <LogoItem icon="G" name="Gemini" color="bg-blue-500" />
              <LogoItem icon="P" name="Perplexity" color="bg-teal-500" />
              <LogoItem icon="C" name="Copilot" color="bg-indigo-500" />
              <LogoItem icon="G" name="Google AI" color="bg-red-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── THE PROBLEM ─────────────────── */}
      <section className="py-20 md:py-32 px-6 bg-zinc-100 border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.3em] mb-4 block">The Visibility Problem</span>
            <h2 className={`${playfair.className} text-3xl md:text-6xl font-bold text-zinc-900 leading-tight`}>
              90% of Professional Websites Are <span className="text-brand">Invisible</span> to AI.
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <ProblemCard 
              icon="🔍"
              title="AI Can't Read Your Site"
              desc="Your website looks great to humans. But AI engines need schema markup, entity data, and structured content to understand and recommend you."
            />
            <ProblemCard 
              icon="📉"
              title="Google is No Longer Enough"
              desc="AI search traffic grew 527%. Ranking #1 on Google doesn't mean AI recognizes you as the authority."
            />
            <ProblemCard 
              icon="😶"
              title="Competitors Get Your Leads"
              desc="When AI is asked for the best in your field, it gives names. If yours isn't there, you're missing high-intent clients."
            />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── ZERO RISK OFFER ─────────────────── */}
      <section className="py-16 md:py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-brand/10 blur-[150px] rounded-full pointer-events-none opacity-30"></div>
          
          <motion.div 
            {...fadeInUp}
            className="relative border border-brand/20 bg-white p-8 md:p-20 rounded-[32px] md:rounded-[48px] text-center shadow-[0_32px_80px_-20px_rgba(255,115,0,0.15)]"
          >
            <div className="bg-brand text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-10 inline-block shadow-lg shadow-brand/20">The Zero Risk Guarantee</div>
            
            <h2 className={`${playfair.className} text-3xl md:text-6xl font-bold mb-6 text-zinc-900 leading-tight`}>We Deliver First. <br className="hidden md:block" /> You Decide After.</h2>
            
            <motion.div 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className={`${playfair.className} text-7xl md:text-[10rem] font-black text-brand mb-4 flex items-center justify-center gap-2`}
            >
                <span className="text-3xl md:text-5xl font-extrabold translate-y-[-10px] md:translate-y-[-20px]">$</span>
                999
            </motion.div>
            
            <p className="text-xl md:text-2xl text-zinc-900 font-bold mb-10 tracking-tight">Only if you love it. If you don&apos;t — pay nothing.</p>
            
            <p className="text-zinc-600 leading-relaxed text-base md:text-xl max-w-2xl mx-auto mb-12">
              We build your complete AI-visible website and deliver it in 48 hours. <span className="text-zinc-900 font-semibold underline decoration-brand/20">Check it live on your own domain before spending a single dollar.</span>
            </p>

            <Link 
              href="#form" 
              className="w-full md:w-auto inline-block bg-brand hover:scale-105 text-white font-bold px-12 py-5 rounded-xl text-lg transition-transform active:scale-95 shadow-xl mb-6 shadow-brand/20 uppercase tracking-wide"
            >
              Get My Website Built Free →
            </Link>
            
            <div className="flex items-center justify-center gap-3 text-emerald-600">
              <span className="text-xl">🛡️</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">No credit card. No contracts.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── WHAT'S INCLUDED ─────────────────── */}
      <section className="py-20 md:py-32 px-6 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-6 text-zinc-900`}>Tailored for Humans. <br className="md:hidden" /> Built for AI.</h2>
            <p className="text-zinc-500 text-lg md:text-xl">One package. One price. Only if you love the result.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4"
          >
            <FeatureBox title="Premium Minimal Design" desc="Focusing on professional authority and high-converting layouts." />
            <FeatureBox title="SRO & Entity Prep" desc="JSON-LD schema, entity mapping, and relationship metadata." />
            <FeatureBox title="Domain Managed" desc="Full registration, DNS setup, and SSL security auto-configured." />
            <FeatureBox title="Elite Hosting" desc="Fast, secure globally distributed hosting for instant load times." />
            <FeatureBox title="AI Indexing Suite" desc="Optimized for GPTBot, ClaudeBot, and Perplexity indexing." />
            <FeatureBox title="Booking Integrated" desc="Sync directly with your calendar for seamless lead booking." />
            <FeatureBox title="Professional Brand Email" desc="Custom business email setup (contact@yourname.com)." />
            <FeatureBox title="48hr Delivery Track" desc="Locked delivery window with live tracking from our design team." />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── HOW IT WORKS ─────────────────── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold text-zinc-900`}>From Invisible to Authority <br /> in 3 Steps.</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-16 md:space-y-24 relative"
          >
            <div className="absolute left-[23px] md:left-[27px] top-6 bottom-6 w-px bg-zinc-100 hidden sm:block"></div>
            
            <StepItem 
              num="1" 
              title="Briefing the Sprint" 
              desc="Fill out the 2-minute form below. We'll review your expert profile and confirm your 48-hour window." 
              color="bg-brand"
            />
            <StepItem 
              num="2" 
              title="Execution & AI-Optimization" 
              desc="Our design and technical team builds your site, writes your copy, and optimizes every tag for AI search assistants." 
              color="bg-brand-dark"
            />
            <StepItem 
              num="3" 
              title="Live Reveal & Activation" 
              desc="Review the live site. If you love it — pay $999. If not — walk away without spending a single cent." 
              color="bg-emerald-600"
            />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── SOCIAL PROOF ─────────────────── */}
      <section className="py-20 md:py-32 px-6 bg-zinc-100 border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-12 text-center mb-16">
                 <h2 className={`${playfair.className} text-3xl md:text-6xl font-bold mb-6 text-zinc-900`}>Trusted by Professionals Who Lead.</h2>
                 <p className="text-zinc-500 text-lg">Independent experts and industry founders across 40+ countries.</p>
            </motion.div>
            
            <TestimonialCarousel testimonials={[
              { author: "Dr. Ayesha Khan", role: "Psychologist & Author", quote: "Elegant, professional, and built in two days. The process was effortless and perfectly aligned with my vision." },
              { author: "David Liu", role: "FinTech Founder", quote: "Exactly what I needed for investors. They understood my goals and made the execution feel premium." },
              { author: "James Carter", role: "Real Estate Consultant", quote: "Seamless and personal experience. I finally have a website that feels polished, impactful, and authentic." }
            ]} />
          </div>
        </div>
      </section>

      {/* ─────────────────── FAQ ─────────────────── */}
      <section className="py-20 md:py-32 px-6 max-w-3xl mx-auto">
        <motion.h2 {...fadeInUp} className={`${playfair.className} text-3xl md:text-5xl font-bold text-center mb-16 text-zinc-900`}>Got Questions? <br className="md:hidden" /> We Have Answers.</motion.h2>
        <div className="space-y-4">
          <FAQItem q="What does 'pay only if you love it' actually mean?" a="Exactly what it says. We build your live website first. After 48 hours, we send you the link. If you're 100% happy, you pay the $999. If not, we take the site down and you walk away free. No friction." />
          <FAQItem q="How is this different from a normal website?" a="Typical sites focus on humans. Our sites are built for both humans AND AI crawlers. We integrate JSON-LD schema so AI assistants (ChatGPT, Gemini) can verify you as an authority." />
          <FAQItem q="Do I need technical knowledge?" a="None. We handle domain registration, DNS, hosting, and technical maintenance. You focus on your expertise." />
        </div>
      </section>

      {/* ─────────────────── LEAD FORM ─────────────────── */}
      <section id="form" className="py-20 md:py-32 px-4 md:px-6 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
            <h2 className={`${playfair.className} text-4xl md:text-6xl font-black mb-4 text-zinc-900 leading-tight`}>Ready for Your <br className="md:hidden" /> Sprint?</h2>
            <p className="text-lg md:text-xl text-zinc-500">Fill out the form below to secure your slot.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-12 rounded-[24px] md:rounded-[40px] border border-zinc-200 relative shadow-2xl overflow-hidden"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <InputGroup label="First Name" placeholder="John" />
                <InputGroup label="Last Name" placeholder="Smith" />
              </div>
              <InputGroup label="Expert Email" placeholder="john@example.com" type="email" />
              <InputGroup label="Phone (Optional)" placeholder="+1 (555) 000-0000" />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Your Expertise</label>
                <select className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 text-zinc-900 focus:outline-none focus:border-brand transition-all appearance-none cursor-pointer">
                  <option>Select your field</option>
                  <option>Psychologist</option>
                  <option>Real Estate Expert</option>
                  <option>Strategic Consultant</option>
                  <option>Legal Professional</option>
                  <option>Tech Founder</option>
                  <option>Other Expert</option>
                </select>
              </div>
              
              <div className="pt-6">
                <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit" 
                    className="w-full bg-brand text-white font-black text-xl py-6 rounded-2xl shadow-xl shadow-brand/10 transition-all uppercase tracking-wide tracking flex items-center justify-center gap-2"
                >
                  Start My Website Sprint
                  <span className="text-2xl pt-0.5">→</span>
                </motion.button>
                <p className="text-center text-sm text-zinc-400 mt-6 font-medium leading-relaxed uppercase tracking-tighter italic">
                  No credit card required. No contracts. Pay $999 only after the reveal.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── FOOTER ─────────────────── */}
      <footer className="py-20 px-6 bg-white border-t border-zinc-100 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-brand text-3xl font-black mb-8">EXAGIC</div>
          <p className="text-zinc-500 text-sm font-medium mb-12 leading-relaxed uppercase tracking-wider">Your Expertise. <br className="md:hidden" /> AI Recommended.</p>
          <p className="text-zinc-300 text-[10px] font-bold uppercase tracking-widest">© 2026 Exagic AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function LogoItem({ icon, name, color }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-7 h-7 rounded-lg ${color} flex items-center justify-center font-black text-white text-[10px]`}>{icon}</span>
      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">{name}</span>
    </div>
  );
}

function ProblemCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white border border-zinc-200 p-8 rounded-[24px] hover:border-brand transition-all group hover:shadow-[0_20px_40px_-20px_rgba(255,115,0,0.15)]"
    >
      <div className="text-4xl mb-6 transition-transform group-hover:scale-110 origin-left">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-zinc-900">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function FeatureBox({ title, desc }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-4 md:p-6 border border-zinc-100 rounded-xl md:rounded-2xl bg-white hover:bg-zinc-50 transition-all border-dashed"
    >
      <div className="text-emerald-600 font-bold mb-2 md:mb-4 text-base md:text-lg">✓</div>
      <h4 className="font-bold text-[10px] md:text-sm mb-1 md:mb-2 text-zinc-900 leading-tight">{title}</h4>
      <p className="text-zinc-500 text-[9px] md:text-[11px] leading-relaxed line-clamp-3 md:line-clamp-none">{desc}</p>
    </motion.div>
  );
}

function StepItem({ num, title, desc, color }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="flex gap-6 md:gap-8 relative items-start"
    >
      <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full ${color} flex items-center justify-center text-white text-xl md:text-2xl font-black shadow-lg shadow-zinc-200 relative z-10`}>{num}</div>
      <div>
        <h3 className="text-lg md:text-2xl font-extrabold mb-2 text-zinc-900 leading-tight">{title}</h3>
        <p className="text-zinc-500 text-sm md:text-lg leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function TestimonialCarousel({ testimonials }) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const speedRef = useRef(0.5); // pixels per frame

  const items = [...testimonials, ...testimonials];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (!isPaused && el) {
        const halfScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= halfScroll) {
          el.scrollLeft -= halfScroll;
        }
        el.scrollLeft += speedRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  return (
    <div 
        className="lg:col-span-12 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
    >
        <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 lg:pb-0 px-4 md:px-0 no-scrollbar"
        >
            {items.map((t, i) => (
                <TestimonialCard key={i} {...t} />
            ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {testimonials.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
            ))}
        </div>
    </div>
  );
}

function TestimonialCard({ author, role, quote }) {
  return (
    <motion.div 
      data-card
      variants={fadeInUp}
      className="p-8 md:p-10 border border-zinc-200 rounded-[32px] bg-white relative group transition-all flex-shrink-0 w-[85vw] lg:w-[calc(33.333%-16px)] snap-center"
    >
      <div className="text-brand text-2xl mb-6">★★★★★</div>
      <p className="text-zinc-600 italic mb-8 leading-relaxed text-base md:text-lg">&quot;{quote}&quot;</p>
      <div>
        <div className="font-black text-zinc-900 tracking-tight text-sm uppercase">{author}</div>
        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em] mt-2">{role}</div>
      </div>
    </motion.div>
  );
}

function StatItem({ val, label }) {
  return (
    <div>
      <div className="text-4xl font-extrabold text-brand mb-1">{val}</div>
      <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{label}</div>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="border-b border-zinc-100 pb-6 group cursor-pointer hover:bg-zinc-50/50 transition-all px-4 pt-6 rounded-2xl"
    >
      <div className="flex justify-between items-center gap-6">
        <h3 className="text-base md:text-lg font-bold group-hover:text-brand transition-colors text-zinc-800">{q}</h3>
        <span className="text-brand text-2xl group-hover:rotate-90 transition-transform">+</span>
      </div>
      <div className="hidden group-hover:block mt-6 transition-all duration-300">
        <p className="text-zinc-500 text-sm md:text-base leading-relaxed pb-4">{a}</p>
      </div>
    </motion.div>
  );
}

function InputGroup({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-brand transition-all text-sm"
      />
    </div>
  );
}
