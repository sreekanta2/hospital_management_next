import Avatar from "@/components/Avatar";
import ResponsiveImage from "@/components/ResponsiveImage";
import ToggleSwitch from "@/components/ToogleSwitch";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { profile } from "@/images";
import { Dot, Edit, SquarePen } from "lucide-react";
import React from "react";

export default function DependantsCard() {
  return (
    <div className="border rounded-md w-full grid grid-cols-1 md:grid-cols-2 py-4 px-3 gap-4 bg-slate-50 dark:bg-gray-800   ">
      <div className="flex gap-4  items-star">
        <ResponsiveImage
          src={profile}
          alt="profile"
          width="60px"
          height="60px"
          className="rounded-lg"
          priority
        />
        <div className="-mt-[5px]">
          <h1 className="text-lg">Shusila</h1>
          <p className="text-sm  flex flex-wrap items-center">
            <span className="flex items-center">
              <Dot className="text-blue-400 -ml-4 -mr-3" size={40} />
              Mother
            </span>
            <span className="flex items-center">
              <Dot className="text-blue-400 -ml-2 -mr-3" size={40} />
              Female
            </span>
            <span className="flex items-center">
              <Dot className="text-blue-400 -ml-4 md:-ml-2 -mr-3" size={40} />
              58 years 20 days
            </span>
          </p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-between">
        <div className=" ">
          <h1 className="">Shusila</h1>
          <p className="  flex items-center stext-lg mt-1">A+ ve</p>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="airplane-mode">Detective</Label>
          <ToggleSwitch />
          <Label htmlFor="airplane-mode">Active</Label>
          <SquarePen
            className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
            size={32}
          />
        </div>
      </div>
    </div>
  );
}
