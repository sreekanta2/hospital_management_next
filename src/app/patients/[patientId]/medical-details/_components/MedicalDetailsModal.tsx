import { z } from "zod";

import IconWrapper from "@/components/IconWrapper";
import ResponsiveImage from "@/components/ResponsiveImage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { profile } from "@/images";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  CalendarDays,
  CopyPlus,
  Heart,
  Link,
  Syringe,
  UserPen,
} from "lucide-react";
import { FaTemperatureHigh } from "react-icons/fa";

// Define schema using zod
const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  relationship: z
    .string()
    .min(2, "Relationship must be at least 2 characters."),
  dob: z.string().min(1, "Date of birth is required."),
  uploadFile: z.any().optional(), // Make uploadFile optional for submission
  gender: z.string().min(2, "Gender is required."),
});

export function MedicalDetailsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconWrapper
          icon={Link}
          className=" hover:bg-blue-500 hover:text-white"
        />
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6">
        <ScrollArea className=" pr-4">
          <DialogTitle>Add Medical Details</DialogTitle>
          <hr className="mt-2" />
          <DialogDescription></DialogDescription>
          <div className=" flex flex-col md:flex-row items-start gap-4 justify-between p-6">
            <div className="flex gap-4 items-center ">
              <ResponsiveImage
                src={profile}
                className=" rounded-lg"
                alt="profile"
                width="80px"
                height="80px"
              />

              <h1>Jhon doe</h1>
            </div>

            <div className="flex   gap-2 text-sm">
              <CalendarDays size={15} className="mt-1" />
              <div className="flex flex-col">
                <span>Last update on:</span>

                <span>24 March 2024</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" grid grid-cols-2 md:grid-cols-3  gap-6  items-center  border p-4 rounded-md bg-slate-100 dark:bg-gray-800      ">
              {/*  */}

              {/* First Column */}
              <div className="">
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <Heart
                    size={14}
                    className="text-red-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>Heart Rate</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    140 <span className="text-lg">Bpm</span>
                  </span>
                  <sup className="text-sm font-semibold text-green-500 -mt-2">
                    2<span className="text-sm">%</span>
                  </sup>
                </div>
              </div>

              {/* Second Column */}
              <div className="  ">
                {/* Add justify-self-end here */}
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <FaTemperatureHigh
                    size={14}
                    className="text-red-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>Body Temprature</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    37.5 C
                  </span>
                </div>
              </div>

              {/* glucose level */}

              {/* First Column */}
              <div className="">
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <CopyPlus
                    size={14}
                    className="text-blue-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>Glucose Level</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    70 -90
                  </span>
                  <sup className="text-sm font-semibold text-green-500 -mt-2">
                    6<span className="text-sm">%</span>
                  </sup>
                </div>
              </div>

              {/* Second Column */}
              <div className=" ">
                {/* Add justify-self-end here */}
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <Syringe
                    size={14}
                    className="text-blue-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>SPo2</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    37.5 C
                  </span>
                </div>
              </div>

              {/* First Column */}
              <div className="">
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <Syringe
                    size={14}
                    className="text-red-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>Blood Pressure</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    100 mg/dl
                  </span>
                  <sup className="text-sm font-semibold text-green-500 -mt-2">
                    2<span className="text-sm">%</span>
                  </sup>
                </div>
              </div>

              {/* Second Column */}
              <div className=" ">
                {/* Add justify-self-end here */}
                <div className="text-xs font-extralight flex items-center gap-x-1">
                  <UserPen
                    size={14}
                    className="text-red-400 font-bold"
                    strokeWidth={4}
                  />
                  <span>BMI</span>
                </div>
                <div className="py-1 rounded-lg">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                    20.1 kg/m2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
