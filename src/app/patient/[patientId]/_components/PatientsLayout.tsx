import SideBarLinks from "@/components/SidebarLinks";
import { ReactNode } from "react";
import { patientSidebarOptions } from "../../_components/constant";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function PatientsLayout({
  children, // This will include the child pages (appointments, reviews, etc.)
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar Section */}
      <div className="lg:w-1/4 px-4 lg:sticky lg:top-0 lg:self-start">
        <SideBarLinks options={patientSidebarOptions} baseUrl="patient" />
      </div>

      {/* Main Content Section */}
      <ScrollArea className="flex-1 px-4 ">
        <main className="w-full">{children}</main>
        <ScrollBar />
      </ScrollArea>
    </div>
  );
}
