import Avatar from "@/components/Avatar";
import { Clock, Eye, MessageCircle, Video } from "lucide-react";
import React from "react";

export default function AppointmentCard() {
  return (
    <div className=" lg:max-w-80 shadow-lg p-4 rounded-lg dark:bg-gray-800">
      <div className="flex justify-between ">
        <Avatar />
        <Video
          className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
          size={40}
        />
      </div>

      <div className="border p-4 rounded-xl bg-gray-100 dark:bg-gray-950 dark:text-gray-300 mt-2">
        <div className="flex gap-x-2 text-sm">
          <Clock size={15} />
          <span className="text-gray-700 dark:text-gray-300 -mt-1">
            02:00 PM - 03:00 PM
          </span>
        </div>

        <h1 className="font-serif ml-6 text-sm">General visit</h1>
      </div>
      <div className="flex gap-x-2 mt-4">
        <Eye
          className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
          size={40}
        />
        <MessageCircle
          className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
          size={40}
        />
        <div
          className="border dark:border  h-10  w-10 dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer flex items-center justify-center
                
                
                
                
                "
        >
          X
        </div>
      </div>
    </div>
  );
}
