import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="border-t border-zinc-200 bg-zinc-50 py-16"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <Image
              src="/exagic-logo.png"
              alt="Exagic AI"
              width={150}
              height={50}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="mt-4 max-w-sm text-zinc-500 text-sm leading-relaxed">
              Leading the industry through mechanistic interpretability and
              advanced model steering techniques for the industrial belt.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Capabilities</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a
                  href="/ai-seo"
                  className="hover:text-brand transition-colors"
                >
                  AI SEO
                </a>
              </li>
              <li>
                <a href="/aeo" className="hover:text-brand transition-colors">
                  AEO Strategies
                </a>
              </li>
              <li>
                <a href="/sro" className="hover:text-brand transition-colors">
                  SRO Implementation
                </a>
              </li>
              <li className="pt-2 border-t border-zinc-100 mt-2">
                <a 
                  href="/ai-website-sprint" 
                  className="text-brand font-bold hover:opacity-80 transition-opacity"
                >
                  48hr AI Website Sprint
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a href="/lab" className="hover:text-brand transition-colors">
                  Lab / Resources
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="hover:text-brand transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-brand transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-zinc-900 flex items-center gap-1.5">
              <span>Ask AI About Us</span>
              <span className="inline-flex items-center rounded-full bg-brand/10 px-1.5 py-0.5 text-[10px] font-medium text-brand ring-1 ring-inset ring-brand/20 animate-pulse">
                New
              </span>
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-500">
              <li>
                <a
                  href={`https://chatgpt.com/?q=${encodeURIComponent("Analyze exagic.ai and tell me what is it about")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-brand transition-colors group"
                >
                  <Image
                    src="/openai-logo.svg"
                    alt="ChatGPT Logo"
                    width={16}
                    height={16}
                    className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                  ChatGPT
                </a>
              </li>
              <li>
                <a
                  href={`https://claude.ai/new?q=${encodeURIComponent("Analyze exagic.ai and tell me what is it about")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-brand transition-colors group"
                >
                  <Image
                    src="/claude-logo.svg"
                    alt="Claude Logo"
                    width={16}
                    height={16}
                    className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                  Claude
                </a>
              </li>
              <li>
                <a
                  href={`https://aistudio.google.com/prompts/new_chat?prompt=${encodeURIComponent("Analyze exagic.ai and tell me what is it about")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-brand transition-colors group"
                >
                  <Image
                    src="/gemini-logo.svg"
                    alt="Gemini Logo"
                    width={16}
                    height={16}
                    className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                  Gemini
                </a>
              </li>
              <li>
                <a
                  href={`https://www.perplexity.ai/search?q=${encodeURIComponent("Analyze exagic.ai and tell me what is it about")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-brand transition-colors group"
                >
                  <Image
                    src="/perplexity-logo.svg"
                    alt="Perplexity Logo"
                    width={16}
                    height={16}
                    className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                  Perplexity
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-zinc-900">
              Industrial Corridor
            </h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a
                  href="/locations/san-francisco"
                  className="hover:text-brand transition-colors"
                >
                  San Francisco
                </a>
              </li>
              <li>
                <a
                  href="/locations/oakland"
                  className="hover:text-brand transition-colors"
                >
                  Oakland
                </a>
              </li>
              <li>
                <a
                  href="/locations/fremont"
                  className="hover:text-brand transition-colors"
                >
                  Fremont
                </a>
              </li>
              <li>
                <a
                  href="/locations/san-leandro"
                  className="hover:text-brand transition-colors"
                >
                  San Leandro
                </a>
              </li>
              <li>
                <a
                  href="/locations/san-jose"
                  className="hover:text-brand transition-colors"
                >
                  San Jose
                </a>
              </li>
              <li>
                <a
                  href="/locations/alameda"
                  className="hover:text-brand transition-colors"
                >
                  Alameda
                </a>
              </li>
              <li>
                <a
                  href="/locations/hayward"
                  className="hover:text-brand transition-colors"
                >
                  Hayward
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between text-xs text-zinc-400 gap-4">
          <p>&copy; 2026 Exagic AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-zinc-600">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-zinc-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
