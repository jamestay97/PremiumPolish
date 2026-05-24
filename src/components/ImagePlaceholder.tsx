"use client";

import { useEffect, useRef, useState } from "react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  hint?: string;
  priority?: boolean;
}

export default function ImagePlaceholder({
  src,
  alt,
  className = "",
  hint,
  priority = false,
}: ImagePlaceholderProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-sky-100/40 ${className}`}>
      {failed ? (
        <div className="img-placeholder absolute inset-0 flex items-center justify-center">
          <span className="px-4 text-center">
            {hint ?? (
              <>
                Add your photo: <code className="text-[#9333ea]">{src}</code>
              </>
            )}
          </span>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
