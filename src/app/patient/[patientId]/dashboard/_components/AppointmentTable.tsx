import Avatar from "@/components/Avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function AppointmentTable() {
  return (
    <TableRow className="  ">
      <TableCell>
        <div className="flex gap-3 items-start">
          <Avatar className="rounded-lg" width="50px" height="50px" />
          <Link href={`#`} className="flex flex-col items-start">
            <h1 className="text-sm font-semibold">Jhon Doe</h1>
            <p className="text-gray-500">1234567890</p>
          </Link>
        </div>
      </TableCell>
      <TableCell>
        <h1>11 Nov 2023 </h1>
        <p> 10.45 am</p>
      </TableCell>
      <TableCell className="">
        <h1 className=" ">11 Nov 2023 </h1>
        <p className="text-sm text-cyan-500 font-bold"> 10.45 am</p>
      </TableCell>

      <TableCell>$2999</TableCell>
      <TableCell>Confirm</TableCell>
      <TableCell className=" flex gap-1    ">
        <button className="border bg-[#e0f6f6] py-1  px-4 rounded-md text-cyan-500">
          Print
        </button>
        <button className="border bg-[#e1f6ed] py-1  px-4 rounded-md text-[#49b576]">
          Accept
        </button>
      </TableCell>
    </TableRow>
  );
}
