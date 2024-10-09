import React from "react";
import DoctorLayout from "../_components/DoctorLayout";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsContents from "./_components/TabsContents";

export default function page() {
  const sidebarOptions = [
    {
      name: "SATURDAY",
      href: "/doctor/schedule/saturday",
    },
    {
      name: "SUNDAY",
      href: "/doctor/schedule/sunday",
    },
    {
      name: "MONDAY",
      href: "/doctor/schedule/monday",
    },
    {
      name: "TUESDAY",
      href: "/doctor/schedule/tuesday",
    },
    {
      name: "WEDNESDAY",
      href: "/doctor/schedule/wednesday",
    },
    {
      name: "THURSDAY",
      href: "/doctor/schedule/thursday",
    },
    {
      name: "FRIDAY",
      href: "/doctor/schedule/friday",
    },
  ];
  return (
    <DoctorLayout>
      {" "}
      <div className="  p-4  ">
        <div>
          <h1 className="text-xl text-gray-600 font-semibold mb-4">
            Schedule Timings
          </h1>
        </div>

        <Tabs defaultValue="upcoming" className="w-full my-10 border">
          <TabsList className=" flex  flex-wrap h-auto  md:justify-between    ">
            {
              sidebarOptions.map((link, index) => (
                <TabsTrigger
                  key={index}
                  value={link.name}
                  className="w-fit h-10"
                >
                  {link.name}
                </TabsTrigger>
              ))
              // Add the other tabs here for "past" and "cancelled" tabs as well.
            }
          </TabsList>

          {/* Content for the "upcoming" tab */}

          {sidebarOptions.map((link, index) => (
            <TabsContents key={index} value={link.name} />
          ))}
        </Tabs>
      </div>
    </DoctorLayout>
  );
}
