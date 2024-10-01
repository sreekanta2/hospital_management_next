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
import React from "react";
import PrescriptionTable from "./PrescriptionTable";
const headers = [" Date", "Name", "Created", "Action"];
export default function Prescription() {
  return (
    <TabsContent value="prescription">
      {" "}
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
            <PrescriptionTable />
            <PrescriptionTable />
            <PrescriptionTable />
            <PrescriptionTable />
            <PrescriptionTable />
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <PaginationComponent
        currentPage={2}
        totalPages={10}
        baseUrl="/patients/2/dashboard"
      />
    </TabsContent>
  );
}
