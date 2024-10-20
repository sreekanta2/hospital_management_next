import { TableCell, TableRow } from "@/components/ui/table";

export default function InvoiceTable() {
  return (
    <TableRow className="  ">
      <TableCell>
        <div className="flex gap-3 items-start">
          <p className="text-gray-500">1234567890</p>
        </div>
      </TableCell>
      <TableCell>
        <p> 1</p>
      </TableCell>
      <TableCell className="">
        <p className="text-sm text-cyan-500 font-bold"> $1</p>
      </TableCell>

      <TableCell>$2999</TableCell>
    </TableRow>
  );
}
