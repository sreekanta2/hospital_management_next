"use client";
import { Input } from "@/components/ui/input"; // Import Shadcn UI's Input component
import React from "react";
import { Controller } from "react-hook-form";

interface InputComponentProps {
  name: string;
  control: any; // React Hook Form control
  label: string;
  placeholder?: string;
  error?: string;
  type?: "text" | "number"; // Accepts either 'text' or 'number'
  isRequired?: boolean;
  className?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  name,
  control,
  label,
  placeholder = "",
  error,
  type = "text",
  isRequired = false,
  className,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="mb-2 flex gap-1 items-center">
        {label}
        {isRequired && <span className="text-red-500">*</span>}{" "}
        {/* Show star only if isRequired is true */}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              className={`mt-1 block w-full rounded-md border ${
                error ? "border-red-600" : "border-gray-300"
              } p-2 ${className}`}
              onChange={(e) => {
                // Handle number input conversion
                const value =
                  type === "number" ? Number(e.target.value) : e.target.value;
                field.onChange(value); // Pass the converted value to field.onChange
              }}
              value={field.value || ""} // Handle controlled value
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </>
        )}
      />
    </div>
  );
};

export default InputComponent;
