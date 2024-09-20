import Image, { StaticImageData } from "next/image";

interface ResponsiveImageProps {
  src: string | StaticImageData; // Support both string and StaticImageData types
  alt: string;
  width: number;
  height: number;
  sizes?: string; // Optional custom sizes for responsive behavior
  className?: string; // For custom styling
  priority?: boolean; // Optional for preloading important images
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  priority = false,
}: ResponsiveImageProps) {
  return (
    <Image
      src={src} // Now supports both imported images and URLs
      alt={alt}
      width={width || 500}
      height={height || 300}
      sizes={sizes}
      className={className}
      priority={priority}
      layout="responsive" // Automatically adjusts based on width and height
      quality={75} // Adjust image quality if necessary (default is 75)
    />
  );
}
