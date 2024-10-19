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
        <h1 className="text-xl   border-gray-200   ">Orders</h1>

        <hr className="my-4" />

        <ScrollArea className="w-full whitespace-nowrap rounded-md  ">
          <Table className="border rounded-md mt-4">
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
        <PaginationComponent currentPage={2} totalPages={10} />
      </div>
    </PatientsLayout>
  );
}
