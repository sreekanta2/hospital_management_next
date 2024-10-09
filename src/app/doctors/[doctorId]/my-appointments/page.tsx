import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import DoctorLayout from "../_components/DoctorLayout";
import CenclledAppintmentContent from "./_components/CenclledAppintmentContent";
import CompletedApointmentcontent from "./_components/CompletedApointmentcontent";
import UpcomingContent from "./_components/UpcomingContent";

export default function page() {
  return (
    <DoctorLayout>
      <section className="w-full">
        <form className="flex justify-between items-center border-b mb-4">
          <h1 className="text-lg font-bold">Appointments</h1>
          <div className="flex items-center border rounded-md mb-4 ">
            <Input
              placeholder="search"
              type="text"
              className="max-w-40 focus-visible:ring-0 border-0"
            />
            <Search size={14} className="mr-2" />
          </div>
        </form>

        {/* Appointments */}
        <Tabs defaultValue="upcoming" className="w-full h-screen">
          <TabsList className="grid w-full  grid-cols-3     h-12">
            <TabsTrigger
              value="upcoming"
              className=" h-full flex items-center gap-2"
            >
              <span> Upcoming</span>
              <span className=" bg-gray-400 px-1 h-5 rounded-lg flex items-center text-white">
                19
              </span>
            </TabsTrigger>
            <TabsTrigger value="cenclled" className=" h-full gap-2">
              <span> Cenclled</span>
              <span className=" bg-gray-400 px-1 h-5 rounded-lg flex items-center text-white">
                19
              </span>
            </TabsTrigger>
            <TabsTrigger value="completed" className=" h-full gap-2">
              <span> Completed</span>
              <span className=" bg-gray-400 px-1 h-5 rounded-lg flex items-center text-white">
                19
              </span>
            </TabsTrigger>
          </TabsList>
          {/* appointmnet */}

          <div className="flex flex-col gap-4 my-2">
            <UpcomingContent />
            <CenclledAppintmentContent />
            <CompletedApointmentcontent />
          </div>
        </Tabs>
      </section>
    </DoctorLayout>
  );
}
