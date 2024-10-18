"use client";
import InputComponent from "@/components/CustomInput";
import SelectInput from "@/components/SelectInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

// Define the Zod schema for validation
const formSchema = z.object({
  items: z.array(
    z.object({
      price: z.number().min(1, { message: "Price is required" }),
      specialty: z.number().min(1, { message: "Please select a specialty" }),
      service: z.number().min(1, { message: "Please select a service" }),
      description: z.string().min(1, { message: "Description is required" }),
    })
  ),
});

type FormData = z.infer<typeof formSchema>;

const specialties = [
  { id: 1, label: "Cardiology" },
  { id: 2, label: "Dermatology" },
  { id: 3, label: "Pediatrics" },
];

const services = [
  { id: 1, label: "Pediatric" },
  { id: 2, label: "Cardiology" },
  { id: 3, label: "Dermatology" },
];

export default function SpecialtiesServiceForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [
        { price: 0, specialty: 0, service: 0, description: "" }, // Default item
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items", // Name of the field array
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const addNewItem = () => {
    append({ price: 0, specialty: 0, service: 0, description: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id} className="mb-4 flex gap-4 flex-wrap columns-3">
          <SelectInput
            name={`items.${index}.specialty`}
            control={control}
            label="Specialty"
            options={specialties}
            placeholder="Select a specialty"
            error={errors.items?.[index]?.specialty?.message}
            isRequired={true}
            className="w-1/3"
          />

          <SelectInput
            name={`items.${index}.service`}
            control={control}
            label="Service"
            options={services}
            placeholder="Select a service"
            error={errors.items?.[index]?.service?.message}
            isRequired={false}
            className="w-full md:w-fit"
          />

          <InputComponent
            name={`items.${index}.price`}
            control={control}
            label="Price"
            placeholder="Enter price"
            error={errors.items?.[index]?.price?.message}
            type="number"
            isRequired={true}
            className="w-full md:w-fit"
          />

          <InputComponent
            name={`items.${index}.description`}
            control={control}
            label="Description"
            placeholder="Enter description"
            error={errors.items?.[index]?.description?.message}
            isRequired={true}
            className="w-full md:w-fit"
          />

          <button
            type="button"
            onClick={() => remove(index)} // Remove current item
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addNewItem} className="mb-4">
        Add New Item
      </button>

      <button type="submit">Submit</button>
    </form>
  );
}
