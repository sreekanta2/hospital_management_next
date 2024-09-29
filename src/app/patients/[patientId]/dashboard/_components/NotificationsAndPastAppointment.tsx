import Link from "next/link";
import React from "react";
import AppointmentCard from "./AppointmentCard";
import { CustomSelect } from "@/components/CustomSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NotificationCard from "./NotificationCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function NotificationsAndPastAppointment() {
  return (
    <div>
      <div className="grid md:grid-cols-5 gap-4   ">
        <div className="w-full md:col-span-2 border rounded-md p-4">
          <div className="flex justify-between">
            <div className="w-full flex items-center justify-between ">
              <h1 className="text-xl font-semibold text-gray-600 ">
                Notification
              </h1>
              <Link href="#">View All</Link>
            </div>
          </div>
          <hr className="mt-4" />

          <div className=" w-full my-4  flex flex-col  ">
            {/* <ScrollArea className="w-full whitespace-nowrap rounded-md  "> */}
            <NotificationCard />
            <NotificationCard />
            {/* <ScrollBar orientation="horizontal" /> */}
            {/* </ScrollArea> */}
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
              // Handler to update state on selection
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
    </div>
  );
}
