import SideBarLinks from "@/components/SidebarLinks";
import { patientSidebarOptions } from "@/constant";

import { ReactNode } from "react";

export default function PatientsLayout({
  children, // This will include the child pages (appointments, reviews, etc.)
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid   grid-cols-1  md:grid-cols-4 gap-4 ">
      <div className="col-span-1">
        <SideBarLinks options={patientSidebarOptions} baseUrl="patients" />
      </div>
      <main className="col-span-3 px-4">{children}</main>
    </div>
  );
}
