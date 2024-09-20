import SideBarLinks from "@/components/SidebarLinks";
import { doctorSidebarOptions } from "@/constant";
import { ReactNode } from "react";

export default function DoctorLayout({
  children, // This will include the child pages (appointments, reviews, etc.)
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid   grid-cols-1  md:grid-cols-4 gap-4">
      <div className="col-span-1">
        <SideBarLinks options={doctorSidebarOptions} baseUrl="doctors" />
      </div>
      <main className="col-span-3">{children}</main>
    </div>
  );
}
