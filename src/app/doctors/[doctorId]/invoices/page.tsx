import Avatar from "@/components/Avatar";
import PaginationComponent from "@/components/PaginationComponent";
import SearchInput from "@/components/SearchInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { profile } from "@/images";
import { Printer } from "lucide-react";
import DoctorLayout from "../_components/DoctorLayout";
import InvoiceDetailsModal from "./_component/InvoiceDetailsModal";

export default function page() {
  const headers = [
    "ID",
    "Patient",
    "Appointment Date",
    "Booked on",
    "Amount",
    "Action",
  ];
  return (
    <DoctorLayout>
      <div>
        <h1>Invoices</h1>
        <hr className="my-4" />
        <div>
          <SearchInput searchParamKey="search" className="w-fit my-4 " />
          <div>
            <ScrollArea className="w-5xl whitespace-nowrap rounded-md ">
              <Table className="border rounded-md">
                <TableHeader className="bg-slate-100 dark:bg-gray-800">
                  <TableRow>
                    {headers.map((header, index) => (
                      <TableHead key={index} className="w-[100px]">
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                <TableBody className="w-full  ">
                  {[1, 2, 3].map((i) => (
                    <TableRow className=" h-14 " key={i}>
                      <TableCell>
                        <p>#AC-1234</p>
                      </TableCell>
                      <TableCell className="flex items-start gap-2 mt-1">
                        <Avatar
                          src={profile}
                          alt="avatar"
                          width="40px"
                          height="40px"
                        />
                        <p>John Doe</p>
                      </TableCell>

                      <TableCell>26 Mar 2024</TableCell>
                      <TableCell>26 Mar 2024</TableCell>
                      <TableCell>$300</TableCell>
                      <TableCell className="flex   gap-4 h-full items-center  ">
                        <InvoiceDetailsModal />
                        <Printer
                          size={28}
                          className="bg-slate-100 border border-slate-300  hover:bg-blue-500 hover:text-white rounded-full p-1 transition-all duration-300 ease-in-out cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-blue-500 dark:hover:text-white -mt-3"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <PaginationComponent currentPage={2} totalPages={10} />
          </div>
        </div>
      </div>
    </DoctorLayout>
  );
}
