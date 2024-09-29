"use client";

import {
  Calendar,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useState } from "react";

import AppointmentCard from "./AppointmentCard";

import { CustomSelect } from "@/components/CustomSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AppointmentsAnalytics() {
  const [selectedFruit, setSelectedFruit] = useState<string | undefined>(
    undefined
  );
  return (
    <div className="grid md:grid-cols-5 gap-4   ">
      <div className="w-full md:col-span-2 border rounded-md p-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-4  ">
            <CalendarDays />
            <h1 className="text-xl font-semibold text-gray-600 ">
              Appointment
            </h1>
          </div>

          <div className="flex ">
            <ChevronLeft className="cursor-pointer" />
            <ChevronRight className="cursor-pointer" />
          </div>
        </div>
        <hr className="mt-4" />
        {/* <Carousel
          opts={{
            align: "start",
          }}
          className="w-24"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3">1</CarouselItem>
            <CarouselItem className="basis-1/3">5</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselPrevious />
            <CarouselNext />
          </CarouselContent>
        </Carousel> */}
        <div className=" w-full my-4 flex flex-col gap-4 ">
          <AppointmentCard />
          <AppointmentCard />
        </div>
      </div>
      <div className="md:col-span-3 border rounded-md p-4">
        <div className="grid  grid-cols-3 gap-4">
          <h1 className="text-xl font-semibold text-gray-600 ">Analytics</h1>
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
          <CustomSelect
            label="Select a fruit"
            options={[
              { label: "Apple", value: "apple" },
              { label: "Banana", value: "banana" },
              { label: "Blueberry", value: "blueberry" },
              { label: "Grapes", value: "grapes" },
              { label: "Pineapple", value: "pineapple" },
            ]}
          />
        </div>
        <hr className="mt-4" />

        <div>
          <Tabs className="my-4 ">
            <TabsList className="  ">
              <TabsTrigger value="heartrate">Heart Rate</TabsTrigger>
              <TabsTrigger value="bloodpressure">Blood Pressure</TabsTrigger>
            </TabsList>

            <TabsContent value="heartrate">heartrate</TabsContent>
            <TabsContent value="bloodpressure">bloodpressure</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
