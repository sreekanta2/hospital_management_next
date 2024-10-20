"use client";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link, Printer, X } from "lucide-react";
import Image from "next/image";
import InvoiceTable from "./InvoiceTable";

export default function InvoiceDetailsModal() {
  const headers = ["Description", "Appt Date", "Booking Date", "Amount"];
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Link
            size={28}
            className="bg-slate-100 border border-slate-300 hover:bg-blue-500 hover:text-white rounded-full p-1 transition-all duration-300 ease-in-out cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-blue-500 dark:hover:text-white mb-1"
          />
        </DialogTrigger>

        <DialogContent className="h-[96%] max-w-[800px] w-full [data-state='open']:bg-white">
          <DialogHeader className="flex mr-3 justify-between border-b pb-2 border-slate-300">
            <div className="border-slate-300 flex items-start justify-between mb-4">
              <DialogClose asChild>
                <X
                  className="absolute right-2 border bg-gray-300 text-gray-500 rounded-full top-4 cursor-pointer p-[2px] transition-all duration-300 ease-in-out hover:bg-red-700 hover:text-white"
                  size={24}
                />
              </DialogClose>

              <DialogTitle className="text-2xl">View Invoice</DialogTitle>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 justify-between">
              <p className="text-xl text-slate-500 text-start">
                24 October 2024
              </p>
              <div className="flex items-center gap-2">
                <Printer size={24} />
                <Button variant="outline">Download</Button>
              </div>
            </div>
          </DialogHeader>

          <ScrollArea className="h-[100%] p-0 w-full">
            {/* Invoice content goes here */}
            <div className="flex flex-col gap-4 border rounded-md p-4 mr-3">
              <div className="relative flex lg:flex-row flex-col justify-between gap-1 rounded-lg">
                <Image src={logo} alt="logo" width={150} height={150} />
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-slate-500">Invoice No : #INV005</p>
                  <p className="text-sm text-slate-500">Issued: 21 Mar 2024</p>
                </div>
              </div>

              {/* Billing Details */}
              <div className="flex lg:flex-row flex-col justify-between gap-4">
                <div className="flex flex-col gap-2 text-slate-500">
                  <h1 className="text-xl font-semibold">Billing To</h1>
                  <div className="flex flex-col gap-2 text-sm ">
                    <p>Richard Wilson</p>
                    <p>299 Star Trek Drive </p>
                    <p>Florida, 32405, USA</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-slate-500">
                  <h1 className="text-xl font-semibold">Billing From</h1>
                  <div className="flex flex-col gap-2 text-sm ">
                    <p>Edalin Hendry</p>
                    <p>806 Twin Willow Lane</p>
                    <p>New York, USA</p>
                  </div>
                </div>
                <div className="text-sm text-slate-500 flex flex-col gap-2">
                  <h1 className="text-xl font-semibold">Payment Method</h1>
                  <div className="flex flex-col gap-2">
                    <p>Debit Card</p>
                    <p>XXXXXXXXXXXX-2541</p>
                    <p>HDFC Bank</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-semibold">Invoice Details</h1>
                </div>

                {/* Invoice Items */}

                <ScrollArea className="w-[380px] md:w-full whitespace-nowrap rounded-md">
                  <Table className="min-w-[600px] border rounded-md">
                    <TableHeader className="bg-gray-100">
                      <TableRow>
                        {headers.map((header, index) => (
                          <TableHead key={index} className="min-w-[175px]">
                            {header}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      <InvoiceTable />
                      <InvoiceTable />
                      <InvoiceTable />
                      <InvoiceTable />
                      <InvoiceTable />
                    </TableBody>
                  </Table>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
