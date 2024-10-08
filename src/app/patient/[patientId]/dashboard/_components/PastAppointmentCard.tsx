import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  Clock,
  MapPin,
  MessageCircle,
  Video,
} from "lucide-react";
import Link from "next/link";

export default function PastAppointmentCard() {
  return (
    <div className=" w-full p-4 rounded-lg dark:bg-gray-800 space-y-4">
      <h1 className="flex gap-x-2 text-lg  font-semibold">
        Fridday March 2024
      </h1>

      <div className="border p-4 rounded-xl bg-gray-100 dark:bg-gray-950 dark:text-gray-300 mt-2 space-y-2">
        <div className="flex gap-x-2 text-sm">
          <Clock size={15} />
          <span className="text-gray-700 dark:text-gray-300 -mt-1">
            02:00 PM - 03:00 PM
          </span>
        </div>
        <div className="flex gap-x-2 text-sm">
          <MapPin size={15} />
          <span className="text-gray-700 dark:text-gray-300 -mt-1">
            Newyourk ,Unitedstates
          </span>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex gap-3 items-start">
          <Avatar className="rounded-lg" width="50px" height="50px" />
          <Link href={`#`} className="flex flex-col items-start">
            <h1 className="text-sm font-semibold">Jhon Doe</h1>
            <p className="text-gray-500">1234567890</p>
          </Link>
        </div>
        <Video
          className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
          size={40}
        />
      </div>
      <div className=" grid md:grid-cols-2  gap-2  ">
        <Button
          variant="ghost"
          type="button"
          className="bg-gray-200  hover:ring-1 hover:ring-slate-400  dark:bg-gray-950 flex  gap-2 justify-center items-center h-10 rounded-md "
        >
          <MessageCircle
            className="    rounded-full  cursor-pointer"
            size={20}
          />
          <span className="text-md font-semibold text-gray-600">
            {" "}
            Resechudle
          </span>
        </Button>
        <Button
          variant="secondary"
          className="ring-1 hover:bg-blue-600 hover:text-white flex justify-center items-center h-10 rounded-md gap-2"
        >
          <CalendarCheck size={20} />
          <span className="text-md font-semibold "> View Details</span>
        </Button>
        <button></button>
      </div>
    </div>
  );
}
