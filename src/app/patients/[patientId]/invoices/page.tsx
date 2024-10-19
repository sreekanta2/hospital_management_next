import Avatar from "@/components/Avatar";
import IconWrapper from "@/components/IconWrapper";
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
import { Link, Printer } from "lucide-react";
import PatientsLayout from "../_components/PatientsLayout";

export default function page() {
  const headers = [
    "ID",
    "Doctor",
    "Appointment Date",

    "Booked on",
    "Amount",
    "Action",
  ];
  return (
    <PatientsLayout>
      <h1 className="text-xl   border-gray-200  border-b pb-2 ">Invoices</h1>
      <div>
        <SearchInput
          placeholder="Search for items..."
          searchParamKey="q"
          debounceDelay={500}
          className="w-fit my-4"
        />
      </div>

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
                <TableCell>
                  <div className="flex gap-3 items-start">
                    <Avatar
                      src={profile}
                      alt="profile"
                      className="rounded-lg"
                      width="50px"
                      height="50px"
                    />
                    <Link href={`#`} className="flex flex-col items-start">
                      <h1 className="text-sm font-semibold">Jhon Doe</h1>
                      <p className="text-gray-500">1234567890</p>
                    </Link>
                  </div>
                </TableCell>

                <TableCell>26 Mar 2024</TableCell>
                <TableCell>26 Mar 2024</TableCell>
                <TableCell>$300</TableCell>

                <TableCell className="flex mt-2 gap-4">
                  <IconWrapper
                    icon={Link}
                    className=" hover:bg-blue-500 hover:text-white"
                  />
                  <IconWrapper
                    icon={Printer}
                    className=" hover:bg-blue-500 hover:text-white"
                  />
                  {/* <span className="px-2 py-1  bg-[#eaab08]  rounded-full text-xs text-white ">
                    pending
                  </span> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <PaginationComponent currentPage={2} totalPages={10} />
    </PatientsLayout>
  );
}
