import { profile } from "@/images"; // Ensure the image path is correct
import ResponsiveImage from "./ResponsiveImage";

interface AvatarPropsType {
  className?: string;
  width?: string;
  height?: string;
  name?: string;
  id?: string;
}

export default function Avatar({
  className = "rounded-full",
  width = "60px",
  height = "60px",
  name = "Jhon doe",
  id = "#00210",
}: AvatarPropsType) {
  return (
    <ResponsiveImage
      src={profile}
      alt="Profile icon"
      width={width}
      height={height}
      priority={true}
      className={`${className} rounded-full`}
    />
  );
}
