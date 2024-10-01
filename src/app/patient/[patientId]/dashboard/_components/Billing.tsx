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
import BillingTable from "./BillingTable";
const headers = ["Invoice", " Doctor", "Amount", "Status", "Action"];
export default function Billing() {
  return (
    <TabsContent value="biling" className="w-full">
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
            <BillingTable />
            <BillingTable />
            <BillingTable />
            <BillingTable />
            <BillingTable />
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
