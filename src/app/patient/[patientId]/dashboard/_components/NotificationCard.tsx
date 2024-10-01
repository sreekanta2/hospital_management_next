import Avatar from "@/components/Avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { profile } from "@/images";

import { CalendarCheck, Clock, Eye, MessageCircle, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function NotificationCard() {
  return (
    <div className=" w-full cursor-pointer p-1 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800">
      <div className="flex justify-between ">
        <div className="flex gap-3 items-center h-12  p-2">
          <div
            className={`w-10 h-10  border overflow-hidden flex items-center justify-center rounded-md`}
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
            <h1 className="text-sm font-medium">
              fkdfjksdjfjdflksdflkdfkfgfgfgf
            </h1>
            <h1 className="text-xs text-gray-500">2 days ago</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
