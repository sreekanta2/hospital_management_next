"use client";

import SelectInput from "@/components/SelectInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schedule = [
  { id: 1, label: "Scheduled" },
  { id: 2, label: "Completed" },
  { id: 3, label: "Cancelled" },
];

export default function AppointmentFilterForm() {
  const formSchema = z.object({
    schedule: z.string({
      message: "Schedule is required",
    }),
  });
  type FormData = z.infer<typeof formSchema>;
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schedule: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
      <div className="w-full">
        <h1 className="text-xl font-semibold text-gray-600">Analtics</h1>
      </div>

      <SelectInput
        name="schedule"
        control={control}
        options={schedule}
        placeholder="Select a schedule"
        error={errors.schedule?.message}
        isRequired={true}
        className="w-1/3"
      />
    </form>
  );
}
