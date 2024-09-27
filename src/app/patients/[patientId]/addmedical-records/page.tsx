import PaginationComponent from "@/components/PaginationComponent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import PatientsLayout from "../_components/PatientsLayout";
import MedicalRecords from "./_components/MedicalRecords";
import { AddMedicalRecords } from "./_components/AddMedicalRecords";

const headers = [
  "Test Name",
  "Hospital Name",
  "Date",
  "Attachmentnt",
  "Created by",
  "Action",
];

export default function page() {
  return (
    <PatientsLayout>
      <div className="w-full  flex flex-col gap-4 ">
        <section className="flex justify-end">
          <AddMedicalRecords />
        </section>
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
              <MedicalRecords />
              <MedicalRecords />
              <MedicalRecords />
              <MedicalRecords />
              <MedicalRecords />
              <MedicalRecords />
            </TableBody>
          </Table>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <PaginationComponent
          currentPage={2}
          totalPages={10}
          baseUrl="/patients/2/dashboard"
        />
      </div>
    </PatientsLayout>
  );
}
