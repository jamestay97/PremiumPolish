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
  CalendarClock,
  Landmark,
  CarFront,
  Eraser,
  Trash2,
  ParkingSquare,
  type LucideIcon,
} from "lucide-react";

const services = [
  {
    icon: SprayCan,
    title: "Pressure Washing",
    description:
      "High-powered precision cleaning for driveways, patios, siding, decks, and commercial exteriors. We blast away grime with cutting-edge equipment.",
    tags: ["Residential", "Commercial"],
    imagePath: "/images/house-washing/house-3.jpeg",
    imageAlt: "Pressure washing service in action",
    galleryHref: "#gallery-house",
    galleryLabel: "View house washing photos",
  },
  {
    icon: Car,
    title: "Mobile Carwash",
    description:
      "Full-service detailing brought to your doorstep. Exterior wash, interior vacuum, tire shine, and premium finish — wherever you are.",
    tags: ["Residential", "Commercial"],
    imagePath: "/images/car-washing/car-2.jpeg",
    imageAlt: "Jeep covered in snow foam during mobile carwash",
    galleryHref: "#gallery-car",
    galleryLabel: "View carwash photos",
  },
];

const commercialServices: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: CalendarClock,
    title: "Monthly Sidewalk Washing",
    description:
      "Recurring scheduled service to keep storefront walkways clean, safe, and welcoming for customers year-round.",
  },
  {
    icon: Landmark,
    title: "ATM Area Cleaning",
    description:
      "Spotless, professional ATM zones that build customer confidence and reflect well on your business.",
  },
  {
    icon: CarFront,
    title: "Drive-Thru Cleaning",
    description:
      "Remove grease, grime, and buildup from high-traffic drive-thru lanes, menus, and surrounding pavement.",
  },
  {
    icon: Eraser,
    title: "Gum Removal",
    description:
      "Stubborn gum and sticky stains lifted from sidewalks, entryways, and other paved surfaces.",
  },
  {
    icon: Trash2,
    title: "Dumpster Pad Cleaning",
    description:
      "Deep sanitizing and deodorizing of dumpster pads to control odors and meet cleanliness standards.",
  },
  {
    icon: ParkingSquare,
    title: "Parking Lot Washing",
    description:
      "Full-lot pressure washing to remove oil stains, dirt, and debris for a sharp first impression.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-200 to-sky-100" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-10 sm:mb-16" variant="fade">
          <p className="text-[#9333ea] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-neon-gradient">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Professional cleaning solutions for homes and businesses across Long Island,
            Brooklyn, Queens, and surrounding areas.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-200 to-transparent z-20 pointer-events-none" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9333ea]/10 border border-[#9333ea]/30">
                      <service.icon className="h-6 w-6 text-[#9333ea]" />
                    </div>
                    <div className="flex gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-xs text-gray-600 glass rounded-full px-2 py-1"
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

                  <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <MagneticButton className="mt-6">
                    <a
                      href={service.galleryHref}
                      className="inline-flex items-center gap-2 text-sm text-[#9333ea] hover:gap-3 transition-all"
                    >
                      {service.galleryLabel}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </MagneticButton>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25} variant="fade" className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[#3b82f6] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
              Commercial
            </p>
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Specialized <span className="text-neon-gradient">Services</span>
            </h3>
            <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Recurring and on-demand cleaning for retail, restaurants, banks, and
              property managers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {commercialServices.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.06} variant="scale">
                <GlowCard className="rounded-xl p-5 sm:p-6 h-full flex flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/25 mb-4">
                    <item.icon className="h-5 w-5 text-[#3b82f6]" />
                  </div>
                  <h4 className="font-[family-name:var(--font-orbitron)] text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 text-center">
            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-[#9333ea] hover:gap-3 transition-all"
              >
                Request a commercial quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </MagneticButton>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} variant="slide" className="mt-12">
          <GlowCard className="rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-gray-900 mb-3">
                Residential &amp; Commercial
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From single-family homes to office complexes, retail storefronts, and
                fleet vehicles — Prestige Polish scales to your needs with the same
                premium standard every time.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <Home className="h-10 w-10 text-[#a855f7] mx-auto mb-2" />
                <span className="text-sm text-gray-700">Residential</span>
              </div>
              <div className="text-center">
                <Building2 className="h-10 w-10 text-[#3b82f6] mx-auto mb-2" />
                <span className="text-sm text-gray-700">Commercial</span>
              </div>
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
