"use client";

import AnimatedSection from "./AnimatedSection";
import ImagePlaceholder from "./ImagePlaceholder";
import GlowCard from "./effects/GlowCard";
import MagneticButton from "./effects/MagneticButton";
import {
  SprayCan,
  Car,
  Building2,
  Home,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: SprayCan,
    title: "Pressure Washing",
    description:
      "High-powered precision cleaning for driveways, patios, siding, decks, and commercial exteriors. We blast away grime with cutting-edge equipment.",
    tags: ["Residential", "Commercial"],
    imagePath: "/images/pressure-washing.jpg",
    imageAlt: "Pressure washing service in action",
  },
  {
    icon: Car,
    title: "Mobile Carwash",
    description:
      "Full-service detailing brought to your doorstep. Exterior wash, interior vacuum, tire shine, and premium finish — wherever you are.",
    tags: ["Residential", "Commercial"],
    imagePath: "/images/mobile-carwash.jpg",
    imageAlt: "Mobile carwash service",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0c0e14] to-[#050508]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-10 sm:mb-16" variant="fade">
          <p className="text-[#00f0ff] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl sm:text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-neon-gradient">Services</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Professional cleaning solutions for homes and businesses across the Bronx
            and beyond. Residential and commercial — we handle it all.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.15} variant="scale">
              <GlowCard className="rounded-2xl overflow-hidden group h-full flex flex-col">
                <div className="relative h-48 sm:h-56 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <ImagePlaceholder
                    src={service.imagePath}
                    alt={service.imageAlt}
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] to-transparent z-20 pointer-events-none" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30">
                      <service.icon className="h-6 w-6 text-[#00f0ff]" />
                    </div>
                    <div className="flex gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-xs text-slate-400 glass rounded-full px-2 py-1"
                        >
                          {tag === "Residential" ? (
                            <Home className="h-3 w-3 text-[#a855f7]" />
                          ) : (
                            <Building2 className="h-3 w-3 text-[#3b82f6]" />
                          )}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <MagneticButton className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm text-[#00f0ff] hover:gap-3 transition-all"
                      data-cursor="pointer"
                    >
                      Request this service
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </MagneticButton>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} variant="slide" className="mt-12">
          <GlowCard className="rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white mb-3">
                Residential &amp; Commercial
              </h3>
              <p className="text-slate-400 leading-relaxed">
                From single-family homes to office complexes, retail storefronts, and
                fleet vehicles — Prestige Polish scales to your needs with the same
                premium standard every time.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <Home className="h-10 w-10 text-[#a855f7] mx-auto mb-2" />
                <span className="text-sm text-slate-300">Residential</span>
              </div>
              <div className="text-center">
                <Building2 className="h-10 w-10 text-[#3b82f6] mx-auto mb-2" />
                <span className="text-sm text-slate-300">Commercial</span>
              </div>
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
