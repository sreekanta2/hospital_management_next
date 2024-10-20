import SearchInput from "@/components/SearchInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BadgeCheck } from "lucide-react";
import DoctorLayout from "../_components/DoctorLayout";
import EditForm from "./_components/EditForm";
import PayoutTable from "./_components/PayoutTable";

export default function page() {
  const headers = ["Date", "Payment Method", "Amount", "Status"];
  return (
    <DoctorLayout>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4 bg-gray-950 p-6 rounded-md">
          <h1 className="text-2xl font-semibold text-gray-300">
            Payout Settings
          </h1>
          <p className="text-sm text-slate-400">
            All the earning will be sent to below selected payout method
          </p>

          <div className="flex gap-8     ">
            <div className="flex gap-4 w-36 h-28 bg-white rounded-md flex-col items-center py-4 relative ">
              <p className="text-2xl text-black font-semibold border-b pb-1">
                Paypal
              </p>
              <EditForm />
              <BadgeCheck
                size={20}
                strokeWidth={2}
                fill="green"
                className="text-white absolute -top-2 -right-1"
              />
            </div>
            <div className="flex gap-4 w-36 h-28 bg-white rounded-md flex-col items-center py-4 relative ">
              <p className="text-2xl text-black font-semibold border-b pb-1">
                Stripe
              </p>
              <EditForm />
              <BadgeCheck
                size={20}
                strokeWidth={2}
                fill="green"
                className="text-white absolute -top-2 -right-1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <SearchInput searchParamKey="search" className="w-fit my-4" />
          <ScrollArea className="w-full whitespace-nowrap rounded-md ">
            <Table className="border rounded-md">
              <TableHeader className="bg-slate-100 ">
                <TableRow>
                  {headers.map((header, index) => (
                    <TableHead key={index} className="w-[100px]">
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody className="w-full">
                <PayoutTable />
                <PayoutTable />
                <PayoutTable />
                <PayoutTable />
                <PayoutTable />
              </TableBody>
            </Table>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </DoctorLayout>
  );
}
