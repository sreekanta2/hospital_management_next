import Avatar from "@/components/Avatar";
import { ClipboardPlus, EyeIcon, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Dependant() {
  return (
    <div className="border px-4 my-4 py-2 rounded-md ">
      <div className="flex justify-between my-1 ">
        <h1 className="text-xl  font-semibold">Dependant</h1>
        <div className="flex items-center gap-2">
          <PlusCircle />
          <h1>Add New</h1>
        </div>
        <Link href="#">View All</Link>
      </div>
      <hr />

      <div className="flex flex-col gap-2 ">
        {[1, 2, 3].map((dpt) => (
          <div key={dpt}>
            <div className="flex justify-between items-center">
              <Avatar className="rounded-md" />
              <div className="flex  gap-4">
                <div className="h-10 w-10 cursor-pointer hover:bg-blue-500 hover:text-white rounded-full border flex justify-center items-center">
                  <ClipboardPlus size={18} />
                </div>
                <div className="h-10 w-10 cursor-pointer hover:bg-blue-500 hover:text-white rounded-full border flex justify-center items-center">
                  <EyeIcon size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
