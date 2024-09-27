"use client";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";

import { PatientGraphItem } from "./constants";

type GraphStatusProps = {
  item: PatientGraphItem;
};
// Define the component
export default function GraphStatus({ item }: GraphStatusProps) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div
            style={{ backgroundColor: item.color }}
            className="flex flex-col text-white justify-center items-center py-4 gap-y-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer"
          >
            <div className="flex flex-col gap-10 justify-center items-center">
              <h1 className="font-bold">{item.title}</h1>
              <div className="w-14 h-14">
                <Image
                  src={item.img}
                  alt="heat image"
                  width={500}
                  height={300}
                />
              </div>
              <span className="text-sm">Last Update 2d</span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p>Here is the modal content for {item.title}.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
