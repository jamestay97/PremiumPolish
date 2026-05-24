"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import ParticleBackground from "./ParticleBackground";

export { ParticleBackground };

export default function SiteEffects() {
  const isMobile = useIsMobile();

  /* Skip canvas particles on mobile — saves battery and improves scroll performance */
  if (isMobile) return null;

  return <ParticleBackground />;
}
