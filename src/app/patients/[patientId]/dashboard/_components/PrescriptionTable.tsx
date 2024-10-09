import Avatar from "@/components/Avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import { profile } from "@/images";
import Link from "next/link";

export default function PrescriptionTable() {
  return (
    <TableRow className="  ">
      <TableCell className=" ">
        <h1 className="text-gray-700">11 Nov 2023 </h1>
        <p className="text-sm text-cyan-500 font-bold"> 10.45 am</p>
      </TableCell>
      <TableCell className="text-start">Confirm</TableCell>
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

      <TableCell className=" flex gap-1  items-center h-full ">
        <button className="border bg-[#e0f6f6] py-1 mr-4 px-4 rounded-md text-cyan-500">
          Print
        </button>
        <button className="border bg-[#e1f6ed] py-1 mr-4 px-4 rounded-md text-[#49b576]">
          Accept
        </button>
      </TableCell>
    </TableRow>
  );
}
