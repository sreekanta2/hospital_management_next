"use client";
import { TabsContent } from "@/components/ui/tabs";
import { X } from "lucide-react";
import ScheduleModal from "./ScheduleModal";

interface TabsContentsProps {
  value: string;
}

export default function TabsContents({ value }: TabsContentsProps) {
  const timeSlots = [1, 2, 3, 4];

  return (
    <TabsContent value={value}>
      <div className="flex justify-between  items-center ">
        <h1 className="text-xl font-semibold text-gray-700">Time slots</h1>
        <ScheduleModal />
      </div>
      <div className="flex flex-wrap gap-2">
        {timeSlots.length === 0 && (
          <p className="text-sm text-gray-600 mt-4">Not available</p>
        )}
        {timeSlots.length > 0 &&
          timeSlots.map((item, index) => (
            <div
              className="px-4 py-2 bg-slate-100 text-slate-600 rounded-md  flex items-center gap-2  hover:"
              key={index}
            >
              <span> 10.00 am - 5.00 pm</span>

              <X size={14} />
            </div>
          ))}
      </div>
    </TabsContent>
  );
}
