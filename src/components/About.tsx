"use client";

import AnimatedSection from "./AnimatedSection";
import GlowCard from "./effects/GlowCard";
import { Clock, Calendar, Briefcase, CheckCircle2 } from "lucide-react";

const highlights = [
  "5+ years of hands-on industry experience",
  "Fully mobile — we come to you",
  "Residential & commercial clients welcome",
  "Fully insured for your peace of mind",
  "Eco-conscious cleaning solutions",
  "Satisfaction-driven results every visit",
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#3b82f6]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection variant="slide">
            <p className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-3">
              Why Prestige Polish
            </p>
            <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Built on <span className="text-neon-gradient">Experience</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Prestige Polish LLC brings over five years of hands-on expertise to every
              job. Our team has mastered the art of pressure washing and mobile auto care
              — delivering showroom-level results with professional, fully insured service.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-[#00f0ff] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#gallery-house"
                className="text-sm text-[#3b82f6] hover:underline"
              >
                House washing gallery →
              </a>
              <a
                href="#gallery-car"
                className="text-sm text-[#00f0ff] hover:underline"
              >
                Carwash gallery →
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} variant="scale">
            <div className="space-y-6">
              <GlowCard className="rounded-2xl p-8 border-l-4 border-l-[#00f0ff]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00f0ff]/10">
                    <Clock className="h-6 w-6 text-[#00f0ff]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-white">
                      Availability
                    </h3>
                    <p className="text-xs text-slate-500">Always ready when you are</p>
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl font-[family-name:var(--font-orbitron)] text-neon-gradient font-semibold">
                  7 Days a Week
                </p>
                <p className="mt-2 text-xl text-white font-medium">7:00 AM — 7:00 PM</p>
                <p className="mt-3 text-slate-400 text-sm">
                  Book mornings, afternoons, or evenings — we work around your schedule.
                </p>
              </GlowCard>

              <GlowCard className="rounded-2xl p-8 border-l-4 border-l-[#a855f7]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a855f7]/10">
                    <Briefcase className="h-6 w-6 text-[#a855f7]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-white">
                      Industry Experience
                    </h3>
                    <p className="text-xs text-slate-500">Proven track record</p>
                  </div>
                </div>
                <p className="text-4xl font-[family-name:var(--font-orbitron)] font-bold text-white">
                  5<span className="text-[#a855f7]">+</span>{" "}
                  <span className="text-2xl text-slate-400 font-normal">Years</span>
                </p>
                <p className="mt-3 text-slate-400 text-sm">
                  Hands-on expertise in pressure washing and mobile detailing — not just
                  promises, but polished results.
                </p>
              </GlowCard>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} variant="fade" className="mt-16">
          <GlowCard className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <Calendar className="h-8 w-8 text-[#00f0ff] shrink-0" />
            <p className="text-slate-300">
              <span className="text-white font-semibold">Available 7 days a week</span>
              {" "}— from{" "}
              <span className="text-[#00f0ff] font-[family-name:var(--font-orbitron)]">
                7:00 AM to 7:00 PM
              </span>
              . Same-week bookings welcome.
            </p>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
