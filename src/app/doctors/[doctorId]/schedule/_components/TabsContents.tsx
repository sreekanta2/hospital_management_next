"use client";
import { useState } from "react";
import ScheduleModal from "./ScheduleModal";
import { TabsContent } from "@/components/ui/tabs";

interface TabsContentsProps {
  value: string;
}

export default function TabsContents({ value }: TabsContentsProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [timeSlots] = useState<number[]>([1, 2, 3]);

  const control = () => {
    setOpen((prev) => !prev);
  };

  return (
    <TabsContent value={value}>
      <div className="flex justify-between p-4 items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-700">Time slots</h1>
          {timeSlots.length === 0 && (
            <p className="text-sm text-gray-600 mt-4">Not available</p>
          )}
        </div>
        <div className="flex gap-2 text-sm text-[#20c0f3]" onClick={control}>
          <svg
            width="20px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                fill="#20c0f3"
              ></path>
            </g>
          </svg>
          <button>Add to Slot</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {timeSlots.length > 0 &&
          timeSlots.map((item, index) => (
            <p
              className="px-4 py-2 bg-[#d43f3a] rounded-md text-white"
              key={index}
            >
              10.00 am - 5.00 pm
              <span className="px-4 text-gray-400 hover:text-white cursor-pointer">
                X
              </span>
            </p>
          ))}
        <ScheduleModal control={control} open={open} />
      </div>
    </TabsContent>
  );
}
