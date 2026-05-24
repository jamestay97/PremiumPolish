"use client";

import AnimatedSection from "./AnimatedSection";
import ImagePlaceholder from "./ImagePlaceholder";
import GlowCard from "./effects/GlowCard";
import { carWashingPhotos, houseWashingPhotos, type GalleryItem } from "@/data/gallery";
import { Car, SprayCan } from "lucide-react";

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="w-[min(88vw,300px)] sm:w-[min(70vw,320px)] shrink-0 snap-center">
      <GlowCard className="rounded-2xl overflow-hidden h-full">
        <ImagePlaceholder src={item.src} alt={item.alt} className="h-48 sm:h-56 w-full" />
        <div className="p-4 border-t border-[rgba(147,51,234,0.1)]">
          <h4 className="font-[family-name:var(--font-orbitron)] text-sm sm:text-base text-gray-900">
            {item.title}
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm mt-1">{item.caption}</p>
        </div>
      </GlowCard>
    </article>
  );
}

function GalleryRow({
  id,
  icon: Icon,
  label,
  title,
  accent,
  items,
  delay = 0,
}: {
  id: string;
  icon: typeof SprayCan;
  label: string;
  title: string;
  accent: string;
  items: GalleryItem[];
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay} variant="slide" className="mb-14 sm:mb-16 last:mb-0">
      <div id={id} className="scroll-mt-28">
        <div className="flex items-center gap-3 mb-5 px-1">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl border"
            style={{ borderColor: `${accent}40`, backgroundColor: `${accent}15` }}
          >
            <Icon className="h-5 w-5" style={{ color: accent }} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest" style={{ color: accent }}>
              {label}
            </p>
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl sm:text-2xl font-bold text-gray-900">
              {title}
            </h3>
          </div>
        </div>

        {/* Mobile & tablet: swipe */}
        <div className="lg:hidden -mx-4 sm:-mx-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scrollbar-hide flex gap-4 px-4 sm:px-6 pb-2">
          {items.map((item) => (
            <GalleryCard key={item.src} item={item} />
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-5">
          {items.map((item) => (
            <div key={item.src} className="min-w-0">
              <GlowCard className="rounded-2xl overflow-hidden h-full">
                <ImagePlaceholder src={item.src} alt={item.alt} className="h-52 w-full" />
                <div className="p-4 border-t border-[rgba(147,51,234,0.1)]">
                  <h4 className="font-[family-name:var(--font-orbitron)] text-base text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{item.caption}</p>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function WorkGallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-12 sm:mb-16" variant="fade">
          <p className="text-[#9333ea] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Before &amp; After <span className="text-neon-gradient">Gallery</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Real results from our house washing and mobile carwash services.
          </p>
        </AnimatedSection>

        <GalleryRow
          id="gallery-house"
          icon={SprayCan}
          label="House Washing"
          title="Pressure Washing"
          accent="#3b82f6"
          items={houseWashingPhotos}
        />

        <GalleryRow
          id="gallery-car"
          icon={Car}
          label="Mobile Carwash"
          title="Auto Detailing"
          accent="#9333ea"
          items={carWashingPhotos}
          delay={0.15}
        />
      </div>
    </section>
  );
}
