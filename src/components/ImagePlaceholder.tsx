interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  hint?: string;
}

export default function ImagePlaceholder({
  src,
  alt,
  className = "",
  hint,
}: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover z-10"
        onError={(e) => {
          e.currentTarget.style.visibility = "hidden";
        }}
      />
      <div className="img-placeholder absolute inset-0 w-full h-full">
        <span className="px-4">
          {hint ?? (
            <>
              Add your photo: <code className="text-[#00f0ff]">{src}</code>
            </>
          )}
        </span>
      </div>
    </div>
  );
}
