import Image from "next/image";
import { ArrowUpRight, Globe, Linkedin } from "lucide-react";
import ScheduleMeetingButton from "@/components/ScheduleMeetingButton";

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

const columnLayout =
  "lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-x-20 xl:gap-x-28";

export default function Team() {
  return (
    <section id="team" className="rag-section border-t border-zinc-100 bg-zinc-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col gap-12 lg:gap-14">
          <div className={`grid grid-cols-1 gap-14 items-center ${columnLayout}`}>
            <div className="flex flex-col items-center text-center lg:max-w-[360px]">
              <div className="w-36 h-36 sm:w-40 sm:h-40 relative overflow-hidden rounded-xl border border-zinc-200/80 shadow-sm shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 640px) 144px, 160px"
                />
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-zinc-900 tracking-tight">
                {member.name}
              </h3>
              <p className="mt-3 text-sm text-zinc-500 font-medium leading-relaxed">
                {member.title}
              </p>
            </div>

            <div className="text-center lg:pl-6 lg:text-left xl:pl-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Leadership
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] font-bold text-zinc-900 tracking-tight">
                Strategic Direction for Industrial AI Search
              </h2>
              <p className="mt-6 text-base sm:text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Deep expertise across industrial manufacturing, AI search, and
                technical SEO — guiding how brands earn visibility in AI-driven
                procurement.
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-6 items-center sm:grid-cols-2 ${columnLayout}`}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-center">
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

            <div className="flex items-center justify-center sm:justify-end lg:pl-6 xl:pl-10">
              <ScheduleMeetingButton className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors group">
                <span className="border-b border-zinc-300 group-hover:border-zinc-900 transition-colors pb-0.5">
                  Schedule a meeting
                </span>
                <svg
                  className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </ScheduleMeetingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
