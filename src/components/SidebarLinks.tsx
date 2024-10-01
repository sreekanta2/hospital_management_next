"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import ResponsiveImage from "./ResponsiveImage";
import profileImage from "@/assets/doctor-thumb-02.jpg";

// Define the type for each option in the sidebar
type SidebarOption = {
  name: string;
  href: string;
};

interface SideBarLinksProps {
  options: SidebarOption[];
  baseUrl: string;
}

export default function SideBarLinks({ baseUrl, options }: SideBarLinksProps) {
  const pathname = usePathname();
  const params = useParams();
  const patientId = params.patientId;

  return (
    <div className="col-span-1 border rounded-md w-full mx-auto mb-10 lg:mb-0">
      <div className="w-full flex justify-center ">
        <Link href="/" className="my-4">
          <ResponsiveImage
            src={profileImage}
            alt="aidroo logo image"
            width="150px"
            height="150px"
            className=" rounded-full "
            priority={true}
          />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        {options.map((option) => {
          // Corrected href construction
          const href = `/${baseUrl}/${patientId}/${option.href}`;
          const isActive = pathname === href;

          return (
            <Link
              href={`/${baseUrl}/${patientId}/${option.href}`}
              key={option.name}
              className={`${
                isActive
                  ? "bg-blue-400 text-white dark:bg-dark dark:text-gray-300"
                  : "text-gray-500 hover:text-white hover:border-0 hover:bg-blue-400 dark:hover:bg-dark"
              } group text-sm leading-6 font-semibold w-full h-10 border-b flex items-center px-4`}
            >
              {option.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
