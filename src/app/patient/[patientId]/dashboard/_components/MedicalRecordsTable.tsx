import Avatar from "@/components/Avatar";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import React from "react";

export default function MedicalRecordsTable() {
  return (
    <TableRow className="  ">
      <TableCell>
        <p>#0001</p>
      </TableCell>
      <TableCell className="px-6 py-4">
        <h1 className="text-gray-700">11 Nov 2023 </h1>
        <p className="text-sm text-cyan-500 font-bold"> 10.45 am</p>
      </TableCell>
      <TableCell>Confirm</TableCell>
      <TableCell>Confirm</TableCell>
      <TableCell>
        <Avatar />
      </TableCell>

      <TableCell className=" flex gap-1    ">
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
