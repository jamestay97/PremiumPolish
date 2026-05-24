import { Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(147,51,234,0.1)] py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-[#9333ea]" />
            <span className="font-[family-name:var(--font-orbitron)] font-bold text-gray-900 tracking-wider">
              PRESTIGE<span className="text-[#9333ea]">POLISH</span> LLC
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-[#9333ea] transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-[#9333ea] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[#9333ea] transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-sm text-gray-600 text-center md:text-right">
            © 2021 Prestige Polish LLC. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-[rgba(147,51,234,0.15)] text-center text-xs text-gray-500 leading-relaxed px-2">
          <p className="break-words">
            2701 Waterbury Ave, Bronx, NY 10461
            <br />
            Call: (347) 757-1186 · (863) 521-7429 · (347) 261-6279
            <br />
            Text only: (407) 818-5098
            <br />
            prestigepolish42@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
