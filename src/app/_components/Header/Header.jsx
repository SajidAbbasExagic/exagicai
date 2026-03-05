"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "AI SEO", href: "/ai-seo" },
    { name: "AEO", href: "/aeo" },
    { name: "SRO", href: "/sro" },
    { name: "Industries", href: "/industries" },
    { name: "Lab", href: "/lab" },
  ];

  const NavLink = ({ href, children, mobile = false }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        onClick={() => mobile && setIsOpen(false)}
        className={`${
          mobile ? "hover:text-brand" : "hover:text-brand-dark"
        } transition-all ${
          isActive
            ? mobile
              ? "text-brand font-bold"
              : "text-brand-dark font-bold underline decoration-brand/30 underline-offset-4"
            : ""
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 py-3 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/exagic-logo.png"
              alt="Exagic AI - AI SEO & SRO Agency San Francisco"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-zinc-800">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.name}
            </NavLink>
          ))}
          <Link
            href="/contact"
            className="ml-4 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-md active:scale-95 shadow-sm"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 p-2 text-zinc-900 flex items-center justify-center h-10 w-10"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                }`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-4"
                }`}
              ></span>
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
                }`}
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
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} mobile>
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full rounded-md bg-brand px-5 py-3.5 text-center text-base font-semibold text-white shadow-md active:scale-95 transition-all mb-4"
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
