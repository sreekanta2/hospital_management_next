"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ResponsiveImage from "@/components/ResponsiveImage";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/ui/FileInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { File } from "lucide-react";
import { useEffect, useState } from "react";

// Define schema using zod
const FormSchema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters."),
  lastName: z.string().min(2, "Relationship must be at least 2 characters."),
  dob: z.string().min(1, "Date of birth is required."),
  uploadFile: z.any().optional(), // Make uploadFile optional for submission
  phoneNumber: z.string().min(7, "Phone Number is required."),
  email: z.string().min(2, "email is required."),
  bloodGroup: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});

export function PatientProfileSettingsForm() {
  // State to hold the image preview URL
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // Initialize form with react-hook-form and zod
  const form = useForm<z.infer<typeof FormSchema>>({
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
      uploadFile: null,
      zipCode: "",
    },
  });

  // Handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("dob", data.dob);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);

    if (data.bloodGroup) formData.append("bloodGroup", data.bloodGroup);
    if (data.address) formData.append("address", data.address);
    if (data.city) formData.append("city", data.city);
    if (data.state) formData.append("state", data.state);
    if (data.zipCode) formData.append("zipcode", data.zipCode.toString());
    if (data.country) formData.append("country", data.country);
    if (data.uploadFile) formData.append("uploadFile", data.uploadFile);
  }

  // Handle file change
  const handleFileChange = (file: File | null) => {
    // Reset the preview if no file is selected
    if (!file) {
      setImagePreview(null);
      return;
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    const isValidType = validTypes.includes(file.type);

    // Validate file size (3 MB = 3 * 1024 * 1024 bytes)
    const isValidSize = file.size <= 2 * 1024 * 1024;

    if (!isValidType) {
      alert("Please upload a file of type: jpg, png, or svg.");
      form.setValue("uploadFile", null); // Reset the file input
      return;
    }

    if (!isValidSize) {
      alert("Please upload a file smaller than 3 MB.");
      form.setValue("uploadFile", null); // Reset the file input
      return;
    }

    // If validation passes, update the form and set the image preview
    form.setValue("uploadFile", file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  // Clean up the object URL when component unmounts
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div className="w-full  p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* profiel image */}
          <div className="border p-4 rounded-md">
            <div className="flex gap-4">
              {imagePreview && (
                <ResponsiveImage
                  src={imagePreview}
                  width="100px"
                  height="100px"
                  alt="dependants profile image"
                  className="rounded-md"
                />
              )}

              {!imagePreview && (
                <File size={100} className="border rounded-md p-4" />
              )}
              <div className="flex flex-col gap-2">
                <h1 className="  ">Profile Image</h1>
                <div className="flex items-start gap-2">
                  <FileInput onFileChange={handleFileChange} />
                </div>
              </div>
            </div>
            <p className="text-sm mt-2">
              Your image should be below 3 MB, accepted formats: jpg, png, svg.
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
                    <Input placeholder="date of birth" type="date" {...field} />
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
                    <Input placeholder="phone number" type="text" {...field} />
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
                      <Input type="number" placeholder="zip code" {...field} />
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
  );
}

// app/api/upload/route.ts

// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';
// import { PrismaClient } from '@prisma/client';
// import { Readable } from 'stream';
// import Busboy from 'busboy';

// const prisma = new PrismaClient();

// // Check if uploads directory exists, create it if it doesn't
// const ensureUploadsDir = () => {
//   const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
//   if (!fs.existsSync(uploadsDir)) {
//     fs.mkdirSync(uploadsDir, { recursive: true });
//   }
// };

// export async function POST(req: Request) {
//   ensureUploadsDir();

//   return new Promise((resolve, reject) => {
//     const bb = Busboy({ headers: req.headers });
//     let imageFile: any;
//     const fields: { [key: string]: string } = {};

//     bb.on('file', (fieldname, file, filename, encoding, mimetype) => {
//       // Validate file type
//       const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
//       if (!validTypes.includes(mimetype)) {
//         return reject(new Error('Invalid file type.'));
//       }

//       // Validate file size (Limit to 3MB)
//       const fileSizeLimit = 3 * 1024 * 1024; // 3 MB
//       let fileSize = 0;

//       const uploadPath = path.join(process.cwd(), 'public', 'uploads', filename);
//       file.pipe(fs.createWriteStream(uploadPath));

//       file.on('data', (data) => {
//         fileSize += data.length;
//         if (fileSize > fileSizeLimit) {
//           fs.unlinkSync(uploadPath); // Remove file if it's too large
//           return reject(new Error('File size exceeds limit.'));
//         }
//       });

//       file.on('end', () => {
//         imageFile = filename; // Store filename for later use
//       });
//     });

//     bb.on('field', (fieldname, val) => {
//       fields[fieldname] = val; // Collect field data
//     });

//     bb.on('finish', async () => {
//       // Save data to the database
//       try {
//         const dependant = await prisma.dependant.create({
//           data: {
//             name: fields.name,
//             relationship: fields.relationship,
//             dob: new Date(fields.dob),
//             gender: fields.gender,
//             imageUrl: `/uploads/${imageFile}`,
//           },
//         });

//         return resolve(NextResponse.json(dependant, { status: 201 }));
//       } catch (dbError) {
//         console.error(dbError);
//         if (imageFile) {
//           const filePath = path.join(process.cwd(), 'public', 'uploads', imageFile);
//           fs.unlinkSync(filePath); // Delete the file on error
//         }
//         return resolve(NextResponse.json({ message: 'Failed to save data to database.' }, { status: 500 }));
//       }
//     });

//     req.pipe(bb); // Pipe the request into busboy
//   });
// }
