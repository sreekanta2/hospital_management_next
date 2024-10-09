import Avatar from "@/components/Avatar";
import IconWrapper from "@/components/IconWrapper";
import { profile } from "@/images";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function InvoiceCard() {
  return (
    <div className="w-full flex justify-between items-center p-2 rounded-md hover:bg-slate-100 dark:hover:bg-gray-700 transition-all duration-500">
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
        <p className="text-gray-500">Amount</p>
        <p className="w-fit px-2 rounded-lg text-sm font-sans flex justify-center">
          $300
        </p>
      </div>

      <div className="flex gap-4">
        <IconWrapper
          icon={Eye}
          strokeWidth={2}
          className="hover:bg-[#0EA5E9] hover:text-white"
        />
      </div>
    </div>
  );
}
