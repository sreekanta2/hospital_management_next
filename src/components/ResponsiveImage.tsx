import Image, { StaticImageData } from "next/image";
import React from "react";

interface ResponsiveImageProps {
  src: StaticImageData | string; // The source of the image
  alt: string; // The alt text for the image
  width?: string; // Optional: Custom width for the parent container (default: '100%')
  height?: string; // Optional: Custom height for the parent container (default: '256px')
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"; // Optional: Custom object-fit value for the image (default: 'cover')
  priority?: boolean;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width = "100%", // default width 100%
  height = "256px", // default height 256px
  objectFit = "cover", // default objectFit is 'cover'
  priority = true,
  className = "", // default priority false
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        priority={priority}
        style={{ objectFit }} // Apply the object-fit style based on the prop
      />
    </div>
  );
};

export default ResponsiveImage;
