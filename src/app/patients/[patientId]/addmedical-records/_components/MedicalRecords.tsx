import Avatar from "@/components/Avatar";

import { TableCell, TableRow } from "@/components/ui/table";
import { profile } from "@/images";
import { Download, PenSquare, Trash2Icon } from "lucide-react";
import Link from "next/link";

export default function MedicalRecords() {
  return (
    <TableRow className="  ">
      <TableCell>
        <p>#MR00</p>
      </TableCell>
      <TableCell>Labaidffffff</TableCell>
      <TableCell className="">
        <h1 className=" ">11 Nov 2023 </h1>
        <p className="text-sm text-cyan-500 font-bold"> 10.45 am</p>
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
      <TableCell className=" flex gap-1    ">
        <div className="border dark:border h-8 w-8 dark:border-gray-700 p-1 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer grid place-items-center">
          <PenSquare size={15} strokeWidth={2} />
        </div>
        <div className="border dark:border h-8 w-8 dark:border-gray-700 p-1 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer grid place-items-center">
          <Download size={15} strokeWidth={2} />
        </div>
        <div className="border dark:border h-8 w-8 dark:border-gray-700 p-1 rounded-full shadow-lg hover:bg-red-200 hover:text-red-500 cursor-pointer grid place-items-center">
          <Trash2Icon size={15} strokeWidth={2} />
        </div>
      </TableCell>
    </TableRow>
  );
}
