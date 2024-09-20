import Timeline from "@/components/Timeline";
import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import DoctorService from "./DoctorService";

export default function Overview() {
  return (
    <TabsContent value="overview" className="px-4">
      <div className=" relative max-w-2xl flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-gray-600">About me </h1>
          <p className="text-[#20c0f3]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
            corporis voluptatibus dolore sit ipsa ab consequuntur pariatur animi
            asperiores iusto.
          </p>
        </div>
        <div>
          <h1 className="  py-2 font-semibold text-gray-600">Education</h1>
          <ol className="relative border-s mx-2 border-gray-200 dark:border-gray-700">
            <Timeline />
            <Timeline />
          </ol>
        </div>
        <div>
          <h1 className="  py-2 font-semibold text-gray-600">Education</h1>
          <ol className="relative border-s mx-2 border-gray-200 dark:border-gray-700">
            <Timeline />
            <Timeline />
          </ol>
        </div>
        <DoctorService />
        <DoctorService />
      </div>
    </TabsContent>
  );
}
