import Avatar from "@/components/Avatar";
import IconWrapper from "@/components/IconWrapper";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { profile } from "@/images";
import { Check, Clock, Video, X } from "lucide-react";
import Link from "next/link";

// interface RequestsCardProps {
//   id: string;
//   patientId: string;
//   patientName: string;
//   patientPhone: string;
//   patientEmail: string;
//   patientAddress: string;
// }
export default function RequestsCard() {
  return (
    <div className="flex justify-between items-center shadow-sm p-3 rounded-sm hover:shadow-md transition-all duration-300 hover:bg-slate-50 dark:bg-gray-800">
      <div className="flex gap-3 items-center">
        <Avatar
          src={profile}
          alt="profile"
          className="rounded-lg"
          width="70px"
          height="70px"
        />
        <Link href={`#`} className="flex flex-col items-start">
          <p className="text-green-500">1234567890</p>
          <h1 className="text-sm font-semibold flex items-center gap-2">
            <span>Jhon Doe</span>
            <span className="text-green-500 text-xs px-2 py-[2px] rounded-md bg-green-100">
              new
            </span>
          </h1>
        </Link>
      </div>

      <div className="flex gap-1 items-start flex-col justify-end">
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <Clock
            size={22}
            fill="gray"
            strokeWidth={2}
            color="white"
            className="dark:fill-gray-950 dark:stroke-gray-800 dark:color-white"
          />
          <span className="text-sm text-gray-500 dark:text-gray-300">
            11 Nov 2024 10.45 AM
          </span>
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          General checkup
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-sm font-semibold text-gray-500">
          Type of Appointment
        </h1>
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <Video
            size={30}
            fill="#6366f1"
            strokeWidth={2}
            color="white"
            className="dark:fill-gray-950 dark:stroke-gray-800 dark:color-white"
          />
          <span>Video</span>
        </p>
      </div>
      <div className="flex gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <IconWrapper
              icon={Check}
              strokeWidth={3}
              className="hover:bg-green-500 hover:text-white"
            />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Appointment</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to accept this appointment request?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <IconWrapper
          icon={X}
          strokeWidth={3}
          className="hover:bg-red-500 hover:text-white"
        />
      </div>
    </div>
  );
}
