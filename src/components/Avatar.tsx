import Image from "next/image";
import { profile } from "@/images"; // Ensure the image path is correct

export default function Avatar() {
  return (
    <div className="flex gap-2 items-start">
      <div className="w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center">
        <Image
          src={profile}
          alt="icon"
          width={40}
          height={40}
          priority={true}
        />
      </div>
      <div>
        <h1>name</h1>
        <h1>#00210</h1>
      </div>
    </div>
  );
}
