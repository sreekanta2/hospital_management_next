"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FileInput from "@/components/FileInput";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { File } from "lucide-react";
import { useState } from "react";

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
  const [images, setImages] = useState<string[]>([]);
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
    console.log(data);
    // Submit formData as needed (e.g., send to API)
  }

  // Handle file change

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hover">Add Dependants</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6">
        <ScrollArea className="h-[75vh] pr-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <DialogHeader>
                <div className="flex gap-4">
                  {images.length > 0 &&
                    images.map((image, index) => (
                      <div key={index}>
                        <ResponsiveImage
                          src={image}
                          width="100px"
                          height="100px"
                          alt="dependants profile image"
                          className="rounded-md"
                        />
                      </div>
                    ))}

                  {images.length === 0 && (
                    <File size={75} className="border rounded-md p-4" />
                  )}
                  <div className="flex flex-col gap-2">
                    <DialogTitle className="-ml-5 md:ml-0">
                      Profile Image
                    </DialogTitle>
                    <div className="flex items-start gap-2">
                      <FileInput setImages={setImages} images={images} />
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
