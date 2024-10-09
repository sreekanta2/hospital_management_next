import Avatar from "@/components/Avatar";
import { profile } from "@/images";
import { ClipboardPlus, EyeIcon, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Dependant() {
  return (
    <div className="border px-4 my-4 py-2 rounded-md ">
      <div className="flex justify-between my-1 ">
        <h1 className="text-xl  font-semibold">Dependant</h1>
        <div className="flex items-center gap-2">
          <PlusCircle />
          <h1>Add New</h1>
        </div>
        <Link href="#">View All</Link>
      </div>
      <hr className="my-2" />

      <div className="flex flex-col gap-2  ">
        {[1, 2, 3].map((dpt) => (
          <div key={dpt}>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-start">
                <Avatar
                  src={profile}
                  alt="profile"
                  className="rounded-lg"
                  width="50px"
                  height="50px"
                />
                <Link href={`#`} className="flex flex-col items-start">
                  <h1 className="text-sm font-semibold">Jhon Doe</h1>
                  <p className="text-gray-500">1234567890</p>
                </Link>
              </div>
              <div className="flex  gap-4  ">
                <div className="h-10 w-10 cursor-pointer hover:bg-blue-500 hover:text-white rounded-full border flex justify-center items-center">
                  <ClipboardPlus size={18} />
                </div>
                <div className="h-10 w-10 cursor-pointer hover:bg-blue-500 hover:text-white rounded-full border flex justify-center items-center">
                  <EyeIcon size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
