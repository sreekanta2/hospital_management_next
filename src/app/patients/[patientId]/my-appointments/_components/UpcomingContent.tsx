import React from "react";
import AppointmentCard from "./AppointmentCard";
import { TabsContent } from "@/components/ui/tabs";
import PaginationComponent from "@/components/PaginationComponent";

export default function UpcomingContent() {
  return (
    <TabsContent value="upcoming">
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
