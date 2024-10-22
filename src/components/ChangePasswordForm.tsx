"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import InputComponent from "./CustomInput";
import { Button } from "./ui/button";

export default function ChangePasswordForm() {
  const formSchema = z
    .object({
      oldPassword: z
        .string()
        .min(8, "Old password must be at least 8 characters"),
      newPassword: z
        .string()
        .min(8, "New password must be at least 8 characters"),
      confirmPassword: z
        .string()
        .min(8, "Confirm password must be at least 8 characters"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  type FormData = z.infer<typeof formSchema>;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" border mx-6 rounded-md p-6  space-y-4  ">
        <InputComponent
          name="oldPassword"
          control={control}
          label="Old Password"
          error={errors.oldPassword?.message}
          isRequired={true}
        />
        <InputComponent
          name="newPassword"
          control={control}
          label="New Password"
          error={errors.newPassword?.message}
          isRequired={true}
        />
        <InputComponent
          name="confirmPassword"
          control={control}
          label="Confirm Password"
          error={errors.confirmPassword?.message}
          isRequired={true}
        />

        <Button className="py-3 px-4 rounded-md bg-[#09e5ab] transition-transform placeholder-white hover:bg-[#137e61]">
          Save Changes
        </Button>
      </div>
    </form>
  );
}
