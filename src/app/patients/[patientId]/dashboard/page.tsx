"use client";
import PatientsLayout from "../_components/PatientsLayout";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Appointment from "./_components/Appointment";
import Prescription from "./_components/Prescription";
import MedicalRecords from "./_components/MedicalRecords";
import Billing from "./_components/Billing";
import { ScrollArea } from "@/components/ui/scroll-area";

import HealthRecords from "./_components/HealthRecords";
import AppointmentsAnalytics from "./_components/AppointmentsAnalytics";
import NotificationsAndPastAppointment from "./_components/NotificationsAndPastAppointment";

export default function PatientDashboard() {
  return (
    <PatientsLayout>
      <section className="flex flex-col gap-8">
        <h1 className="text-xl font-bold ">Dashboard</h1>

        <hr />
        {/* health records */}
        <HealthRecords />
        {/* appointments analytics */}
        <AppointmentsAnalytics />
        {/* tabs */}
        <NotificationsAndPastAppointment />
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
