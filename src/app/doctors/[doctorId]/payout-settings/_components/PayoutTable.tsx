import { TableCell, TableRow } from "@/components/ui/table";

export default function PayoutTable() {
  return (
    <TableRow className="  ">
      <TableCell className=" ">
        <h1 className="text-gray-700">11 Nov 2023 </h1>
        <p className="text-sm text-cyan-500 font-bold"> 10.45 am</p>
      </TableCell>
      <TableCell className="text-start">Paypal</TableCell>
      <TableCell>$100</TableCell>

      <TableCell className=" flex gap-1  items-center h-full ">
        <p className="text-green-500 bg-[#e1f6ed] px-2 py-1 rounded-md">
          Completed
        </p>
      </TableCell>
    </TableRow>
  );
}
