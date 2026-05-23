"use client";

import { motion } from "framer-motion";
import { Menu, X, Droplets } from "lucide-react";
import { useState } from "react";
import MorphingButton from "./effects/MorphingButton";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <a href="#" className="flex items-center gap-2 group">
          <Droplets className="h-7 w-7 text-[#00f0ff] group-hover:drop-shadow-[0_0_8px_#00f0ff] transition-all" />
          <span className="font-[family-name:var(--font-orbitron)] text-base sm:text-lg font-bold tracking-wider text-white">
            PRESTIGE<span className="text-[#00f0ff]">POLISH</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 hover:text-[#00f0ff] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <MorphingButton href="#contact" className="btn-glow rounded-full px-5 py-2 text-sm">
              Book Now
            </MorphingButton>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden text-[#00f0ff] p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass border-t border-[rgba(0,240,255,0.1)] px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-[#00f0ff] transition-colors"
                  onClick={() => setOpen(false)}
                  data-cursor="pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <MorphingButton href="#contact" className="btn-glow inline-block rounded-full px-5 py-2 text-sm">
                Book Now
              </MorphingButton>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
