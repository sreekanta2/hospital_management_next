import Image from "next/image";

import heartImage from "@/assets/pt-dashboard-01.png";
export default function HeartRateStatus() {
  return (
    <div className=" relative flex flex-col justify-center items-center py-6 gap-y-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-14 h-14">
        <Image
          src={heartImage}
          alt="heat image"
          className=""
          width={40}
          height={40}
        />
      </div>
      <h1 className="font-bold text-gray-600">Heart Rate</h1>
      <span className="text-sm">
        <sup className=" text-semibold text-lg ">12</sup> bpm
      </span>
    </div>
  );
}
