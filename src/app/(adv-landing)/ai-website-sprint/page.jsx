"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 md:mb-8 text-zinc-900"
          >
            We&apos;ll Build Your <span className="text-brand">AI-Visible</span> Website in 48 Hours.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed px-4 md:px-0"
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
              className="w-full md:w-auto bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl text-base md:text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-brand/20 flex items-center justify-center group"
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
              <AILogo name="ChatGPT" svg={<svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>} />
              <AILogo name="Gemini" svg={<svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>} />
              <AILogo name="Perplexity" svg={<svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/></svg>} />
              <AILogo name="Google AI" svg={<svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>} />
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
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-zinc-900 leading-tight">
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
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-zinc-900 leading-tight">We Deliver First. <br className="hidden md:block" /> You Decide After.</h2>
            
            <motion.div 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className="text-6xl md:text-8xl lg:text-[9rem] font-black text-brand mb-4 flex items-center justify-center gap-2"
            >
                <span className="text-3xl md:text-5xl font-extrabold translate-y-[-10px] md:translate-y-[-20px]">$</span>
                999
            </motion.div>
            
            <p className="text-lg md:text-xl text-zinc-900 font-bold mb-8 tracking-tight">Only if you love it. If you don&apos;t — pay nothing.</p>
            
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10">
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
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-zinc-900">Tailored for Humans. <br className="md:hidden" /> Built for AI.</h2>
            <p className="text-zinc-500 text-base md:text-lg">One package. One price. Only if you love the result.</p>
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
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-zinc-900">From Invisible to Authority <br /> in 3 Steps.</h2>
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
            <motion.div {...fadeInUp} className="lg:col-span-12 text-center mb-12 md:mb-16">
                 <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-zinc-900">Trusted by Professionals Who Lead.</h2>
                 <p className="text-zinc-500 text-base md:text-lg">Independent experts and industry founders across 40+ countries.</p>
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
        <motion.h2 {...fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-zinc-900">Got Questions? <br className="md:hidden" /> We Have Answers.</motion.h2>
        <div className="space-y-4">
          <FAQItem q="What does 'pay only if you love it' actually mean?" a="Exactly what it says. We build your live website first. After 48 hours, we send you the link. If you're 100% happy, you pay the $999. If not, we take the site down and you walk away free. No friction." />
          <FAQItem q="How is this different from a normal website?" a="Typical sites focus on humans. Our sites are built for both humans AND AI crawlers. We integrate JSON-LD schema so AI assistants (ChatGPT, Gemini) can verify you as an authority." />
          <FAQItem q="Do I need technical knowledge?" a="None. We handle domain registration, DNS, hosting, and technical maintenance. You focus on your expertise." />
        </div>
      </section>

      {/* ─────────────────── LEAD FORM ─────────────────── */}
      <section id="form" className="py-20 md:py-32 px-4 md:px-6 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-zinc-900 leading-tight">Ready for Your <br className="md:hidden" /> Sprint?</h2>
            <p className="text-base md:text-lg lg:text-xl text-zinc-500">Fill out the form below to secure your slot.</p>
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
              
              <div className="pt-4">
                <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit" 
                    className="w-full bg-brand text-white font-bold text-base md:text-lg py-4 md:py-5 rounded-xl shadow-lg shadow-brand/10 transition-all flex items-center justify-center gap-2"
                >
                  Start My Website Sprint →
                </motion.button>
                <p className="text-center text-xs text-zinc-400 mt-4 font-medium leading-relaxed">
                  No credit card required. No contracts. Pay $999 only after the reveal.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function AILogo({ name, svg }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-zinc-600">{svg}</span>
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
      className="p-4 md:p-6 border border-zinc-100 rounded-xl md:rounded-2xl bg-white hover:shadow-xl hover:shadow-brand/5 hover:border-brand/20 transition-all border-dashed"
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
  const [open, setOpen] = useState(false);
  return (
    <motion.div 
      variants={fadeInUp}
      className="border-b border-zinc-100 pb-4 cursor-pointer hover:bg-zinc-50/50 transition-all px-4 pt-4 rounded-xl"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className={`text-sm md:text-base font-bold transition-colors ${open ? 'text-brand' : 'text-zinc-800'}`}>{q}</h3>
        <span className={`text-brand text-xl flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </div>
      {open && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2 }}
          className="mt-4"
        >
          <p className="text-zinc-500 text-sm leading-relaxed pb-2">{a}</p>
        </motion.div>
      )}
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
