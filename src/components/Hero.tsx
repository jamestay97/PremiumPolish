"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Shield, Award } from "lucide-react";
import WaterDroplet from "./effects/WaterDroplet";
import PowerWashHero from "./effects/PowerWashHero";
import MorphingButton from "./effects/MorphingButton";
import GlowCard from "./effects/GlowCard";
import { useIsMobile } from "@/hooks/useIsMobile";

const badges = [
  { icon: Award, text: "5+ Years of Hands-on Experience" },
  { icon: Shield, text: "Fully Insured" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "8%" : "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, isMobile ? 1 : 0.3]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden scanlines"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%]">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
        {!isMobile && (
          <>
            <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#00f0ff]/10 blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#a855f7]/10 blur-[120px]" />
          </>
        )}
      </motion.div>

      {/* Interactive power wash — full width at very top */}
      <div className="relative z-20 w-full pt-20 sm:pt-24 px-0 sm:px-4 lg:px-6">
        <PowerWashHero className="w-full max-w-6xl mx-auto" />
      </div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full flex-1 flex items-center"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 sm:pb-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:hidden shrink-0"
            >
              <WaterDroplet />
            </motion.div>

            <div className="flex-1 text-center lg:text-left w-full min-w-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-[#00f0ff]"
              >
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>Prestige Polish LLC</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="font-[family-name:var(--font-orbitron)] text-[1.75rem] leading-snug sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="text-white">The Future of </span>
                <span className="text-neon-gradient">Clean.</span>
                <br />
                <span className="text-white">Delivered to You.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 px-1"
              >
                Premium Pressure Washing &amp; Mobile Carwash — serving Long Island,
                Brooklyn, Queens, and surrounding areas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
              >
                {badges.map(({ icon: Icon, text }) => (
                  <GlowCard
                    key={text}
                    className="flex items-center justify-center gap-2 rounded-full px-3 py-2 sm:px-4 text-xs sm:text-sm text-slate-300 w-full sm:w-auto"
                  >
                    <Icon className="h-4 w-4 text-[#00f0ff] shrink-0" />
                    <span className="text-center sm:text-left">{text}</span>
                  </GlowCard>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <MorphingButton
                  href="#contact"
                  className="btn-glow rounded-full px-8 py-3.5 text-base w-full sm:w-auto text-center justify-center"
                >
                  Book a Service
                </MorphingButton>
                <a
                  href="#services"
                  className="btn-outline rounded-full px-8 py-3.5 text-base w-full sm:w-auto text-center"
                >
                  View Services
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:flex shrink-0 items-center justify-center"
            >
              <WaterDroplet />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#050508] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
