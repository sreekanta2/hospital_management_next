"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type TitleSelectcomponentProps = {
  title: string;
};

export default function TitleSelectcomponent({
  title,
}: TitleSelectcomponentProps) {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  type FormValues = {
    option: string;
    title: string;
  };
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Handle form submission logic here
  };
  return (
    <div className="flex justify-between border-b pb-2   ">
      {title && <h1>{title}</h1>}
    </div>
  );
}
