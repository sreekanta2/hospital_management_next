import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import AppointmentCard from "./AppointmentCard";
import PaginationComponent from "@/components/PaginationComponent";

export default function CenclledAppintmentContent() {
  return (
    <TabsContent value="cenclled">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div>

      <PaginationComponent
        currentPage={2}
        totalPages={10}
        baseUrl="/patients/2/my-appointment"
      />
    </TabsContent>
  );
}