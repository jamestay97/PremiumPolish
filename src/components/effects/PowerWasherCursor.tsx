"use client";

import type { CSSProperties } from "react";

interface PowerWasherCursorProps {
  x: number;
  y: number;
  visible: boolean;
  active: boolean;
}

/** Nozzle tip in SVG viewBox coordinates — cursor hotspot */
const NOZZLE_X = 115;
const NOZZLE_Y = 45;

/** Realistic pressure-washer gun + fan spray water */
export default function PowerWasherCursor({
  x,
  y,
  visible,
  active,
}: PowerWasherCursorProps) {
  if (!visible) return null;

  return (
    <div
      className="pw-wand-cursor pointer-events-none absolute z-30 top-0 left-0 will-change-transform"
      style={{
        transform: `translate(calc(${x}px - ${NOZZLE_X}px), calc(${y}px - ${NOZZLE_Y}px))`,
      }}
      aria-hidden
    >
      <div className="pw-wand-pivot">
        {/* Fan spray anchored to nozzle tip */}
        <div className={`pw-real-spray ${active ? "pw-real-spray--active" : ""}`}>
          <span className="pw-fan-spray" />
          <span className="pw-fan-spray pw-fan-spray--inner" />
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="pw-mist-particle"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>

        {/* Pressure washer gun — side profile */}
        <svg
          width="118"
          height="96"
          viewBox="0 0 118 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pw-wand-svg drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
        >
          {/* Hose */}
          <path
            d="M18 68 C8 72 4 80 6 88"
            stroke="#1a1a1a"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M18 68 C8 72 4 80 6 88"
            stroke="#333"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Pistol grip */}
          <path
            d="M22 38 L22 58 C22 66 28 72 34 72 L38 72 C44 72 48 66 48 58 L48 48 L22 38 Z"
            fill="#1f1f1f"
            stroke="#0a0a0a"
            strokeWidth="1.2"
          />
          <path
            d="M26 44 L26 58 C26 62 29 65 33 65 L36 65 C39 65 42 62 42 58 L42 50 L26 44 Z"
            fill="#2d2d2d"
          />

          {/* Trigger */}
          <path
            d="M30 52 L34 62 L31 64 L26 54 Z"
            fill="#e63946"
            stroke="#b91c1c"
            strokeWidth="0.8"
            className={active ? "pw-trigger--pulled" : ""}
          />

          {/* Gun body / pump housing */}
          <rect x="44" y="34" width="28" height="22" rx="4" fill="#f5c518" stroke="#c9a006" strokeWidth="1.2" />
          <rect x="47" y="37" width="22" height="6" rx="1" fill="#ffe066" opacity="0.5" />
          <circle cx="58" cy="45" r="3" fill="#1a1a1a" opacity="0.25" />

          {/* Wand / lance */}
          <rect x="70" y="41" width="36" height="8" rx="2" fill="#b0b8c4" stroke="#6b7280" strokeWidth="1" />
          <rect x="72" y="42.5" width="32" height="2" rx="0.5" fill="#e5e7eb" opacity="0.6" />

          {/* Nozzle assembly */}
          <rect x="104" y="39" width="8" height="12" rx="1.5" fill="#71717a" stroke="#3f3f46" strokeWidth="1" />
          <path d="M112 42 L116 45 L112 48 Z" fill="#a1a1aa" stroke="#52525b" strokeWidth="0.8" />

          {/* Nozzle tip highlight */}
          <circle cx="115" cy="45" r="1.5" fill="#fff" className="pw-nozzle-glow" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}
