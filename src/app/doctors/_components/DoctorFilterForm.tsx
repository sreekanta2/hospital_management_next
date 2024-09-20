"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { available, experience, genderOptions, speciality } from "@/constant";
import { Accordian } from "./Accordian";

interface FilterValues {
  gender: string;
  available: string;
  fee: number;
  speciality: string;
  experience: string;
}

export default function DoctorFilterForm() {
  const { handleSubmit, control } = useForm<FilterValues>({
    defaultValues: {
      gender: "",
      available: "",
      fee: 10, // Default fee value for the range input
      speciality: "",
      experience: "",
    },
  });

  const onSubmit: SubmitHandler<FilterValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="col-span-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex my-2">
          <div className="w-full">
            <h2 className="text-xl font-semibold text-vnet-blue mb-2 h-14 p-4 bg-gray-100">
              Filter
            </h2>
            <Accordian
              options={genderOptions}
              title="Gender"
              type="checkbox"
              name="gender"
              control={control}
            />
            <Accordian
              options={available}
              title="Available"
              type="checkbox"
              name="available"
              control={control}
            />
            <Accordian
              type="range"
              title="Consultation Fee"
              name="fee"
              control={control}
            />
            <Accordian
              options={speciality}
              title="Specialty"
              type="checkbox"
              name="speciality"
              control={control}
            />
            <Accordian
              options={experience}
              title="Experience"
              type="checkbox"
              name="experience"
              control={control}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
