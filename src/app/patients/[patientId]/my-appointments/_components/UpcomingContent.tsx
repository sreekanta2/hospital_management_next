import React from "react";
import AppointmentCard from "./AppointmentCard";
import { TabsContent } from "@/components/ui/tabs";

export default function UpcomingContent() {
  return (
    <TabsContent
      value="upcoming"
      className="grid grid-cols-1 lg:grid-cols-3 gap-5 "
    >
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
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
    </TabsContent>
  );
}
