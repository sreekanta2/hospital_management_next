import Avatar from "@/components/Avatar";
import IconWrapper from "@/components/IconWrapper";
import PaginationComponent from "@/components/PaginationComponent";
import SearchInput from "@/components/SearchInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { profile } from "@/images";
import {
  CalendarDays,
  CopyPlus,
  Heart,
  Syringe,
  Trash2,
  UserPen,
} from "lucide-react";
import Link from "next/link";
import { FaTemperatureHigh } from "react-icons/fa";
import PatientsLayout from "../_components/PatientsLayout";
import { MedicalDetailsCreatedForm } from "./_components/MedicalDetailsCreatedForm";
import { MedicalDetailsModal } from "./_components/MedicalDetailsModal";
import { MedicalDetailsUpdatedForm } from "./_components/MedicalDetailsUpdateForm";

const headers = [
  "ID",
  "Patient Name",
  "BMI",

  "Heart Rate",
  "FBC Status",
  "Weight",
  "Added on",
  "Action",
];
export default function page() {
  return (
    <PatientsLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl   border-gray-200  border-b pb-2 ">
          Medical Details
        </h1>

        <div>
          <div className="border rounded-md p-4">
            <div className="flex items-center justify-between">
              {/* First div content on the left */}
              <h1>Latest updated medical details</h1>

              {/* Second div content on the right */}
              <div className="flex items-center gap-2">
                <CalendarDays />
                <span>Last update on:</span>
                <span>24 March 2024</span>
              </div>
            </div>
            <hr className="my-2 mb-8" />

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-2 items-center       ">
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
            <div>
              <div className="flex gap-4 justify-between items-center mt-4">
                <SearchInput
                  placeholder="Search for items..."
                  baseUrl={`/patient/1/medical-details`}
                  searchParamKey="q"
                  debounceDelay={500}
                  className="w-fit my-4"
                />

                <MedicalDetailsCreatedForm />
              </div>
              <ScrollArea className="w-5xl whitespace-nowrap rounded-md ">
                <Table className="border rounded-md">
                  <TableHeader className="bg-slate-100 dark:bg-gray-800">
                    <TableRow>
                      {headers.map((header, index) => (
                        <TableHead key={index} className="w-[100px]">
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>

                  <TableBody className="w-full  ">
                    {[1, 2, 3].map((i) => (
                      <TableRow className=" h-14 " key={i}>
                        <TableCell>
                          <p>#AC-1234</p>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-3 items-start">
                            <Avatar
                              src={profile}
                              alt="profile"
                              className="rounded-lg"
                              width="50px"
                              height="50px"
                            />
                            <Link
                              href={`#`}
                              className="flex flex-col items-start"
                            >
                              <h1 className="text-sm font-semibold">
                                Jhon Doe
                              </h1>
                              <p className="text-gray-500">1234567890</p>
                            </Link>
                          </div>
                        </TableCell>

                        <TableCell>23.5</TableCell>
                        <TableCell>89</TableCell>
                        <TableCell>140</TableCell>
                        <TableCell>65kg</TableCell>
                        <TableCell>22 Mar 2024</TableCell>

                        <TableCell className="flex mt-2 gap-4">
                          <MedicalDetailsModal />
                          <MedicalDetailsUpdatedForm />
                          <IconWrapper
                            icon={Trash2}
                            className=" hover:bg-red-200 hover:text-red-400"
                          />
                          {/* <span className="px-2 py-1  bg-[#eaab08]  rounded-full text-xs text-white ">
                    pending
                  </span> */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <ScrollBar orientation="horizontal" />
              </ScrollArea>
              <PaginationComponent
                currentPage={2}
                totalPages={10}
                baseUrl="/patient/2/medical-details"
              />
            </div>
          </div>
        </div>
      </div>
    </PatientsLayout>
  );
}
