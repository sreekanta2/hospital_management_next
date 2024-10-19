"use client";
import FileInput from "@/components/FileInput";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { File } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define schema using zod
const FormSchema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  dob: z.string().min(1, "Date of birth is required."),
  phoneNumber: z.string().min(7, "Phone Number is required."),
  email: z.string().email("Enter a valid email."),
  bloodGroup: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});

export function PatientProfileSettingsForm() {
  const [images, setImages] = useState<string[]>([]);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phoneNumber: "",
      bloodGroup: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Include images in the submitted data
    const submissionData = {
      ...data,
      images: images,
    };
    console.log(submissionData);
  }
  console.log(images);
  return (
    <div className="w-full p-6">
      <div className="w-full  p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* profiel image */}
            {/* Profile Image */}
            <div className="border p-4 rounded-md">
              <div className="flex gap-4">
                {images.length > 0 ? (
                  images.map((image) => {
                    console.log("image", image);
                    return (
                      <ResponsiveImage
                        key={image}
                        src={image}
                        width="100px"
                        height="100px"
                        alt="profile image"
                        className="rounded-md"
                      />
                    );
                  })
                ) : (
                  <File size={100} className="border rounded-md p-4" />
                )}
                <div className="flex flex-col gap-2">
                  <h1 className="">Profile Image</h1>
                  <div className="flex items-start gap-2">
                    <FileInput
                      setImages={setImages}
                      images={images}
                      maxFiles={1}
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm mt-2">
                Your image should be below 3 MB, accepted formats: jpg, png,
                svg.
              </p>
            </div>
            {/* information */}

            <h1 className="text-xl">Information</h1>

            <div className="border rounded-md p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="date of birth"
                        type="date"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="phone number"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bloodGroup"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Blood group</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* address */}
            <h1 className="text-xl">Address</h1>
            <div className="border rounded-md p-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input placeholder="state" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input placeholder="Country" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Zip code</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="zip code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-[#0de0fe]">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
