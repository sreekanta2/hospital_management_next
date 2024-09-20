import React from "react";
import DoctorLayout from "../_components/DoctorLayout";
import PatientCard from "./_components/PatientsCard";
import PaginationComponent from "@/components/PaginationComponent";

export default function Pataints() {
  return (
    <DoctorLayout>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-4">
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
          <PatientCard />
        </div>
        <PaginationComponent currentPage={1} totalPages={20} baseUrl="1" />
      </div>
    </DoctorLayout>
  );
}
