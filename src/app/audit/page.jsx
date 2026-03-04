"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  ShieldCheck,
  Cpu,
  Globe,
  Search,
  Zap,
  BarChart3,
  Database,
} from "lucide-react";
import Image from "next/image";

export default function AuditPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#f06030]" />
        </div>
      }
    >
      <AuditPageContent />
    </Suspense>
  );
}

function AuditPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const targetUrl = searchParams.get("url") || "your-website.com";

  const [stage, setStage] = useState("analyzing"); // 'analyzing' | 'form'
  const [analysisText, setAnalysisText] = useState(
    "Initializing semantic crawler...",
  );
  const [progress, setProgress] = useState(0);

  const analysisSteps = [
    "Initializing generative engine crawler...",
    "Probing mechanistic interpretability patterns...",
    "Analyzing brand citations in Perplexity...",
    "Testing GPT-4o semantic response vectors...",
    "Mapping procurement search intent...",
    "Evaluating model-steering visibility...",
    "Finalizing visibility report...",
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < analysisSteps.length) {
        setAnalysisText(analysisSteps[currentStep]);
        currentStep++;
      }
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setStage("form"), 800);
          return 100;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  if (stage === "analyzing") {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <div className="relative h-24 w-24 mx-auto mb-10">
            <div className="absolute inset-0 bg-[#f06030]/10 rounded-full animate-ping"></div>
            <div className="relative flex items-center justify-center h-full w-full rounded-full bg-white border-2 border-[#f06030] shadow-xl">
              <Cpu className="h-10 w-10 text-[#f06030] animate-pulse" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-zinc-900 mb-4">
            Analyzing <span className="text-[#f06030]">{targetUrl}</span>
          </h1>
          <p className="text-zinc-500 font-medium mb-12">
            Performing mechanistic interpretability audit across ChatGPT,
            Gemini, and Perplexity.
          </p>

          <div className="space-y-4">
            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200">
              <motion.div
                className="h-full bg-[#f06030]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#f06030]">
              <span className="flex items-center gap-2">
                <Loader2 className="h-3 w-3 animate-spin" />
                {analysisText}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
            <div className="flex flex-col items-center gap-3">
              <Globe className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase">
                Crawl Index
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Database className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase">
                Semantic Map
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Zap className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase">
                Intent Vector
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase">
                Risk Profile
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:h-screen bg-[#f06030] flex flex-col relative lg:overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none"></div>

      {/* Premium Logo Bar */}
      <header className="w-full bg-[#222222] py-3 px-6 md:px-12 flex items-center justify-between relative z-20 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-white font-black text-lg md:text-xl tracking-tighter uppercase italic">
            Exagic AI
          </span>
        </div>
        <div className="hidden md:block">
          <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            Visibility Intelligence v2.0
          </span>
        </div>
      </header>

      <div className="flex-grow flex items-center justify-center overflow-y-auto pt-8 pb-12 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl w-full"
        >
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              Your report is ready, AI visibility{" "}
              <br className="hidden md:block" /> opportunities identified.
            </h2>
            <p className="text-[#ffee00] text-base md:text-lg font-medium opacity-90">
              Fill out the form below to receive your results.
            </p>
          </div>

          <form className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-3 md:py-4 rounded-md bg-white border-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-yellow-400 outline-none shadow-lg text-sm"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-3 md:py-4 rounded-md bg-white border-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-yellow-400 outline-none shadow-lg text-sm"
                  required
                />
                <div className="flex gap-2">
                  <div className="w-20 md:w-24 bg-white rounded-md flex items-center justify-center border-0 shadow-lg px-2 text-xs md:text-sm">
                    <span className="text-zinc-400 font-bold tracking-tight">
                      US +1
                    </span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="flex-grow px-5 py-3 md:py-4 rounded-md bg-white border-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-yellow-400 outline-none shadow-lg text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <p className="text-[9px] md:text-[10px] leading-relaxed text-white/70 text-center max-w-xl mx-auto">
              By clicking below, you consent for Exagic AI to contact you via
              automated technology. Consent is not required for purchase.{" "}
              <a href="/privacy" className="underline hover:text-white">
                Privacy
              </a>
              .
            </p>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 md:py-5 rounded-md bg-[#1b63da] hover:bg-blue-700 text-white font-extrabold text-xs md:text-sm tracking-widest uppercase transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                SEND THE REPORT TO MY EMAIL
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
