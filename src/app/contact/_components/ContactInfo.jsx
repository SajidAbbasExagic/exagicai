export default function ContactInfo() {
  const contactDetails = [
    { label: "Phone", value: "+1 (510) 613 5346", sub: "Mon-Fri 9am-6pm PST" },
    {
      label: "Email",
      value: "inquiries@exagic.ai",
      sub: "General Inquiries",
    },
    {
      label: "Lab Office",
      value: "San Francisco, CA",
      sub: "SF Industrial Corridor",
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
          Contact <span className="text-brand">Exagic</span>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          Ready to unlock your business's AI potential and stay ahead in the AI
          era? Our technical team is ready to analyze your AI visibility.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {contactDetails.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
              {item.label}
            </span>
            <span className="text-xl font-bold text-zinc-900 leading-tight">
              {item.value}
            </span>
            <span className="text-xs text-zinc-500 font-medium">
              {item.sub}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-zinc-100">
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
          Our Commitment
        </h3>
        <p className="text-sm text-zinc-500 italic leading-relaxed">
          "Exagic AI provides purely constructive consultations. No hard sales.
          Just technical analysis and actionable data for industrial
          manufacturers."
        </p>
      </div>
    </div>
  );
}
