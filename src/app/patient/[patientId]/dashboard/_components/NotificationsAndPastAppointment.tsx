import { CustomSelect } from "@/components/CustomSelect";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import NotificationCard from "../../../../_components/NotificationCard";
import Dependant from "./Dependant";
import PastAppointmentCard from "./PastAppointmentCard";

export default function NotificationsAndPastAppointment() {
  return (
    <div>
      <div className="grid md:grid-cols-5 gap-4   ">
        <div className="w-full  md:col-span-2 border rounded-md p-4">
          <div className="flex justify-between">
            <div className="w-full flex items-center justify-between ">
              <h1 className="text-xl font-semibold text-gray-600 ">
                Notification
              </h1>
              <Link href="#">View All</Link>
            </div>
          </div>
          <hr className="mt-4" />

          <div className=" w-full h-fit my-4  flex flex-col  ">
            {/* <ScrollArea className="w-full whitespace-nowrap rounded-md  "> */}
            <NotificationCard />
            <NotificationCard />
            {/* <ScrollBar orientation="horizontal" /> */}
            {/* </ScrollArea> */}
          </div>
        </div>
        <div className="md:col-span-3 border rounded-md p-4">
          <div className="grid  grid-cols-3 gap-4">
            <h1 className="text-xl font-semibold text-gray-600 ">Analytics</h1>
            <CustomSelect
              label="Select a fruit"
              options={[
                { label: "Apple", value: "apple" },
                { label: "Banana", value: "banana" },
                { label: "Blueberry", value: "blueberry" },
                { label: "Grapes", value: "grapes" },
                { label: "Pineapple", value: "pineapple" },
              ]}
              // Handler to update state on selection
            />
            <CustomSelect
              label="Select a fruit"
              options={[
                { label: "Apple", value: "apple" },
                { label: "Banana", value: "banana" },
                { label: "Blueberry", value: "blueberry" },
                { label: "Grapes", value: "grapes" },
                { label: "Pineapple", value: "pineapple" },
              ]}
            />
          </div>
          <hr className="my-4" />

          <div className="w-full md:col-span-2 border rounded-md px-4">
            <div className="flex justify-between py-4">
              <div className="flex items-center gap-4  ">
                <CalendarDays />
                <h1 className="text-xl font-semibold text-gray-600 ">
                  Appointment
                </h1>
              </div>

              <div className="flex ">
                <ChevronLeft className="cursor-pointer" />
                <ChevronRight className="cursor-pointer" />
              </div>
            </div>
            <hr className="" />
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
              <PastAppointmentCard />
            </div>

            <Dependant />
          </div>
        </div>
      </div>
    </div>
  );
}
