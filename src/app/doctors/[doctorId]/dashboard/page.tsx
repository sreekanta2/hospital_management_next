import React from "react";
import DoctorLayout from "../_components/DoctorLayout";
import DoctorProfileStatus from "./_components/DoctorProfileStatus";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsContentComponent from "./_components/TabsComponents";

export default function Page() {
  return (
    <DoctorLayout>
      <div>
        <DoctorProfileStatus />

        <div>
          <h1 className="mt-8 text-xl font-semibold text-gray-700 mb-4">
            Patients Appointments
          </h1>

          <Tabs defaultValue="upcoming" className="w-full my-10 border">
            <TabsList className="w-full flex flex-col md:flex-row h-auto justify-between md:px-10 md:h-12 rounded-none">
              <TabsTrigger value="upcoming" className="w-full h-8">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="today" className="w-full h-8">
                Today
              </TabsTrigger>
            </TabsList>

            {/* Content for the "upcoming" tab */}
            <TabsContentComponent value="upcoming" />

            {/* Content for the "today" tab */}
            <TabsContentComponent value="today" />
          </Tabs>
        </div>
      </div>
    </DoctorLayout>
  );
}
