"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

interface SelectOption {
  label: string;
  id: number;
}

interface SelectInputProps {
  name: string;
  control: any;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  control,
  label,
  options,
  placeholder = "Select an option",
  error,
  isRequired = false,
  className,
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="mb-2 flex gap-1 items-center">
          {label}
          {isRequired && <span className="text-red-500">*</span>}{" "}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Select
              onValueChange={(value) => field.onChange(Number(value))}
              value={field.value ? String(field.value) : ""}
            >
              <SelectTrigger className={error ? "ring-1 ring-red-500" : ""}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option?.id} value={option?.id?.toString()}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </>
        )}
      />
    </div>
  );
};

export default SelectInput;
