import Image from "next/image";
import icon from "../../../assets/icon-01.png";
import StarRating from "@/components/StarRating";
import { profile } from "@/images";

export default function ReviewCard() {
  return (
    <div className="  w-full px-3   border-b rounded-md  ">
      <div className="">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex md:flex-col lg:flex-row gap-4 items-center">
            <div className="w-14 h-14   rounded-full border flex items-center justify-center overflow-hidden">
              <Image
                src={profile}
                width={500}
                height={300}
                alt="icon"
                priority={true}
              />
            </div>
            <div>
              <h1 className="text-gray-700">Daren </h1>
              <p className="text-sm text-gray-400">Reviewed by 2 days ago</p>
              <StarRating rating={5} />
            </div>
          </div>
        </div>
        <div className=" ml-4    ">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptas ea fugiat cumque odit delectus aliquid. Aut, inventore?
            Culpa, tempora.
          </p>
          <button className=" text-cyan-300 py-2">Replay</button>
        </div>
      </div>
      {/* replay review */}
      <div className="ml-12">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className=" font-medium text-gray-900 whitespace-nowrap dark:text-white flex md:flex-col lg:flex-row gap-4 items-center">
            <div className="w-14 h-14    rounded-full border flex items-center justify-center overflow-hidden">
              <Image
                src={profile}
                width={500}
                height={300}
                alt="icon"
                priority={true}
              />
            </div>
            <div>
              <h1 className="text-gray-700">Daren </h1>
              <p className="text-sm text-gray-400">Reviewed by 2 days ago</p>
            </div>
          </div>

          <div className="flex items-center">
            <StarRating rating={5} />
          </div>
        </div>
        <div className="md:ml-12 my-2 ">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptas ea fugiat cumque odit delectus aliquid. Aut, inventore?
            Culpa, tempora.
          </p>
        </div>
      </div>
    </div>
  );
}
