"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { File } from "lucide-react";
import FileInput from "@/components/ui/FileInput";
import ResponsiveImage from "@/components/ResponsiveImage";
import { useEffect, useState } from "react";

// Define schema using zod
const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  relationship: z
    .string()
    .min(2, "Relationship must be at least 2 characters."),
  dob: z.string().min(1, "Date of birth is required."),
  uploadFile: z.any().optional(), // Make uploadFile optional for submission
  gender: z.string().min(2, "Gender is required."),
});

export function DependantsCreatedForm() {
  // State to hold the image preview URL
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // Initialize form with react-hook-form and zod
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      relationship: "",
      uploadFile: null,
      dob: "",
      gender: "",
    },
  });

  // Handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("relationship", data.relationship);
    formData.append("dob", data.dob);
    formData.append("gender", data.gender);

    if (data.uploadFile) {
      formData.append("uploadFile", data.uploadFile);
    }

    // Submit formData as needed (e.g., send to API)
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hover">Add Dependants</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6">
        <ScrollArea className="h-[75vh]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <DialogHeader>
                <div className="flex gap-4">
                  {imagePreview && (
                    <ResponsiveImage
                      src={imagePreview}
                      width="80px"
                      height="80px"
                      alt="dependants profile image"
                      className="rounded-md"
                    />
                  )}

                  {!imagePreview && (
                    <File size={75} className="border rounded-md p-4" />
                  )}
                  <div className="flex flex-col gap-2">
                    <DialogTitle className="-ml-5 md:ml-0">
                      Profile Image
                    </DialogTitle>
                    <div className="flex items-start gap-2">
                      <FileInput onFileChange={handleFileChange} />
                    </div>
                  </div>
                </div>
                <DialogDescription>
                  Your image should be below 3 MB, accepted formats: jpg, png,
                  svg.
                </DialogDescription>
              </DialogHeader>

              {/* Text Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Relationship Field */}
              <FormField
                control={form.control}
                name="relationship"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relationship</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter relationship" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date of Birth Field */}
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender Field */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter gender" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-[#0de0fe]">
                Submit
              </Button>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
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
