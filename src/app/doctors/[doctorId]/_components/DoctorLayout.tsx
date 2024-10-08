import SideBarLinks from "@/components/SidebarLinks";

import { ReactNode } from "react";
import { doctorSidebarOptions } from "./constants";

export default function DoctorLayout({
  children, // This will include the child pages (appointments, reviews, etc.)
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar Section */}
      <div className="lg:w-1/3 px-4 lg:sticky lg:top-20 lg:self-start">
        <SideBarLinks options={doctorSidebarOptions} baseUrl="doctors" />
      </div>

      {/* Main Content Section */}

      <main className="w-full px-4">{children}</main>
    </div>
  );
}
