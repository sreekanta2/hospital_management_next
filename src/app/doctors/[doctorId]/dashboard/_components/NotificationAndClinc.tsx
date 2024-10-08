"use client";

import NotificationCard from "@/app/_components/NotificationCard";
import { Link } from "lucide-react";
import ClinicCard from "./ClinicCard";

export default function NotificationAndClinc() {
  return (
    <div>
      <div className="grid md:grid-cols-5 gap-4   ">
        <div className="w-full  md:col-span-2 border  rounded-md p-4">
          <div className="flex justify-between">
            <div className="w-full flex items-center justify-between ">
              <h1 className="text-xl font-semibold text-gray-600 ">
                Notification
              </h1>
              <Link href="#">View All</Link>
            </div>
          </div>
          <hr className="mt-4" />

          <div className=" w-full h-fit my-4  flex flex-col b  ">
            {/* <ScrollArea className="w-full whitespace-nowrap rounded-md  "> */}
            <NotificationCard />
            <NotificationCard />
            {/* <ScrollBar orientation="horizontal" /> */}
            {/* </ScrollArea> */}
          </div>
        </div>
        <div className="md:col-span-3 border rounded-md p-4">
          <h1 className="text-xl font-semibold text-gray-600 ">
            Clinics & Availability
          </h1>

          <hr className="my-4" />

          <div className="w-full md:col-span-2  rounded-md ">
            {/* <Carousel
          opts={{
            align: "start",
          }}
          className="w-24"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3">1</CarouselItem>
            <CarouselItem className="basis-1/3">5</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselItem className="basis-1/3">6</CarouselItem>
            <CarouselPrevious />
            <CarouselNext />
          </CarouselContent>
        </Carousel> */}
            <div className=" w-full my-4 flex flex-col gap-4 ">
              <ClinicCard />
              <ClinicCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
