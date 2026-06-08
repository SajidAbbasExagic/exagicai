import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Linkedin } from "lucide-react";

const member = {
  name: "Saif Khan",
  title: "Chief AI Strategist — Exagic.ai",
  image: "/team/arthur.jpg",
  profiles: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saif-exagic-ai",
      icon: Linkedin,
    },
    {
      label: "Exagic Profile",
      href: "https://exagic.com/digital-strategist-saif-ullah-khan/",
      icon: Globe,
    },
  ],
};

export default function Team() {
  return (
    <section id="team" className="rag-section border-t border-zinc-100 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Strategic Direction for Industrial AI Search
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 leading-relaxed">
            Deep expertise across industrial manufacturing, AI search, and
            technical SEO — guiding how brands earn visibility in AI-driven
            procurement.
          </p>
        </div>

        <div className="mt-14 max-w-md mx-auto">
          <div className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-8 sm:p-10 text-center">
            <div className="mx-auto mb-8 w-48 h-48 sm:w-52 sm:h-52 relative overflow-hidden rounded-xl border border-zinc-200/80 shadow-sm">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 640px) 192px, 208px"
              />
            </div>

            <h3 className="text-2xl font-semibold text-zinc-900 tracking-tight">
              {member.name}
            </h3>
            <p className="mt-2 text-sm text-zinc-500 font-medium">
              {member.title}
            </p>

            <div className="mt-8 pt-6 border-t border-zinc-200/80 flex items-center justify-center gap-6">
              {member.profiles.map((profile) => {
                const Icon = profile.icon;
                return (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                    <span>{profile.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-50" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors group"
          >
            <span className="border-b border-zinc-300 group-hover:border-zinc-900 transition-colors pb-0.5">
              Schedule a Consultation
            </span>
            <svg
              className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
