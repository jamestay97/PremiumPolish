"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PowerWasherCursor from "./PowerWasherCursor";
import { useIsMobile } from "@/hooks/useIsMobile";
/** Outdoor wood deck — local copy for reliable loading */
export const DEFAULT_CLEAN_IMAGE = "/images/power-wash/wood-deck.jpg";
export const DEFAULT_DIRTY_IMAGE = "/images/power-wash/wood-deck.jpg";
export const FALLBACK_WASH_IMAGE = "/images/power-wash/driveway.jpg";

interface PowerWashHeroProps {
  cleanSrc?: string;
  dirtySrc?: string;
  brushRadius?: number;
  className?: string;
}

/** Match CSS object-cover + object-center for pixel-aligned layers */
function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number
) {
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const boxRatio = width / height;

  let drawWidth: number;
  let drawHeight: number;
  let offsetX: number;
  let offsetY: number;

  if (imgRatio > boxRatio) {
    drawHeight = height;
    drawWidth = height * imgRatio;
    offsetX = (width - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = width;
    drawHeight = width / imgRatio;
    offsetX = 0;
    offsetY = (height - drawHeight) / 2;
  }

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

function fitLogoFontSize(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
): number {
  const maxWidth = width * 0.86;
  const maxHeight = height * 0.34;
  let fontSize = Math.min(width * 0.09, height * 0.22, 80);

  const prestige = "PRESTIGE";
  const polish = "POLISH";

  for (let i = 0; i < 24 && fontSize > 18; i++) {
    ctx.font = `700 ${fontSize}px Orbitron, sans-serif`;
    const iconSize = fontSize * 0.92;
    const gap = fontSize * 0.28;
    const totalWidth =
      iconSize + gap + ctx.measureText(prestige).width + ctx.measureText(polish).width;
    const totalHeight = fontSize * 1.5;

    if (totalWidth <= maxWidth && totalHeight <= maxHeight) return fontSize;
    fontSize *= 0.9;
  }

  return fontSize;
}

async function ensureOrbitronFont(size: number) {
  try {
    await document.fonts.load(`700 ${Math.round(size)}px Orbitron`);
  } catch {
    /* fall back to sans-serif */
  }
}

function drawDropletIcon(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  fill: string,
  glow?: string
) {
  ctx.save();
  if (glow) {
    ctx.shadowColor = glow;
    ctx.shadowBlur = size * 0.45;
  }
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(cx, cy - size * 0.5);
  ctx.bezierCurveTo(
    cx + size * 0.45,
    cy - size * 0.12,
    cx + size * 0.42,
    cy + size * 0.34,
    cx,
    cy + size * 0.46
  );
  ctx.bezierCurveTo(
    cx - size * 0.42,
    cy + size * 0.34,
    cx - size * 0.45,
    cy - size * 0.12,
    cx,
    cy - size * 0.5
  );
  ctx.fill();
  ctx.restore();
}

/** Large PRESTIGEPOLISH mark — clean layer vs grimy dirty layer */
function drawBrandLogo(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  variant: "clean" | "dirty"
) {
  const fontSize = fitLogoFontSize(ctx, width, height);
  const iconSize = fontSize * 0.92;
  const centerY = height * 0.46;
  const gap = fontSize * 0.28;

  ctx.save();
  ctx.font = `700 ${fontSize}px Orbitron, sans-serif`;
  ctx.textBaseline = "middle";

  const prestige = "PRESTIGE";
  const polish = "POLISH";
  const prestigeWidth = ctx.measureText(prestige).width;
  const polishWidth = ctx.measureText(polish).width;
  const totalWidth = iconSize + gap + prestigeWidth + polishWidth;
  const textX = width / 2 - totalWidth / 2 + iconSize + gap;
  const iconCx = textX - gap - iconSize / 2;

  if (variant === "clean") {
    drawDropletIcon(ctx, iconCx, centerY, iconSize, "#9333ea", "#9333ea");
    ctx.textAlign = "left";
    ctx.shadowColor = "rgba(0, 0, 0, 0.65)";
    ctx.shadowBlur = fontSize * 0.14;
    ctx.shadowOffsetY = fontSize * 0.04;
    ctx.fillStyle = "#ffffff";
    ctx.fillText(prestige, textX, centerY);
    ctx.shadowColor = "rgba(147, 51, 234, 0.55)";
    ctx.shadowBlur = fontSize * 0.22;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle = "#9333ea";
    ctx.fillText(polish, textX + prestigeWidth, centerY);
  } else {
    drawDropletIcon(ctx, iconCx, centerY, iconSize, "#4a5548");
    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(68, 58, 44, 0.94)";
    ctx.fillText(prestige, textX, centerY);
    ctx.fillStyle = "rgba(38, 78, 52, 0.96)";
    ctx.fillText(polish, textX + prestigeWidth, centerY);

    const pad = fontSize * 0.45;
    const boxX = width / 2 - totalWidth / 2 - pad;
    const boxY = centerY - fontSize * 0.72;
    const boxW = totalWidth + pad * 2;
    const boxH = fontSize * 1.45;

    ctx.fillStyle = "rgba(82, 68, 48, 0.35)";
    ctx.fillRect(boxX, boxY, boxW, boxH);

    for (let i = 0; i < 18; i++) {
      const sx = boxX + Math.random() * boxW;
      const sy = boxY + Math.random() * boxH;
      const sr = 5 + Math.random() * 16;
      const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
      g.addColorStop(0, "rgba(28, 26, 20, 0.55)");
      g.addColorStop(1, "rgba(28, 26, 20, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 8; i++) {
      const sx = boxX + Math.random() * boxW;
      const sy = boxY + Math.random() * boxH;
      const sr = 8 + Math.random() * 22;
      const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
      g.addColorStop(0, "rgba(35, 95, 48, 0.45)");
      g.addColorStop(1, "rgba(35, 95, 48, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();
}

/** Wood grime: visible mold & stains without crushing brightness */
function applyGrimeOverlay(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Light weathering wash — keeps wood tone visible
  ctx.fillStyle = "rgba(90, 75, 55, 0.18)";
  ctx.fillRect(0, 0, width, height);

  // Gray weathered patches (sun-bleached + dirty wood)
  for (let i = 0; i < 55; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = 20 + Math.random() * 70;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${110 + Math.random() * 30}, ${95 + Math.random() * 25}, ${70 + Math.random() * 20}, ${0.28 + Math.random() * 0.22})`);
    g.addColorStop(1, "rgba(110, 95, 70, 0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Green algae / mildew — obvious on wood, lighter than before
  for (let i = 0; i < 55; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = 14 + Math.random() * 50;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${30 + Math.random() * 25}, ${90 + Math.random() * 40}, ${45 + Math.random() * 25}, ${0.35 + Math.random() * 0.35})`);
    g.addColorStop(0.6, `rgba(40, 100, 50, ${0.15 + Math.random() * 0.15})`);
    g.addColorStop(1, "rgba(40, 100, 50, 0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Dark mold specks (black dots between boards)
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = 4 + Math.random() * 18;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(30, 28, 22, ${0.45 + Math.random() * 0.3})`);
    g.addColorStop(1, "rgba(30, 28, 22, 0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Subtle grit
  const noiseSize = 128;
  const noise = document.createElement("canvas");
  noise.width = noiseSize;
  noise.height = noiseSize;
  const nCtx = noise.getContext("2d");
  if (nCtx) {
    const imgData = nCtx.createImageData(noiseSize, noiseSize);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = Math.random() * 255;
      imgData.data[i] = v * 0.4;
      imgData.data[i + 1] = v * 0.35;
      imgData.data[i + 2] = v * 0.25;
      imgData.data[i + 3] = Math.random() * 45 + 15;
    }
    nCtx.putImageData(imgData, 0, 0);
    ctx.globalCompositeOperation = "multiply";
    ctx.globalAlpha = 0.45;
    const pattern = ctx.createPattern(noise, "repeat");
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, width, height);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
  }

  // Water / tannin streaks along grain
  ctx.globalAlpha = 0.12;
  for (let i = 0; i < 14; i++) {
    const y = Math.random() * height;
    const h = 2 + Math.random() * 6;
    ctx.fillStyle = `rgba(70, 55, 35, 0.7)`;
    ctx.fillRect(0, y, width, h);
  }
  ctx.globalAlpha = 1;

  // Soft edge vignette only
  const vig = ctx.createRadialGradient(
    width / 2,
    height / 2,
    height * 0.35,
    width / 2,
    height / 2,
    height * 0.9
  );
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(0,0,0,0.18)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, width, height);
}

export default function PowerWashHero({
  cleanSrc = DEFAULT_CLEAN_IMAGE,
  dirtySrc = DEFAULT_DIRTY_IMAGE,
  brushRadius = 52,
  className = "",
}: PowerWashHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanCanvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const dirtyBitmap = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useIsMobile();

  const [ready, setReady] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false, active: false });

  const getCanvasPoint = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }, []);

  const updateCursorPos = useCallback((clientX: number, clientY: number, active: boolean) => {
    const container = containerRef.current;
    if (!container || isMobile) return;
    const rect = container.getBoundingClientRect();
    setCursor({
      x: clientX - rect.left,
      y: clientY - rect.top,
      visible: true,
      active,
    });
  }, [isMobile]);

  const loadImage = useCallback((src: string) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      if (src.startsWith("http")) {
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
      }
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  }, []);

  const buildDirtyBitmap = useCallback(
    async (width: number, height: number, img: HTMLImageElement) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const ctx = offscreen.getContext("2d");
      if (!ctx) return null;

      ctx.filter =
        "brightness(0.88) contrast(1.08) saturate(0.78) sepia(0.08)";
      drawImageCover(ctx, img, width, height);
      ctx.filter = "none";
      applyGrimeOverlay(ctx, width, height);
      return offscreen;
    },
    []
  );

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number, dpr: number) => {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return ctx;
    },
    []
  );

  const paintLayers = useCallback(async () => {
    const canvas = canvasRef.current;
    const cleanCanvas = cleanCanvasRef.current;
    const container = containerRef.current;
    if (!canvas || !cleanCanvas || !container) return;

    const { width, height } = container.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const dirtyCtx = setupCanvas(canvas, width, height, dpr);
    const cleanCtx = setupCanvas(cleanCanvas, width, height, dpr);
    if (!dirtyCtx || !cleanCtx) return;

    let cleanImg: HTMLImageElement | null = null;
    let dirtyImg: HTMLImageElement | null = null;

    try {
      cleanImg = await loadImage(cleanSrc);
    } catch {
      if (cleanSrc !== FALLBACK_WASH_IMAGE) {
        try {
          cleanImg = await loadImage(FALLBACK_WASH_IMAGE);
        } catch {
          cleanImg = null;
        }
      }
    }

    if (!cleanImg) {
      setReady(true);
      return;
    }

    if (dirtySrc === cleanSrc) {
      dirtyImg = cleanImg;
    } else {
      try {
        dirtyImg = await loadImage(dirtySrc);
      } catch {
        dirtyImg = cleanImg;
      }
    }

    cleanCtx.clearRect(0, 0, width, height);
    drawImageCover(cleanCtx, cleanImg, width, height);

    await document.fonts.ready;
    await ensureOrbitronFont(Math.min(width * 0.09, height * 0.22, 80));
    drawBrandLogo(cleanCtx, width, height, "clean");

    const bitmap = await buildDirtyBitmap(width, height, dirtyImg);
    dirtyBitmap.current = bitmap;
    if (dirtyBitmap.current) {
      const bitmapCtx = dirtyBitmap.current.getContext("2d");
      if (bitmapCtx) {
        drawBrandLogo(bitmapCtx, width, height, "dirty");
      }
      dirtyCtx.clearRect(0, 0, width, height);
      dirtyCtx.drawImage(dirtyBitmap.current, 0, 0, width, height);
    }

    setReady(true);
    lastPoint.current = null;
  }, [buildDirtyBitmap, cleanSrc, dirtySrc, loadImage, setupCanvas]);

  const stampBrush = useCallback(
    (x: number, y: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushRadius);
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
      gradient.addColorStop(0.55, "rgba(0, 0, 0, 0.85)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
    [brushRadius]
  );

  const drawLine = useCallback(
    (from: { x: number; y: number }, to: { x: number; y: number }) => {
      const dist = Math.hypot(to.x - from.x, to.y - from.y);
      const steps = Math.max(1, Math.ceil(dist / (brushRadius * 0.35)));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        stampBrush(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
      }
    },
    [brushRadius, stampBrush]
  );

  const eraseAt = useCallback(
    (clientX: number, clientY: number) => {
      const point = getCanvasPoint(clientX, clientY);
      if (!point) return;

      if (lastPoint.current) {
        drawLine(lastPoint.current, point);
      } else {
        stampBrush(point.x, point.y);
      }
      lastPoint.current = point;
      setHintVisible(false);
    },
    [drawLine, getCanvasPoint, stampBrush]
  );

  useEffect(() => {
    paintLayers();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      paintLayers();
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [paintLayers, cleanSrc, dirtySrc]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    lastPoint.current = null;
    canvasRef.current?.setPointerCapture(e.pointerId);
    updateCursorPos(e.clientX, e.clientY, true);
    eraseAt(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const spraying = e.pointerType === "mouse" || isDrawing.current;
    updateCursorPos(e.clientX, e.clientY, spraying);

    if (e.pointerType === "mouse") {
      eraseAt(e.clientX, e.clientY);
      return;
    }
    if (isDrawing.current) {
      eraseAt(e.clientX, e.clientY);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawing.current = false;
    lastPoint.current = null;
    updateCursorPos(e.clientX, e.clientY, false);
    try {
      canvasRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawing.current = false;
    lastPoint.current = null;
    setCursor((c) => ({ ...c, visible: false, active: false }));
    try {
      canvasRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  const resetWash = () => {
    paintLayers();
    setHintVisible(true);
  };

  return (
    <div className={`power-wash-hero ${className}`}>
      <div
        ref={containerRef}
        className="power-wash-hero__frame relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[min(70vh,520px)] overflow-hidden rounded-none sm:rounded-2xl border-y sm:border border-[rgba(147,51,234,0.15)] shadow-[0_0_40px_rgba(147,51,234,0.08)]"
      >
        <canvas
          ref={cleanCanvasRef}
          className="absolute inset-0 h-full w-full select-none pointer-events-none"
          aria-hidden
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full touch-none select-none power-wash-cursor"
          aria-label="Interactive power washing demo. Drag to reveal the clean surface underneath."
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onPointerCancel={handlePointerLeave}
        />

        {!isMobile && (
          <PowerWasherCursor
            x={cursor.x}
            y={cursor.y}
            visible={cursor.visible}
            active={cursor.active}
          />
        )}

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 glass rounded-full px-3 py-1 text-[10px] sm:text-xs uppercase tracking-widest text-gray-600 pointer-events-none z-20">
          Before
        </div>
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 glass rounded-full px-3 py-1 text-[10px] sm:text-xs uppercase tracking-widest text-[#9333ea] pointer-events-none z-20">
          After
        </div>

        {hintVisible && ready && (
          <div className="absolute inset-x-0 bottom-[10%] sm:bottom-[12%] flex justify-center pointer-events-none z-20 px-4">
            <p className="glass rounded-full px-4 py-2 text-xs sm:text-sm text-[#9333ea] animate-pulse">
              {isMobile ? "Drag to power wash →" : "Move the wand to power wash →"}
            </p>
          </div>
        )}

        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center bg-sky-200/80 pointer-events-none">
            <p className="text-sm text-gray-600">Loading demo…</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-3 px-1 max-w-6xl mx-auto w-full">
        <p className="text-xs text-gray-600">
          Simulated power wash — drag across the surface to reveal the clean layer.
        </p>
        <button
          type="button"
          onClick={resetWash}
          className="text-xs text-[#9333ea] hover:underline shrink-0 ml-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
