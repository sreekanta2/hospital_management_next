"use client";
import InputComponent from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function SocialMediaForm() {
  const formSchema = z.object({
    facebook: z.string().url(),
    twitter: z.string().url(),
    instagram: z.string().url(),
    pinterest: z.string().url(),
    linkedin: z.string().url(),
    youtube: z.string().url(),
  });

  type FormData = z.infer<typeof formSchema>;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facebook: "",
      twitter: "",
      instagram: "",
      pinterest: "",
      linkedin: "",
      youtube: "",
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className=" border mx-6 rounded-md p-6 space-y-4  ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <InputComponent
            name="facebook"
            control={control}
            label="Facebook"
            error={errors.facebook?.message}
          />
          <InputComponent
            name="twitter"
            control={control}
            label="Twitter"
            error={errors.twitter?.message}
          />
          <InputComponent
            name="instagram"
            control={control}
            label="Instagram"
            error={errors.instagram?.message}
          />
          <InputComponent
            name="pinterest"
            control={control}
            label="Pinterest"
            error={errors.pinterest?.message}
          />
          <InputComponent
            name="linkedin"
            control={control}
            label="Linkedin"
            error={errors.linkedin?.message}
          />
          <InputComponent
            name="youtube"
            control={control}
            label="Youtube"
            error={errors.youtube?.message}
          />
        </div>
        <Button className="py-3 px-4 rounded-md bg-[#09e5ab] transition-transform placeholder-white hover:bg-[#137e61]">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
