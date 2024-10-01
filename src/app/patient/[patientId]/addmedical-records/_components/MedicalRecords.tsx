import Avatar from "@/components/Avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import { DownloadCloudIcon } from "lucide-react";
import React from "react";

export default function MedicalRecords() {
  return (
    <TableRow className="  ">
      <TableCell>
        <p>Cbc</p>
      </TableCell>
      <TableCell>Labaidffffff</TableCell>
      <TableCell className="">
        <h1 className=" ">11 Nov 2023 </h1>
        <p className="text-sm text-cyan-500 font-bold"> 10.45 am</p>
      </TableCell>

      <TableCell>
        <DownloadCloudIcon />
      </TableCell>

      <TableCell>
        <Avatar />
      </TableCell>
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
