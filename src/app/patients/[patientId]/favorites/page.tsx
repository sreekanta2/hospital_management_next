import React from "react";
import PatientsLayout from "../_components/PatientsLayout";
import DoctorCard from "@/app/doctors/_components/DoctorCard";

export default function page() {
  return (
    <PatientsLayout>
      <div>
        <DoctorCard />
      </div>
    </PatientsLayout>
  );
}
