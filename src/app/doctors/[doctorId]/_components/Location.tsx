import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import DoctorClinic from "./Doctorclinic";

export default function Location() {
  const times = [1, 2];
  return (
    <TabsContent value="location" className="px-4 ">
      <div className="my-8 flex flex-col gap-4 ">
        {times.map((time) => (
          <DoctorClinic key={time} />
        ))}
      </div>
    </TabsContent>
  );
}
