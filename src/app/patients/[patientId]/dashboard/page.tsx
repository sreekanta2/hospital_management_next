import React from "react";
import PatientsLayout from "../_components/PatientsLayout";
import HeartRateStatus from "./_components/HeartStatus";

export default function page() {
  return (
    <PatientsLayout>
      <div className="grid grid-cols-4 gap-x-3">
        <HeartRateStatus />
        <HeartRateStatus />
        <HeartRateStatus />
        <HeartRateStatus />
      </div>
    </PatientsLayout>
  );
}
