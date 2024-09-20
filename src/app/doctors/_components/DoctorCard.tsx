import image from "@/assets/doctor-thumb-02.jpg";
import successImg from "@/public/assets/success.png";
import CustomLink from "@/components/CustomLink";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import { Dot } from "lucide-react";

export default function DoctorCard() {
  return (
    <div className=" bg-white rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
      <div className="p-2">
        <div className="overflow-hidden">
          <div className="w-full h-56 overflow-hidden rounded-t-lg">
            <Image
              src={image || ""}
              layout="responsive"
              className="   cursor-pointer duration-500 hover:scale-125 transition-transform group-hover:opacity-50"
              alt="background image"
            />
          </div>
        </div>
        <div>
          <div className="flex items-start justify-between mt-2">
            <div>
              <CustomLink
                href={`/doctors/${2}`}
                className="flex gap-4 font-semibold text-lg text-gray-700 hover:text-blue-500"
              >
                Rubey Perrin
              </CustomLink>
              <p className="text-[12px] text-gray-500">Dentist</p>
            </div>
            <div className="px-[3px] rounded-sm flex items-center bg-yellow-500">
              <svg
                className={`h-4 w-4 fill-current ${"text-white"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 0l2.5 7h7.5l-6 5 2.5 7-6-5-6 5 2.5-7-6-5h7.5z" />
              </svg>
              <span className="text-xs py-1 font-semibold text-white">
                {" "}
                4.5
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-500 ">
            <p className="flex     mt-3">
              <span>
                <i className="ri-map-pin-fill  "></i>
              </span>
              <span>Florida,USA</span>
            </p>
            <p className="flex  ">
              <span>
                <i className="ri-time-fill "></i>
              </span>
              <span>Available obn fir,22 Mar</span>
            </p>
            <p className="flex    ">
              <span>
                <i className="ri-money-dollar-box-line  "></i>
              </span>
              <span>$300-500</span>
            </p>
          </div>
          <div className="flex gap-4">
            <CustomLink
              href="/booking"
              className="bg-[#0de0fe] w-full py-2 mt-4 px-4 text-sm text-bold rounded text-white hover:bg-[#0b90a1]"
            >
              Book Now
            </CustomLink>

            {/* <div className="w-full flex items-center   text-center   mt-4   text-sm font-bold rounded bg-[#ccfbf1]  text-green-500 transition-transform duration-500 hover:transition-delay-200">
              <Dot size={40} />
              <span>Avaliable</span>
            </div> */}
            <div className="w-full flex items-center   text-center   mt-4   text-sm font-bold rounded bg-red-200  text-red-500 transition-transform duration-500 hover:transition-delay-200">
              <Dot size={40} />
              <span>unavaliable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
