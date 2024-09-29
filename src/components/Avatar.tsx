import Image from "next/image";
import { profile } from "@/images"; // Ensure the image path is correct

interface AvatarPropsType {
  className?: string; // For custom styling, e.g., "rounded-full" or "border-2"
}

export default function Avatar({
  className = "rounded-full",
}: AvatarPropsType) {
  return (
    <div className="flex gap-3 items-center h-12  p-2">
      <div
        className={`w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center ${className}`}
      >
        <Image
          src={profile}
          alt="Profile icon"
          width={40}
          height={40}
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-sm font-medium">Name</h1>
        <h1 className="text-xs text-gray-500">#00210</h1>
      </div>
    </div>
  );
}
