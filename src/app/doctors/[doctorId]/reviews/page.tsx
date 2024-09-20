import React from "react";
import DoctorLayout from "../_components/DoctorLayout";
import ReviewCard from "../_components/ReviewCard";
import PaginationComponent from "@/components/PaginationComponent";

export default function page() {
  return (
    <DoctorLayout>
      <div className="border rounded-md">
        <div className=" ">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <PaginationComponent currentPage={1} totalPages={10} baseUrl="/" />
      </div>
    </DoctorLayout>
  );
}
