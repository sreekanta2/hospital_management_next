import { BadgeCheck } from "lucide-react";
import React from "react";

interface BadgeCheck {
  className?: string;
  name: string;
  verified?: boolean;
}
export default function NameAndBadge({
  name,
  verified = false,
  className,
}: BadgeCheck) {
  return (
    <div
      className={`text-gray-600 dark:text-gray-300  font-semibold block ${className}`}
    >
      <span className={`text-justify text-lg  `}>{name}</span>

      {verified && (
        <span className="inline-block align-baseline ms-2 -mt-1">
          <BadgeCheck className="  inline-block text-green-500" size={15} />
        </span>
      )}
    </div>
  );
}
