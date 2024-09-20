import { TabsContent } from "@/components/ui/tabs";
import React from "react";

export default function BusinessHour() {
  return (
    <TabsContent value="business-hour">
      {" "}
      <div className=" w-full md:w-1/2 mx-auto border rounded-md  p-2 mb-10">
        <div className="border-b">
          <h1 className=" my-2 flex justify-between font-semibold text-gray-600 ml-2">
            Today
            <span className="text-green-600 bg-green-100 text-sm px-2">
              open now
            </span>
          </h1>
          <p className=" text-sm flex justify-between   text-gray-600 ml-2">
            {new Date().toLocaleDateString()}
            <span className="text-gray-600">07:00 AM - 09:00 PM</span>
          </p>
        </div>
        <div className=" ">
          <p className="  flex justify-between font-bold my-2  text-gray-600 ml-2">
            Sunday
            <span className="text-gray-600 text-sm font-normal">
              07:00 AM - 09:00 PM
            </span>
          </p>
          <p className="  flex justify-between font-bold my-2  text-gray-600 ml-2">
            Sunday
            <span className="text-gray-600 text-sm font-normal">
              07:00 AM - 09:00 PM
            </span>
          </p>{" "}
          <p className="  flex justify-between font-bold my-2  text-gray-600 ml-2">
            Sunday
            <span className="text-gray-600 text-sm font-normal">
              07:00 AM - 09:00 PM
            </span>
          </p>{" "}
          <p className="  flex justify-between font-bold my-2  text-gray-600 ml-2">
            Sunday
            <span className="text-gray-600 text-sm font-normal">
              07:00 AM - 09:00 PM
            </span>
          </p>{" "}
          <p className="  flex justify-between font-bold my-2  text-gray-600 ml-2">
            Sunday
            <span className="text-gray-600 text-sm font-normal">
              07:00 AM - 09:00 PM
            </span>
          </p>
        </div>
      </div>
    </TabsContent>
  );
}
