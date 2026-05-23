"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImagePlaceholder from "../ImagePlaceholder";
import GlowCard from "./GlowCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Fence pressure washing before and after",
    title: "Fence Restoration",
    caption: "Before & after — mold and weathering removed",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Driveway pressure washing before and after",
    title: "Driveway Revival",
    caption: "Dramatic concrete transformation",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Driveway surface cleaner in action",
    title: "Surface Cleaner Pro",
    caption: "Commercial-grade equipment at work",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Residential exterior cleaning",
    title: "Full Exterior Care",
    caption: "Homes, driveways, and fences",
  },
  {
    src: "/images/hero-work.jpg",
    alt: "Premium mobile carwash foam treatment",
    title: "Mobile Carwash",
    caption: "Snow-foam premium detailing",
  },
];

function GalleryCard({ item }: { item: (typeof galleryItems)[0] }) {
  return (
    <article className="w-[min(88vw,340px)] sm:w-[min(75vw,380px)] lg:w-[min(85vw,420px)] shrink-0 snap-center">
      <GlowCard className="rounded-2xl overflow-hidden h-full">
        <ImagePlaceholder src={item.src} alt={item.alt} className="h-52 sm:h-64 lg:h-72 w-full" />
        <div className="p-4 sm:p-5 border-t border-[rgba(0,240,255,0.1)]">
          <h3 className="font-[family-name:var(--font-orbitron)] text-base sm:text-lg text-white">
            {item.title}
          </h3>
          <p className="text-slate-400 text-sm mt-1">{item.caption}</p>
        </div>
      </GlowCard>
    </article>
  );
}

function GalleryHeader() {
  return (
    <div className="px-4 sm:px-6 mb-6 sm:mb-8">
      <p className="text-[#00f0ff] text-xs sm:text-sm font-medium tracking-widest uppercase mb-2 text-center">
        Before &amp; After
      </p>
      <h2 className="font-[family-name:var(--font-orbitron)] text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
        Our <span className="text-neon-gradient">Results</span>
      </h2>
    </div>
  );
}

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  if (reduced) {
    return (
      <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <GalleryHeader />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {galleryItems.map((item) => (
              <GalleryCard key={item.src} item={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery">
      <div className="py-16 sm:py-20 lg:hidden">
        <div className="mx-auto max-w-6xl">
          <GalleryHeader />
          <div className="overflow-x-auto overscroll-x-contain snap-x snap-mandatory scrollbar-hide flex gap-4 px-4 sm:px-6 pb-2">
            {galleryItems.map((item) => (
              <GalleryCard key={`m-${item.src}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div ref={targetRef} className="relative h-[280vh] hidden lg:block">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <GalleryHeader />
          <motion.div style={{ x }} className="flex gap-6 px-12 w-max">
            {galleryItems.map((item) => (
              <GalleryCard key={`d-${item.src}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
