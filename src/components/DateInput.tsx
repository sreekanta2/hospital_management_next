import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

interface DateInputProps {
  label: string;
  name: string;
  control: any; // Replace with proper control type from react-hook-form
  placeholder?: string;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  name,
  control,
  placeholder = "Select date",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // Focus the input and show the date picker
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              {/* Calendar icon at the start of the input */}
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
              {/* Input with datepicker */}
              <Input
                {...field}
                ref={inputRef}
                type="date"
                onFocus={handleFocus}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DateInput;
