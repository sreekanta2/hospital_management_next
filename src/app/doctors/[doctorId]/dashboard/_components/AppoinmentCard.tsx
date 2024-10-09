import Avatar from "@/components/Avatar";
import IconWrapper from "@/components/IconWrapper";
import { profile } from "@/images";

import { Check, X } from "lucide-react";
import Link from "next/link";
export default function AppoinmentCard() {
  return (
    <div className="w-full flex justify-between items-center p-2 rounded-md hover:bg-slate-100 dark:hover:bg-gray-800 transition-all duration-500">
      <div className="flex gap-3 items-start">
        <Avatar
          src={profile}
          alt="profile"
          className="rounded-lg"
          width="50px"
          height="50px"
        />
        <Link href={`#`} className="flex flex-col items-start">
          <h1 className="text-sm font-semibold">Jhon Doe</h1>
          <p className="text-gray-500">1234567890</p>
        </Link>
      </div>
      <div>
        <p className="text-gray-500">Mon, 12:00 PM</p>
        <p className="  bg-green-600 w-fit px-2 rounded-lg text-white text-sm font-sans flex justify-center">
          general
        </p>
      </div>

      <div className="flex gap-4">
        <IconWrapper
          icon={Check}
          strokeWidth={2}
          className="hover:bg-green-700"
        />
        <IconWrapper icon={X} strokeWidth={2} className="hover:bg-green-700 " />
      </div>
    </div>
  );
}
