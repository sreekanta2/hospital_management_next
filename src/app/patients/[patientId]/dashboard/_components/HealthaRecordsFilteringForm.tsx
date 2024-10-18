"use client";
import SelectInput from "@/components/SelectInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function HealthaRecordsFilteringForm() {
  const formSchema = z.object({
    schedule: z.string().optional(),
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectInput
        name="schedule"
        control={control}
        options={[
          { label: "Apple", id: 1 },
          { label: "Banana", id: 2 },
          { label: "Blueberry", id: 3 },
          { label: "Grapes", id: 4 },
          { label: "Pineapple", id: 5 },
        ]}
        placeholder="Select a schedule"
        error={errors.schedule?.message}
      />
    </form>
  );
}
