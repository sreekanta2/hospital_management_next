import SideBarLinks from "@/components/SidebarLinks";

import { ReactNode } from "react";
import { patientSidebarOptions } from "../../_components/constant";

export default function PatientsLayout({
  children, // This will include the child pages (appointments, reviews, etc.)
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid   grid-cols-1  lg:grid-cols-4 md:gap-x-4  ">
      <div className="col-span-1 px-4 ">
        <SideBarLinks options={patientSidebarOptions} baseUrl="patients" />
      </div>
      <main className="col-span-3 px-4">{children}</main>
    </div>
  );
}
