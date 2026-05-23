import { Droplets } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(0,240,255,0.1)] py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-[#00f0ff]" />
            <span className="font-[family-name:var(--font-orbitron)] font-bold text-white tracking-wider">
              PRESTIGE<span className="text-[#00f0ff]">POLISH</span> LLC
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="#services" className="hover:text-[#00f0ff] transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-[#00f0ff] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[#00f0ff] transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-sm text-slate-500 text-center md:text-right">
            © {year} Prestige Polish LLC. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            Bronx, NY
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.05)] text-center text-xs text-slate-600 leading-relaxed px-2">
          <p className="break-words">
            2701 Waterbury Ave, Bronx, NY 10461
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            (347) 757-1186 · (863) 521-7429
            <br />
            prestigepolish42@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
