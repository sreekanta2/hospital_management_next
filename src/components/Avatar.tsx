import { profile } from "@/images"; // Ensure the image path is correct
import { StaticImageData } from "next/image";
import ResponsiveImage from "./ResponsiveImage";

interface AvatarPropsType {
  className?: string;
  width?: string;
  height?: string;
  src: string | StaticImageData;
  alt: string;
}

export default function Avatar({
  className = "rounded-full",
  width = "60px",
  height = "60px",
  src,
  alt = "Profile icon",
}: AvatarPropsType) {
  return (
    <ResponsiveImage
      src={src || profile}
      alt={alt}
      width={width}
      height={height}
      priority={true}
      className={`${className} rounded-full`}
    />
  );
}
