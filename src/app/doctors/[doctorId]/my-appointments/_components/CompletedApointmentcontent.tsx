import PaginationComponent from "@/components/PaginationComponent";
import { TabsContent } from "@radix-ui/react-tabs";
import AppointmentCard from "./AppointmentCard";

export default function CompletedApointmentcontent() {
  return (
    <TabsContent value="completed">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div>

      <PaginationComponent currentPage={2} totalPages={10} />
    </TabsContent>
  );
}
