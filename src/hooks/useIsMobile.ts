"use client";

import { useEffect, useState } from "react";

/** Matches Tailwind `lg` breakpoint (1024px) */
export function useIsMobile(breakpoint = 1024): boolean {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setMobile(mq.matches);
    const handler = () => setMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return mobile;
}
