import Link from "next/link";

export default function Team() {
  const team = [
    {
      name: "Saif K",
      title: "Director of Strategy",
      image: "/team/arthur.jpeg",
    },
    {
      name: "Elena Vance",
      title: "AI SEO Specialist",
      image: "/team/elena.jpeg",
    },
    {
      name: "Marcus Thorne",
      title: "Technical SEO",
      image: "/team/marcus.jpeg",
    },
    {
      name: "Julian Reed",
      title: "Entity Strategist",
      image: "/team/julian.jpg",
    },
  ];

  return (
    <section id="team" className="rag-section bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Meet Our Core Strategy Team
          </h2>
          <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
            An all-senior team with experience across industrial manufacturing,
            AI search, and technical SEO.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="aspect-square w-full bg-zinc-50 rounded-[1.5rem] mb-6 relative overflow-hidden border border-zinc-100 flex items-center justify-center group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                {member.name}
              </h3>
              <p className="mt-2 text-xs text-brand font-bold uppercase tracking-[0.2em]">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-base font-bold text-zinc-900 group"
          >
            <span className="border-b-2 border-brand/30 hover:border-brand transition-colors pb-1">
              Schedule a Consultation
            </span>
            <svg
              className="h-5 w-5 text-brand transform group-hover:translate-x-1.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
