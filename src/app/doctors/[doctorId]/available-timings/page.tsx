import DoctorLayout from "../_components/DoctorLayout";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import TabsContents from "./_components/TabsContents";

export default function page() {
  const sidebarOptions = [
    {
      name: "SATURDAY",
      href: "/doctor/schedule/saturday",
      icon: <X className="" />,
    },
    {
      name: "SUNDAY",
      href: "/doctor/schedule/sunday",
      icon: <X className="" />,
    },
    {
      name: "MONDAY",
      href: "/doctor/schedule/monday",
    },
    {
      name: "TUESDAY",
      href: "/doctor/schedule/tuesday",
      icon: <X className="" />,
    },
    {
      name: "WEDNESDAY",
      href: "/doctor/schedule/wednesday",
      icon: <X className="" />,
    },
    {
      name: "THURSDAY",
      href: "/doctor/schedule/thursday",
      icon: <X className="" />,
    },
    {
      name: "FRIDAY",
      href: "/doctor/schedule/friday",
      icon: <X className="" />,
    },
  ];
  return (
    <DoctorLayout>
      <div className="  p-4   ">
        <div>
          <h1 className="text-xl text-gray-600 font-semibold mb-4">
            Schedule Timings
          </h1>
          <hr className="my-4" />
        </div>

        <Tabs defaultValue="generalavailability">
          <TabsList className="flex justify-start items-center h-10 gap-4 w-fit">
            <TabsTrigger value="generalavailability">
              General Availability
            </TabsTrigger>
            <TabsTrigger value="clinicavailability">
              Clinic Availability
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generalavailability">
            <Tabs defaultValue="upcoming" className="w-full my-10  ">
              <TabsList className=" flex  flex-wrap h-auto  md:justify-between   ">
                {
                  sidebarOptions.map((link, index) => (
                    <TabsTrigger
                      key={index}
                      value={link.name}
                      className="w-fit px-4  h-10"
                    >
                      {link.name}
                    </TabsTrigger>
                  ))
                  // Add the other tabs here for "past" and "cancelled" tabs as well.
                }
              </TabsList>

              {/* Content for the "upcoming" tab */}

              {sidebarOptions.map((link, index) => (
                <TabsContents key={index} value={link.name} />
              ))}
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </DoctorLayout>
  );
}
