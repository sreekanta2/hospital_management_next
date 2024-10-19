"use client";
import InputComponent from "@/components/CustomInput";
import SelectInput from "@/components/SelectInput";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import DoctorLayout from "../_components/DoctorLayout";

// Define Gender Enum
enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export default function ProfileSetting() {
  const genderOptions = [
    { value: Gender.Male, id: 1, label: "Male" },
    { value: Gender.Female, id: 2, label: "Female" },
    { value: Gender.Other, id: 3, label: "Other" },
  ];

  const formSchema = z.object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    first_name: z
      .string()
      .min(3, { message: "First name must be at least 3 characters" }),
    last_name: z
      .string()
      .min(3, { message: "Last name must be at least 3 characters" }),
    phone_number: z
      .string()
      .min(10, { message: "Phone number must be at least 10 characters" }),
    gender: z.nativeEnum(Gender, {
      errorMap: () => ({ message: "Invalid gender" }),
    }),
    birth_date: z.string(),
    clinic_name: z
      .string()
      .min(3, { message: "Clinic name must be at least 3 characters" }),
    clinic_address: z
      .string()
      .min(3, { message: "Clinic address must be at least 3 characters" }),
    address_line_1: z
      .string()
      .min(3, { message: "Address line 1 must be at least 3 characters" }),
    address_line_2: z.string().optional(),
    city: z.string().min(3, { message: "City must be at least 3 characters" }),
    state_province: z
      .string()
      .min(3, { message: "State / Province must be at least 3 characters" }),
    country: z
      .string()
      .min(3, { message: "Country must be at least 3 characters" }),
    postal_code: z
      .string()
      .min(3, { message: "Postal code must be at least 3 characters" }),
    about_me: z.string().optional(),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      gender: Gender.Male,
      birth_date: "",
      clinic_name: "",
      clinic_address: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      state_province: "",
      country: "",
      postal_code: "",
      about_me: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:");
    console.log(data);
  };

  return (
    <DoctorLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 px-6"
      >
        <div className="border rounded-md px-4 py-4">
          <h1 className="mt-2 text-xl font-semibold text-gray-700 mb-4">
            Basic Information
          </h1>
          <hr className="mb-4" />
          <div className="flex gap-6 pb-4 flex-col md:flex-row">
            <div>
              <Image
                src={"/uploads/1729273301471-d1qh1r97.svg"}
                width={120}
                height={120}
                className="relative z-10"
                alt="profile image"
                priority={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputComponent
              name="username"
              control={control}
              label="Username"
              isRequired
              error={errors.username?.message}
            />
            <InputComponent
              name="email"
              control={control}
              label="Email"
              isRequired
              error={errors.email?.message}
            />
            <InputComponent
              name="first_name"
              control={control}
              label="First Name"
              isRequired
              error={errors.first_name?.message}
            />
            <InputComponent
              name="last_name"
              control={control}
              label="Last Name"
              isRequired
              error={errors.last_name?.message}
            />
            <InputComponent
              name="phone_number"
              control={control}
              label="Phone Number"
              error={errors.phone_number?.message}
            />
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <SelectInput
                  {...field}
                  control={control}
                  options={genderOptions}
                  placeholder="Gender"
                  error={errors.gender?.message}
                />
              )}
            />
            <InputComponent
              name="birth_date"
              control={control}
              label="Birth Date"
              isRequired
              error={errors.birth_date?.message}
            />
          </div>
        </div>

        <div className="border rounded-md px-4 py-4">
          <h1 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
            Clinic Info
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputComponent
              name="clinic_name"
              control={control}
              label="Clinic Name"
              isRequired
              error={errors.clinic_name?.message}
            />
            <InputComponent
              name="clinic_address"
              control={control}
              label="Clinic Address"
              isRequired
              error={errors.clinic_address?.message}
            />
          </div>
        </div>

        <div className="border rounded-md px-4 py-4">
          <h1 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
            Contact Details
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputComponent
              name="address_line_1"
              control={control}
              label="Address Line 1"
              isRequired
              error={errors.address_line_1?.message}
            />
            <InputComponent
              name="address_line_2"
              control={control}
              label="Address Line 2"
              error={errors.address_line_2?.message}
            />
            <InputComponent
              name="city"
              control={control}
              label="City"
              isRequired
              error={errors.city?.message}
            />
            <InputComponent
              name="state_province"
              control={control}
              label="State / Province"
              isRequired
              error={errors.state_province?.message}
            />
            <InputComponent
              name="country"
              control={control}
              label="Country"
              isRequired
              error={errors.country?.message}
            />
            <InputComponent
              name="postal_code"
              control={control}
              label="Postal Code"
              isRequired
              error={errors.postal_code?.message}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-blue-500 text-white">
            Save
          </Button>
        </div>
      </form>
    </DoctorLayout>
  );
}
