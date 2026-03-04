"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 py-3 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/exagic-logo.png"
              alt="Exagic AI"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-zinc-800">
          <Link href="/" className="hover:text-brand transition-all">
            Home
          </Link>
          <Link href="/ai-seo" className="hover:text-brand transition-all">
            AI SEO
          </Link>
          <Link href="/aeo" className="hover:text-brand transition-all">
            AEO
          </Link>
          <Link href="/sro" className="hover:text-brand transition-all">
            SRO
          </Link>
          <Link href="/industries" className="hover:text-brand transition-all">
            Industries
          </Link>
          <Link href="/lab" className="hover:text-brand transition-all">
            Lab
          </Link>
          <Link
            href="/contact"
            className="ml-4 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-md active:scale-95"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 p-2 text-zinc-900"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 h-screen w-screen bg-white transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-32 pb-12">
          <div className="flex flex-col gap-6 text-2xl font-medium tracking-tight text-zinc-900">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              Home
            </Link>
            <Link
              href="/ai-seo"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              AI SEO
            </Link>
            <Link
              href="/aeo"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              AEO
            </Link>
            <Link
              href="/sro"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              SRO
            </Link>
            <Link
              href="/industries"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/lab"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand transition-colors"
            >
              Lab
            </Link>
          </div>

          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full rounded-md bg-brand px-5 py-3.5 text-center text-base font-semibold text-white shadow-md active:scale-95 transition-all"
            >
              Schedule a Call
            </Link>
            <p className="mt-6 text-sm text-zinc-500 text-center">
              Specialized AI SEO for the SF Industrial Corridor.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
