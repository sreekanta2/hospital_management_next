import CustomLink from "@/components/CustomLink";
import NameAndBadge from "@/components/NameAndBadge";
import ResponsiveImage from "@/components/ResponsiveImage";
import StarRating from "@/components/StarRating";

import { profile } from "@/images";

import { CalendarCheck, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function FavouriteDoctorCard() {
  return (
    <section className="border rounded-md w-full text-gray-600 dark:text-gray-400 py-4 px-2">
      <div className="flex gap-x-8 justify-center relative">
        <div className="relative w-20 h-20">
          <ResponsiveImage
            src={profile}
            alt="profile image"
            className="rounded-lg"
            width="80px"
            height="80px"
            priority={true}
          />
        </div>

        <Heart
          fill="#EA580C"
          strokeWidth={0}
          size={30}
          className="border rounded-full p-1 cursor-pointer absolute top-0 right-5"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <NameAndBadge name="Jhon doe" verified className="mt-3" />
        <p className="text-sm text-center font-sans -mt-2">
          MDS - Periodontology and Oral Implantology, BDS
        </p>
        <StarRating rating={1.5} />

        <div className="rounded-xl mt-2 space-y-2">
          <div className="flex gap-x-2 text-sm">
            <CalendarCheck size={15} />
            <span className="-mt-1">Next Availability : 23 Mar 2024</span>
          </div>
          <div className="flex gap-x-2 text-sm">
            <MapPin size={16} />
            <span className="-mt-1">Location : Newyork, USA</span>
          </div>
        </div>
        <p className="text-sm text-center font-sans bg-slate-100 dark:bg-gray-700 dark:text-gray-300 px-4 py-2 rounded-md">
          Last Book on 21 Jan 2023
        </p>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-2 items-center">
        <CustomLink href="#" className="border">
          View Details
        </CustomLink>
        <CustomLink
          href="#"
          className="w-full ring-1 px-4 py-2 hover:bg-blue-600 hover:text-gray-300"
        >
          Book Now
        </CustomLink>
      </div>
    </section>
  );
}
