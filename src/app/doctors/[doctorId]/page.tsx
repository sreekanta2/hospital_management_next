import React from "react";
import DoctorListCard from "./_components/DoctorListCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./_components/Overview";
import Location from "./_components/Location";
import BusinessHour from "./_components/BusinessHour";
import Review from "./_components/Review";

export default function page() {
  return (
    <div className="max-w-[1040px] px-6 mx-auto mt-24 relative">
      <DoctorListCard />
      <Tabs defaultValue="overview" className="w-full my-10 border">
        <TabsList className="w-full flex flex-col md:flex-row h-auto justify-between md:px-10 md:h-12 rounded-none">
          <TabsTrigger value="overview" className="w-full h-8">
            Overview
          </TabsTrigger>
          <TabsTrigger value="location" className="w-full h-8">
            Location
          </TabsTrigger>
          <TabsTrigger value="review" className="w-full h-8">
            Review
          </TabsTrigger>
          <TabsTrigger value="business-hour" className="w-full h-8">
            Business Hour
          </TabsTrigger>
        </TabsList>
        {/* overview */}
        <Overview />
        {/* location */}
        <Location />
        {/* review */}
        <Review />
        <BusinessHour />
      </Tabs>
    </div>
  );
}
