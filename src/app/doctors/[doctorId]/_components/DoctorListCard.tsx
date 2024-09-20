import LightBox from "@/components/Lightbox";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import Link from "next/link";

import image from "@/assets/doctor-thumb-02.jpg";
import CustomLink from "@/components/CustomLink";

export default function DoctorListCard({}) {
  const indicator = true;
  return (
    <div className="border rounded">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex flex-col md:flex-row  gap-8   ">
          <div>
            <div className="w-full md:w-36 h-auto md:h-36 ">
              <Image src={image} alt="doctor profile" />
            </div>
          </div>
          <div className="flex  flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl text-gray-700  font-semibold">
                Dr. Darren Elder
              </h1>
              <p className="text-sm text-gray-600">
                BDS, MDS - Oral & Maxillofacial Surgery
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 ">
                <span className="text-blue-400">Dentist</span>
              </div>
              <StarRating rating={5} />
              <p className="text-sm text-gray-500">
                <span>icon</span>
                <span> Network, USA - Get Directions</span>
              </p>
            </div>
            <div className="flex ">
              {/* <Image src={}/> */}
              <LightBox />
            </div>
            <div className="flex gap-4 text-sm">
              <span className="py-2 px-4 border text-gray-600 rounded-md ">
                Dental Fillings
              </span>
              <span className="py-2 px-4 border text-gray-600 rounded-md ">
                Teeth Whitneing
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 text-sm text-gray-600 pb-4">
            <p> 99% </p>
            <p>35 Feedback Newyork</p>
            <p> Newyork, USA</p>
            <p>$100 per hour</p>
          </div>
          {/* {indicator && (
            <div className="flex gap-2 py-4 text-gray-600 ">
              <button className="relative flex h-[40px] w-full items-center  rounded-md justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-gray-200 before:duration-200 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px] ">
                <p className=" relative z-10  ri-bookmark-line">fffff</p>
              </button>
            </div>
          )} */}
          <ul className=" flex flex-col gap-4  ">
            {indicator && (
              <CustomLink
                href="/doctor/1/overview"
                className="relative flex px-5 py-2.5 rounded-md items-center justify-center overflow-hidden bg-white  text-gray-700 border border-[#1aa2e1]   transition-all before:absolute before:h-0 before:w-0   before:bg-[#1aa2e1] before:text-blue-600 hover:text-white before:duration-300 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full"
              >
                <span className="relative z-20">View Profile</span>
              </CustomLink>
            )}
            <Link
              href="/doctor/1/overview"
              className="relative flex px-5 py-2.5 rounded-md items-center justify-center overflow-hidden bg-[#1aa2e1] text-white"
            >
              <span className="relative z-20">Booking</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
