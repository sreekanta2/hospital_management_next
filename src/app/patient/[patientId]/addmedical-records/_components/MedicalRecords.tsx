import Avatar from "@/components/Avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import { Download, PenSquare, Trash2Icon, TrashIcon } from "lucide-react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

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
        <Avatar />
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
