"use client";
import PaginationComponent from "@/components/PaginationComponent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import AppointmentsModal from "./AppointmentsModal";
import Table from "./Table";

interface TabsContentComponentProps {
  value: string;
}

export default function TabsContentComponent({
  value,
}: TabsContentComponentProps) {
  const table = [1, 2, 3, 4, 5];
  const [open, setOpen] = useState<boolean>(false); // Explicitly typed to boolean

  const control = () => {
    setOpen(!open);
  };

  return (
    <TabsContent value={value}>
      <ScrollArea className="max-w-full shadow-md sm:rounded-lg w-full whitespace-nowrap my-4 relative">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Patients Name
              </th>
              <th scope="col" className="px-6 py-3">
                Appt Date
              </th>
              <th scope="col" className="px-6 py-3">
                Purpose
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Paid Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <Table key={index} control={control} />
            ))}
          </tbody>
        </table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <PaginationComponent currentPage={1} totalPages={20} />
      <AppointmentsModal open={open} control={control} />
    </TabsContent>
  );
}
