import Image from "next/image";
import image from "@/assets/search-bg.png";
import { FiMapPin } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-between   max-w-7xl  mx-auto  mt-12 ">
      <div className="relative w-full      h-screen ">
        <Image
          src={image}
          className="w-full absolute md:bottom-14  dark:hidden hidden lg:block  "
          alt="background image"
          priority={true}
        />
        <div className=" absolute px-4   mt-20     w-full flex flex-col items-center    space-y-4">
          <div className="flex flex-col items-center  leading-4">
            <h1 className="text-2xl md:text-4xl font-bold ">
              Search Doctor, Make an Appointment
            </h1>
            <p className=" text-sm  pt-4 font-semibold text-gray-400    ">
              Discover the best doctors, clinic & hospital the city nearest to
              you.
            </p>
          </div>
          <div className="w-full  md:max-w-5xl md:flex gap-6 space-y-4 md:space-y-0  ">
            <div className="w-full">
              <div className="flex items-center gap-2 border rounded px-2 w-full">
                <FiMapPin className="text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search location"
                  className="outline-none border-none w-full"
                />
              </div>
              <p className="text-[13px] mt-1 text-gray-500">
                Based on your Location
              </p>
            </div>
            <div className="w-full ">
              <div className="flex items-center gap-2 border rounded px-2 w-full">
                <FaSearch className="text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                  className="outline-none w-full text-sm border-none"
                />
              </div>
              <p className="text-[13px] mt-1 text-gray-500">
                Ex : Dental or Sugar Check up etc
              </p>
            </div>
            <Button variant="outline" className="w-full md:w-fit">
              <FaSearch className="text-gray-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
