import PaginationComponent from "@/components/PaginationComponent";
import ResponsiveImage from "@/components/ResponsiveImage";
import TitleSelectcomponent from "@/components/TitleSelectcomponent";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profile } from "@/images";
import { MoveUp, Video } from "lucide-react";
import { FaUserClock, FaUserInjured } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import DoctorLayout from "../_components/DoctorLayout";
import AppoinmentCard from "./_components/AppoinmentCard";
import { AppoinmentsCharts } from "./_components/AppointmentsChart";
import InvoiceCard from "./_components/InvoiceCard";
import NotificationAndClinc from "./_components/NotificationAndClinc";
import RecentPatientCard from "./_components/RecentPatientCard";
import { RevenueCharts } from "./_components/RevenueCharts";

export default function Page() {
  return (
    <DoctorLayout>
      <div className="space-y-8 mb-10">
        {/* status and apointment */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6  ">
          {/* status */}
          <div className=" w-fullcol-span-1 flex flex-col gap-4 ">
            <div className=" border p-2 h-full rounded-md bg-slate-100 dark:bg-gray-800 ">
              <div className="w-full  flex justify-between items-center p-4">
                <div className="flex flex-col gap-3">
                  <h1>Total Patient</h1>
                  <span className="text-xl font-semibold ">975</span>
                  <span className="text-sm text-green-300  flex items-start">
                    <MoveUp size={14} className="mt-1" /> 15% From Last Week
                  </span>
                </div>
                <div className="w-12 h-12 flex justify-center items-center bg-slate-200 dark:bg-gray-950 rounded-lg">
                  <FaUserInjured size={30} strokeWidth={0} fill="#7C909C" />
                </div>
              </div>
            </div>
            <div className=" border p-2 h-full rounded-md bg-slate-100 dark:bg-gray-800 ">
              <div className="w-full  flex justify-between items-center p-4">
                <div className="flex flex-col gap-3">
                  <h1>Patients Today</h1>
                  <span className="text-xl font-semibold ">95</span>
                  <span className="text-sm text-red-300  flex items-start">
                    <MoveUp size={14} className="mt-1" /> 15% From Yesterday
                  </span>
                </div>
                <div className="w-12 h-12 flex justify-center items-center bg-slate-200 dark:bg-gray-950 rounded-lg">
                  <FaUserClock size={30} strokeWidth={0} fill="#7C909C" />
                </div>
              </div>
            </div>
            <div className=" border p-2 h-full rounded-md bg-slate-100 dark:bg-gray-800 ">
              <div className="w-full  flex justify-between items-center p-4">
                <div className="flex flex-col gap-3">
                  <h1>Appointments Today</h1>
                  <span className="text-xl font-semibold ">75</span>
                  <span className="text-sm text-green-400  flex items-start">
                    <MoveUp size={14} className="mt-1" /> 15% From Last Week
                  </span>
                </div>
                <div className="w-12 h-12 flex justify-center items-center bg-slate-200 dark:bg-gray-950 rounded-lg">
                  <FaCalendarDays size={30} strokeWidth={0} fill="#7C909C" />
                </div>
              </div>
            </div>
          </div>

          {/* appointments */}
          <div className="w-full col-span-2 border p-4 rounded-md mt-8 md:mt-0">
            <TitleSelectcomponent title="Appointment" />

            <div className="mt-2 flex flex-col gap-2">
              <AppoinmentCard />
              <AppoinmentCard />
              <AppoinmentCard />
              <AppoinmentCard />
              <AppoinmentCard />
              <PaginationComponent
                totalPages={10}
                initialLimit={5}
                currentPage={1}
                baseUrl="/"
              />
            </div>
          </div>

          {/* overview */}
        </div>
        {/* weekly overview */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-x-4    ">
          <div className="w-full cols-span-1 border p-4 rounded-md">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Weekly Overview</h1>
              <p className="text-sm">Mar 14 - Mar 21</p>
            </div>
            <hr className="my-4" />
            {/* chats */}
            <Tabs defaultValue="revenue">
              <TabsList className="bg-transparent  ">
                <TabsTrigger
                  value="revenue"
                  className="border-b-2 border-transparent data-[state=active]:border-green-500 data-[state=active]:text-green-600 data-[state=active]:rounded-none px-0 mr-4"
                >
                  <h1>Revenue</h1>
                </TabsTrigger>
                <TabsTrigger
                  value="appointment"
                  className="border-b-2 border-transparent data-[state=active]:border-green-600 data-[state=active]:rounded-none px-0 data-[state=active]:text-green-600"
                >
                  <h1>Appointments</h1>
                </TabsTrigger>
              </TabsList>

              <RevenueCharts />
              <AppoinmentsCharts />
            </Tabs>

            {/* recent patient */}
            <div className="w-full col-span-2    rounded-md mt-8 ">
              <h1 className="text-xl font-semibold">Recent patients</h1>
              <hr className="my-4" />

              <div className="mt-2 flex flex-col gap-4">
                <RecentPatientCard />
                <RecentPatientCard />
                {/* <RecentPatientCard />
                <RecentPatientCard />
                <RecentPatientCard />
                <RecentPatientCard /> */}
              </div>
            </div>
          </div>
          <div className="w-full col-span-2  relative ">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[url('https://i.ibb.co.com/MkHBTwK/dashboard-circle-bg.png')] bg-cover bg-no-repeat"></div>
            <div className="p-4 bg-[#0EA5E9] rounded-md flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-white">
                Upcoming Appointments
              </h1>

              <div className=" w-full grid grid-cols-2 md:gap-2 text-white ">
                <div className="flex ">
                  <div className="flex gap-3 items-star ">
                    <ResponsiveImage
                      src={profile}
                      alt="Profile icon"
                      width="60px"
                      height="60px"
                      priority={true}
                      className={`  rounded-md`}
                    />

                    <div className="flex flex-col  gap-3 text-white">
                      <h1 className=" font-medium">Name</h1>
                      <h1 className="text-xs text-gray-200">#00210</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <h1>General Checkup</h1>
                  <h1>
                    <span>Today</span> <span>12:00 </span>
                  </h1>
                </div>
              </div>

              <hr className="my-4" />

              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex gap-2 items-center">
                  <Video
                    size={10}
                    color="#0EA5E9"
                    strokeWidth={2}
                    className="w-10 h-10  p-2 rounded-full bg-slate-50   grid place-items-center     hover:text-white transition-colors duration-300"
                  />
                  <span className="text-white"> Appointment</span>
                </div>
                <div className="flex gap-2">
                  <button className="w-fit bg-white text-[#0EA5E9] rounded-md hover:bg-[#0EA5E9] hover:text-white transition-colors duration-300 px-4 py-2 border border-transparent">
                    Chat
                  </button>
                  <button className="w-fit bg-white text-[#0EA5E9] rounded-md hover:bg-[#0EA5E9] hover:text-white transition-colors duration-300 px-4 py-2 border border-transparent">
                    Start appointment
                  </button>
                </div>
              </div>
            </div>

            {/* recent invoise */}
            <div className="w-full col-span-2 border p-4 rounded-md mt-8  ">
              <h1 className="text-xl font-semibold">Recent Invoices</h1>
              <hr className="my-4" />

              <div className="mt-2 flex flex-col gap-4">
                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
                <PaginationComponent
                  totalPages={10}
                  initialLimit={5}
                  currentPage={1}
                  baseUrl="/"
                />
              </div>
            </div>
          </div>
        </div>
        {/* notification and clinic */}
        <NotificationAndClinc />
      </div>
    </DoctorLayout>
  );
}
