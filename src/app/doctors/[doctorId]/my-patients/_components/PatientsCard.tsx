import Avatar from "@/components/Avatar";
import { profile } from "@/images";
import { CalendarDays, Clock, MapPin } from "lucide-react";

interface PatientCardProps {
  patientId: number;
  onPatientClick: (patientId: number) => void;
}

export default function PatientCard({
  patientId,
  onPatientClick,
}: PatientCardProps) {
  return (
    <div className="w-full shadow-md rounded-md p-4 bg-slate-50 dark:bg-gray-800">
      <div className="flex gap-4 items-start">
        <Avatar
          src={profile}
          width="80px"
          height="80px"
          alt="profile"
          className="rounded-lg"
        />
        <div className="flex flex-col">
          <div onClick={() => onPatientClick(patientId)}>
            <h1 className="text-xl font-semibold cursor-pointer ">John Doe</h1>
          </div>
          <p className="text-sm text-gray-500">john@gmail.com</p>
          <p className="flex items-center mt-2">
            <span className="font-semibold text-sm border-r border-gray-300 dark:border-gray-600 pr-2 mr-2 h-4">
              Age: 20
            </span>
            <span className="font-semibold text-sm border-r border-gray-300 dark:border-gray-600 pr-2 mr-2 h-4">
              Male
            </span>
            <span className="font-semibold text-sm h-4">AB+</span>
          </p>
        </div>
      </div>
      <div className="bg-slate-50 dark:bg-gray-950 max-w-96  rounded-md mt-4 p-4 flex-col gap-y-6  ">
        <div className="flex items-center gap-2">
          <Clock size={16} strokeWidth={1.5} />
          <p className="text-sm">2024-02-02</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <MapPin size={16} strokeWidth={1.5} />
          <p className="text-sm">New York, USA</p>
        </div>
      </div>
      <hr className="my-4 border-gray-200 dark:border-gray-700" />
      <div className="flex items-center gap-2">
        <CalendarDays size={16} strokeWidth={1.5} />
        <p className="text-sm">
          <span className="font-semibold">Last booking :</span> 2024-02-02
        </p>
      </div>
    </div>
  );
}
