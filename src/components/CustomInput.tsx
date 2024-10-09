import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";
// Utility function to handle conditional class names

type InputProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  type?: string;
  placeholder?: string;
};

const CustomInput: React.FC<InputProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      }
      <Input type={type} placeholder={placeholder} {...register(name)} />
      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default CustomInput;

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import Input from "./Input";

// const schema = z.object({
//   firstName: z.string().min(1, "First Name is required"),
//   email: z.string().email("Invalid email address"),
// });

// type FormValues = z.infer<typeof schema>;

// const MyForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data: FormValues) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <Input
//         label="First Name"
//         name="firstName"
//         register={register}
//         error={errors.firstName}
//         placeholder="Enter your first name"
//       />
//       <Input
//         label="Email"
//         name="email"
//         register={register}
//         error={errors.email}
//         type="email"
//         placeholder="Enter your email"
//       />
//       <button
//         type="submit"
//         className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-900"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default MyForm;
