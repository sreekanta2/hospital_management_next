import { Bell } from "lucide-react";

export default function NotificationCard() {
  const title = "Booking Confirmed on 21 Mar 2024 10:30 AM";
  return (
    <div className="w-full flex justify-between items-center p-2 rounded-md hover:bg-slate-100 dark:hover:bg-gray-700 transition-all duration-500">
      <div className="flex justify-between ">
        <div className="flex gap-3 items-start   p-2">
          <div
            className={`w-10 h-10  border overflow-hidden flex items-center justify-center rounded-md dark:bg-slate-900`}
          >
            <Bell />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xs font-medium flex-wrap">
              {title.length > 35 ? `${title.slice(0, 35)}...` : title}
            </h1>
            <h1 className="text-xs text-gray-500">2 days ago</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
