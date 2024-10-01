"use client";
import {
  ClipboardPlus,
  CopyPlus,
  Heart,
  Plus,
  Syringe,
  UserPen,
} from "lucide-react";
import React, { useState } from "react";
import { PieCharts } from "./PieCharts";
import { FaTemperatureHigh } from "react-icons/fa";
import { CustomSelect } from "@/components/CustomSelect";
import Link from "next/link";
import Avatar from "@/components/Avatar";

export default function HealthRecords() {
  const [selectedFruit, setSelectedFruit] = useState<string | undefined>(
    undefined
  );
  return (
    <div className="lg:grid  lg:grid-cols-3 gap-x-4">
      <div className="w-full border col-span-2 px-4 py-6 rounded-md">
        <div className="  flex justify-between mb-4  ">
          <h1 className="text-lg font-semibold  text-gray-600 ">
            Health Records
          </h1>
          <div>
            <CustomSelect
              label="Select a fruit"
              options={[
                { label: "Apple", value: "apple" },
                { label: "Banana", value: "banana" },
                { label: "Blueberry", value: "blueberry" },
                { label: "Grapes", value: "grapes" },
                { label: "Pineapple", value: "pineapple" },
              ]}
              value={selectedFruit} // Controlled value from local state
              onChange={setSelectedFruit} // Handler to update state on selection
            />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-8 ">
          <div className=" flex flex-col gap-6 col-span-3 md:border-r border-b pb-4  md:pb-0 md:border-b-0">
            {/*  */}
            <div className="grid grid-cols-2 gap-4 ">
              {/* First Column */}
              <div className="">
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <Heart
                    size={14}
                    className="text-red-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>Heart Rate</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    140 <span className="text-lg">Bpm</span>
                  </span>
                  <sup className="text-sm font-semibold text-green-500 -mt-2">
                    2<span className="text-sm">%</span>
                  </sup>
                </div>
              </div>

              {/* Second Column */}
              <div className="  ">
                {/* Add justify-self-end here */}
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <FaTemperatureHigh
                    size={14}
                    className="text-red-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>Body Temprature</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    37.5 C
                  </span>
                </div>
              </div>
            </div>{" "}
            {/* glucose level */}
            <div className="grid grid-cols-2 gap-4">
              {/* First Column */}
              <div className="">
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <CopyPlus
                    size={14}
                    className="text-blue-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>Glucose Level</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    70 -90
                  </span>
                  <sup className="text-sm font-semibold text-green-500 -mt-2">
                    6<span className="text-sm">%</span>
                  </sup>
                </div>
              </div>

              {/* Second Column */}
              <div className=" ">
                {/* Add justify-self-end here */}
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <Syringe
                    size={14}
                    className="text-blue-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>SPo2</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    37.5 C
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* First Column */}
              <div className="">
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <Syringe
                    size={14}
                    className="text-red-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>Blood Pressure</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    100 mg/dl
                  </span>
                  <sup className="text-sm font-semibold text-green-500 -mt-2">
                    2<span className="text-sm">%</span>
                  </sup>
                </div>
              </div>

              {/* Second Column */}
              <div className=" ">
                {/* Add justify-self-end here */}
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <UserPen
                    size={14}
                    className="text-red-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>BMI</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    20.1 kg/m2
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <PieCharts />
          </div>
        </div>
      </div>
      {/* book appintments */}
      <div className=" lg:col-span-1 flex flex-col gap-4 w-full">
        <div className=" flex justify-between px-4 border py-4 rounded-md items-center bg-[#4338ca] text-white">
          <div>
            <h1>Book a new</h1>
            <h1>Appointment</h1>
          </div>

          <Plus className="cursor-pointer" />
        </div>

        {/* favorite */}

        <div className="border px-4 py-2 rounded-md ">
          <div className="flex justify-between mb-2 ">
            <h1 className="text-xl  font-semibold">Favorites</h1>
            <Link href="#">View All</Link>
          </div>
          <hr />

          <div className="flex flex-col gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((fv) => (
              <div key={fv}>
                <div className="flex justify-between items-center">
                  <Avatar className="rounded-md" />
                  <div className="h-10 w-10 cursor-pointer hover:bg-blue-500 hover:text-white rounded-full border flex justify-center items-center">
                    <ClipboardPlus size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
