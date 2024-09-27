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
import OrderTable from "./_components/OrderTable";

const headers = [
  " Order ID",
  "Quantity",
  "Pharmacy Name",
  "Amount",
  "Payment Gateway	",
  "Status",
  "	Order date",
  "Action",
];

export default function page() {
  return (
    <PatientsLayout>
      <div className="w-full">
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
              <OrderTable />
              <OrderTable />
              <OrderTable />
              <OrderTable />
              <OrderTable />
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
