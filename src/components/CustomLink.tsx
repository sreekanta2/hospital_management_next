import Link from "next/link";
import React from "react";

// Define the prop types for CustomLink component
interface CustomLinkProps {
  href: string; // URL to navigate to
  children: React.ReactNode;
  className?: string; // Content inside the link
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <Link
      href={href}
      className={`w-full h-10  rounded-sm  flex items-center justify-center ${className}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
// className =
//   "relative flex px-5 py-2.5 rounded-md items-center justify-center overflow-hidden bg-white  text-gray-700 border border-[#1aa2e1]   transition-all before:absolute before:h-0 before:w-0   before:bg-[#1aa2e1] before:text-blue-600 hover:text-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full";
