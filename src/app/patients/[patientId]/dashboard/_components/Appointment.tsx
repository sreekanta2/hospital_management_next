import PaginationComponent from "@/components/PaginationComponent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import AppointmentTable from "./AppointmentTable";
const headers = [
  "Doctor",
  "Appt Date",
  "Booking date",
  "Amount",
  "Status",
  "Action",
];

export default function Appointment() {
  return (
    <TabsContent value="appointment" className=" w-full   ">
      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <Table className="border rounded-md">
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead key={index} className="w-[100px]">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="w-full">
            <AppointmentTable />
            <AppointmentTable />
            <AppointmentTable />
            <AppointmentTable />
            <AppointmentTable />
            <AppointmentTable />
            <AppointmentTable />
            <AppointmentTable />
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <PaginationComponent currentPage={2} totalPages={10} />
    </TabsContent>
  );
}
