"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ResponsiveImage from "./ResponsiveImage";
import profileImage from "@/assets/doctor-thumb-02.jpg";

// Define the type for each option in the sidebar
type SidebarOption = {
  name: string;
  href: string;
};

interface SideBarLinksProps {
  options: SidebarOption[];
  baseUrl: string; // Corrected from basuUrl to baseUrl
}

export default function SideBarLinks({ baseUrl, options }: SideBarLinksProps) {
  const pathname = usePathname();

  return (
    <div className="col-span-1 border rounded-md">
      <div className="lg:inset-y-0 lg:flex lg:w-full lg:flex-col">
        <div className="flex grow flex-col gap-5">
          <div className="w-44 mx-auto">
            <Link href="/" className="my-4">
              <ResponsiveImage
                src={profileImage}
                alt="aidroo logo image"
                width={500}
                height={300}
                className="rounded-full my-4"
              />
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            {options.map((option) => {
              // Corrected href construction
              const href = `/${baseUrl}/${1}/${option.href}`;
              const isActive = pathname === href;

              return (
                <div
                  key={option.name}
                  className={`${
                    isActive
                      ? "bg-blue-400 text-white dark:bg-dark dark:text-gray-300"
                      : "text-gray-500 hover:text-white hover:border-0 hover:bg-blue-400 dark:hover:bg-dark"
                  } group text-sm leading-6 font-semibold w-full h-10 border-b flex items-center px-4`}
                >
                  <Link href={href}>{option.name}</Link>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
