import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { Input } from "./ui/input";
import { FormMessage } from "./ui/form";

// Define the props for the InputField component
interface InputFieldProps<T extends FieldValues> {
  name: Path<T>; // Path to a key in the form values object
  control?: Control<T>;
  defaultValue?: PathValue<T, Path<T>>; // Default value should match the field's type
  label?: string;
  placeholder?: string;

  type?: string; // Allow different input types like text, email, password, etc.
  rules?: Record<string, any>;
}

export default function FormInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  label,
  placeholder,
  type = "text", // Default to text input
  rules,
}: // Default to false if not specified
InputFieldProps<T>) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name as string}
          className="mb-2 block text-sm font-medium"
        >
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue as PathValue<T, Path<T>>} // Ensure defaultValue matches the expected type
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              id={name as string}
              type={type}
              placeholder={placeholder}
              {...field} // Spread field properties (value, onChange, etc.)
              className="w-full p-2 border border-gray-300 rounded-md"
            />

            {/* Error Message */}
            <FormMessage />
          </>
        )}
      />
    </div>
  );
}
