import React from "react";
import DoctorLayout from "../_components/DoctorLayout";
import AppointmentsCard from "./_components/AppointmentCard";
import PaginationComponent from "@/components/PaginationComponent";

export default function page() {
  return (
    <DoctorLayout>
      <div>
        <div className="space-y-4 border p-4 rounded-sm">
          <AppointmentsCard />
          <AppointmentsCard />
          <AppointmentsCard />
          <AppointmentsCard />
          <AppointmentsCard />
          <AppointmentsCard />
        </div>
        <PaginationComponent currentPage={1} totalPages={10} baseUrl="/" />
      </div>
    </DoctorLayout>
  );
}
