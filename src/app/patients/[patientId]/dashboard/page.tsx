import React from "react";
import PatientsLayout from "../_components/PatientsLayout";
import HeartRateStatus from "./_components/HeartStatus";
import GraphStatus from "./_components/GraphStatus";
import { patientGraphData } from "./_components/constants";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Appointment from "./_components/Appointment";
import Prescription from "./_components/Prescription";
import MedicalRecords from "./_components/MedicalRecords";
import Billing from "./_components/Billing";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function page() {
  return (
    <PatientsLayout>
      <section className="flex flex-col gap-8">
        <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <HeartRateStatus />
          <HeartRateStatus />
          <HeartRateStatus />
          <HeartRateStatus />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-lg text-gray-700 ">Graph status</h1>
          <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {patientGraphData.map((item) => (
              <GraphStatus key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* tabs */}

        <Tabs defaultValue="appointment" className="w-full h-screen">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4  h-fit md:h-12">
            <TabsTrigger value="appointment" className=" h-full">
              Appointment
            </TabsTrigger>
            <TabsTrigger value="prescription" className=" h-full">
              Prescription
            </TabsTrigger>
            <TabsTrigger value="medical-records" className=" h-full">
              Medical Records
            </TabsTrigger>

            <TabsTrigger value="biling" className=" h-full">
              Biling
            </TabsTrigger>
          </TabsList>
          {/* appointmnet */}
          <ScrollArea className="w-[800px] overflow-hidden"></ScrollArea>
          <Appointment />

          <Prescription />
          <MedicalRecords />
          <Billing />
        </Tabs>
      </section>
    </PatientsLayout>
  );
}
