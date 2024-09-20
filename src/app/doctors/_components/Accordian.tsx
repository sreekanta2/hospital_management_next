"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Controller, Control } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface AccordianProps {
  type: "checkbox" | "range";
  options?: Option[];
  title: string;
  name: string;
  control: Control<any>;
}

export const Accordian: React.FC<AccordianProps> = ({
  type,
  options = [],
  title,
  name,
  control,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white my-2 shadow-lg">
      <div
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </div>

      <div
        className="overflow-hidden max-h-0 ps-4 duration-500 transition-all flex flex-col"
        style={{ maxHeight: isOpen ? "1000px" : "0" }}
      >
        {type === "checkbox" && options && (
          <>
            {options.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 space-y-3"
              >
                <Controller
                  name={name}
                  control={control}
                  render={({ field }) => (
                    <>
                      <Checkbox
                        checked={field.value === option.value} // Ensure only one checkbox can be selected
                        onCheckedChange={(checked) =>
                          field.onChange(checked ? option.value : "")
                        }
                        id={option.value}
                      />
                      <label
                        htmlFor={option.value}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </>
                  )}
                />
              </div>
            ))}
          </>
        )}

        {type === "range" && (
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <div className="px-4">
                <label
                  htmlFor="default-range"
                  className="w-full mb-2 text-sm flex justify-between font-medium text-gray-900 dark:text-white"
                >
                  <span>$10</span>
                  <span>$1000</span>
                </label>
                <input
                  id="default-range"
                  type="range"
                  min={10}
                  max={1000}
                  value={field.value || 10}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <span>{field.value || 10}</span>
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
};
