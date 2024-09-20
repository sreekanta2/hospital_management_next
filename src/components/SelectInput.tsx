import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Define the type for the option prop
type Option = {
  value: string;
  label: string;
};

// Define the props for the SelectInput component
interface SelectInputProps<T extends FieldValues> {
  name: Path<T>; // Path to a key in the form values object
  control: Control<T>;
  options: Option[];
  defaultValue?: PathValue<T, Path<T>>; // Ensure defaultValue is compatible
  label?: string;
  placeholder?: string;
  rules?: Record<string, any>;
  onChange?: (value: string) => void;
}

export default function SelectInput<T extends FieldValues>({
  name,
  control,
  options,
  defaultValue,
  label,
  placeholder,
  rules,
  onChange,
}: SelectInputProps<T>) {
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
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              onValueChange={(value: string) => {
                field.onChange(value); // Update react-hook-form value
                if (onChange) onChange(value); // Call external onChange if provided
              }}
              value={field.value || placeholder || ""} // Handle default and selected value
            >
              <SelectTrigger className="w-full">
                <SelectValue>
                  {field.value
                    ? options.find((option) => option.value === field.value)
                        ?.label
                    : placeholder}{" "}
                  {/* Display placeholder if no value is selected */}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Error Message */}
            {error && (
              <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
}
