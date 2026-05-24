"use client";

import { motion } from "framer-motion";
import { useCallback, useId, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface WaterDropletProps {
  className?: string;
}

export default function WaterDroplet({ className = "" }: WaterDropletProps) {
  const reduced = useReducedMotion();
  const gradId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const updateTilt = useCallback(
    (clientX: number, clientY: number, rect: DOMRect) => {
      if (reduced) return;
      const px = (clientX - rect.left) / rect.width - 0.5;
      const py = (clientY - rect.top) / rect.height - 0.5;
      setTilt({
        rotateX: py * -22,
        rotateY: px * 26,
        scale: 1.1,
      });
    },
    [reduced]
  );

  const resetTilt = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      updateTilt(e.clientX, e.clientY, rect);
    },
    [updateTilt]
  );

  return (
    <div
      className={`relative flex h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52 items-center justify-center touch-none ${className}`}
      style={{ perspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerUp={resetTilt}
      onPointerCancel={resetTilt}
      role="img"
      aria-label="Water droplet"
    >
      <div
        className="absolute inset-3 rounded-full bg-[#9333ea]/20 blur-2xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 h-2 w-16 rounded-full bg-[#9333ea]/30 blur-md pointer-events-none"
        aria-hidden
      />

      <motion.div
        animate={reduced ? undefined : { y: [0, -6, 0] }}
        transition={
          reduced ? undefined : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative z-10 flex h-[82%] w-[70%] items-center justify-center"
      >
        <motion.div
          className="h-full w-full flex items-center justify-center"
          animate={
            reduced
              ? undefined
              : {
                  rotateX: tilt.rotateX,
                  rotateY: tilt.rotateY,
                  scale: tilt.scale,
                }
          }
          transition={
            reduced ? undefined : { type: "spring", stiffness: 280, damping: 22 }
          }
          style={{ transformStyle: "preserve-3d" }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 150"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_24px_rgba(147,51,234,0.45)]"
            aria-hidden
          >
            <defs>
              <linearGradient id={`${gradId}-fill`} x1="20" y1="10" x2="100" y2="145">
                <stop offset="0%" stopColor="#a5f3fc" />
                <stop offset="40%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <radialGradient id={`${gradId}-shine`} cx="35%" cy="32%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>

            <path
              d="M60 12 C60 12 98 52 98 88 C98 118 82 142 60 148 C38 142 22 118 22 88 C22 52 60 12 60 12 Z"
              fill={`url(#${gradId}-fill)`}
            />
            <path
              d="M60 12 C60 12 98 52 98 88 C98 118 82 142 60 148 C38 142 22 118 22 88 C22 52 60 12 60 12 Z"
              fill={`url(#${gradId}-shine)`}
              opacity="0.55"
            />
            <ellipse cx="44" cy="50" rx="12" ry="8" fill="white" opacity="0.7" />
            <path
              d="M60 12 C60 12 98 52 98 88 C98 118 82 142 60 148 C38 142 22 118 22 88 C22 52 60 12 60 12 Z"
              fill="none"
              stroke="#67e8f9"
              strokeWidth="2"
              opacity="0.8"
            />
          </svg>
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-2 rounded-full border border-[#9333ea]/30 pointer-events-none"
        aria-hidden
      />
    </div>
  );
}
