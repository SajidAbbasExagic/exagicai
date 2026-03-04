import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="border-t border-zinc-200 bg-zinc-50 py-16"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/exagic-logo.png"
              alt="Exagic AI"
              width={150}
              height={50}
              className="h-10 w-auto object-contain mb-4 opacity-80 hover:opacity-100 transition-all"
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
            <h4 className="font-semibold mb-4">Location</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              San Francisco Corridor
              <br />
              California, US
            </p>
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
