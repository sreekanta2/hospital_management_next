import React from "react";
import PatientsLayout from "../_components/PatientsLayout";
import DoctorCard from "@/app/doctors/_components/DoctorCard";
import FavouriteDoctorCard from "./_components/FavouriteDoctorCard";
import PaginationComponent from "@/components/PaginationComponent";

export default function page() {
  return (
    <PatientsLayout>
      <div className="w-full mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((patient, index) => (
            <FavouriteDoctorCard key={index} />
          ))}
        </div>
        <PaginationComponent currentPage={1} totalPages={10} baseUrl="/" />
      </div>
    </PatientsLayout>
  );
}
