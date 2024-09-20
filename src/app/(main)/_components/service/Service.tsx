import React from "react";
import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-7xl w-full p-4">
        {/* Flexbox layout with wrapping */}
        <div className="flex gap-4 flex-wrap  ">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}
