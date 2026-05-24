"use client";

import AnimatedSection from "./AnimatedSection";
import GlowCard from "./effects/GlowCard";
import ImagePlaceholder from "./ImagePlaceholder";
import { featuredCarPhoto, featuredHousePhoto } from "@/data/gallery";
import { SprayCan, Car } from "lucide-react";

const featured = [
  {
    icon: SprayCan,
    accent: "#3b82f6",
    photo: featuredHousePhoto,
    label: "Pressure Washing",
  },
  {
    icon: Car,
    accent: "#9333ea",
    photo: featuredCarPhoto,
    label: "Mobile Carwash",
  },
];

export default function FeaturedShowcase() {
  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-8 sm:mb-12" variant="fade">
          <p className="text-[#9333ea] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Real Results, <span className="text-neon-gradient">Every Visit</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            From driveways and fences to full mobile detailing — see the difference
            Prestige Polish delivers.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {featured.map(({ icon: Icon, accent, photo, label }, index) => (
            <AnimatedSection key={photo.src} delay={index * 0.12} variant="scale">
              <GlowCard className="rounded-2xl overflow-hidden h-full">
                <div className="flex items-center gap-3 px-5 sm:px-6 pt-5 sm:pt-6 pb-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: `${accent}40`,
                      backgroundColor: `${accent}15`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accent }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest font-medium"
                      style={{ color: accent }}
                    >
                      {label}
                    </p>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-lg sm:text-xl font-bold text-gray-900">
                      {photo.title}
                    </h3>
                  </div>
                </div>
                <ImagePlaceholder
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10] w-full min-h-[220px] sm:min-h-[320px] lg:min-h-[380px]"
                  priority={index === 0}
                />
                <div className="px-5 sm:px-6 py-4 sm:py-5 border-t border-[rgba(147,51,234,0.1)]">
                  <p className="text-gray-600 text-sm sm:text-base">{photo.caption}</p>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
