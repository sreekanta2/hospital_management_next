import Avatar from "@/components/Avatar";
import Link from "next/link";

export default function RecentPatientCard() {
  return (
    <div className="w-full flex  flex-col bg-slate-50  py-3 px-4 rounded-md dark:bg-gray-800  ">
      <div className="flex gap-3 items-start">
        <Avatar className="rounded-lg" width="80px" height="80px" />
        <Link href={`#`} className="flex flex-col items-start">
          <h1 className="text-sm font-semibold">Jhon Doe</h1>
          <p className="text-gray-500">1234567890</p>
        </Link>
      </div>
      <hr className="my-2 dark:border-gray-600" />

      <div className="flex flex-col ">
        <span className="text-gray-500 ">Last Appointment</span>
        <span className="text-gray-500 text-sm">12 march 2024</span>
      </div>
    </div>
  );
}
