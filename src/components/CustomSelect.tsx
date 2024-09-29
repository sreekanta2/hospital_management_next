import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

interface CustomSelectProps {
  name?: string; // name is optional now for non-form use
  label: string;
  options: { label: string; value: string }[];
  value?: string; // Value for controlled usage outside form
  onChange?: (value: string) => void; // Handler for controlled usage outside form
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  options,
  value,
  onChange,
}) => {
  const formContext = useFormContext();
  const isInForm = !!name && !!formContext; // Determine if it's being used inside a form

  if (isInForm) {
    // Inside form, controlled by React Hook Form
    return (
      <Controller
        name={name!}
        control={formContext!.control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-24">
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    );
  }

  // Outside form, controlled by local state or props
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, FormProvider } from "react-hook-form";
// import { CustomSelect } from "./CustomSelect";

// const formSchema = z.object({
//   fruit: z.string().nonempty("Please select a fruit"),
// });

// type FormSchema = z.infer<typeof formSchema>;

// export function FruitForm() {
//   const methods = useForm<FormSchema>({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = (data: FormSchema) => {
//     console.log("Selected fruit:", data.fruit);
//   };

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)}>
//         <CustomSelect
//           name="fruit"
//           label="Select a fruit"
//           options={[
//             { label: "Apple", value: "apple" },
//             { label: "Banana", value: "banana" },
//             { label: "Blueberry", value: "blueberry" },
//             { label: "Grapes", value: "grapes" },
//             { label: "Pineapple", value: "pineapple" },
//           ]}
//         />
//         <button type="submit" className="mt-4">
//           Submit
//         </button>
//       </form>
//     </FormProvider>
//   );
// }
// import React, { useState } from "react";
// import { CustomSelect } from "./CustomSelect";

// export function StandaloneSelect() {
//   const [selectedFruit, setSelectedFruit] = useState<string | undefined>(
//     undefined
//   );

//   return (
//     <div>
//       <CustomSelect
//         label="Select a fruit"
//         options={[
//           { label: "Apple", value: "apple" },
//           { label: "Banana", value: "banana" },
//           { label: "Blueberry", value: "blueberry" },
//           { label: "Grapes", value: "grapes" },
//           { label: "Pineapple", value: "pineapple" },
//         ]}
//         value={selectedFruit} // Controlled value from local state
//         onChange={setSelectedFruit} // Handler to update state on selection
//       />
//       <p className="mt-4">Selected fruit: {selectedFruit || "None"}</p>
//     </div>
//   );
// }
