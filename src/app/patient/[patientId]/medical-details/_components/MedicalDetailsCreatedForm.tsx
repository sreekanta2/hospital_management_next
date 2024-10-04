"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import DateInput from "@/components/DateInput";
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
import { useState } from "react";

// Define schema using zod
const FormSchema = z.object({
  bmi: z.string().min(2, "bmi must be at least 2 characters."),
  heartRate: z.string().min(2, "hearRate must be at least 2 characters."),
  width: z.string().min(1, "width is required."),
  fbc: z.string().min(1, "fbc is required."),
  date: z.string().min(1, "Date  is required."),
  // Make uploadFile optional for submission
});

export function MedicalDetailsCreatedForm() {
  // State to hold the image preview URL
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // Initialize form with react-hook-form and zod
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bmi: "",
      heartRate: "",
      width: "",
      fbc: "",
      date: "",
    },
  });

  // Handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    // Submit formData as needed (e.g., send to API)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hover">Add Medical Details</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6">
        <ScrollArea className="h-[75vh] pr-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <DialogHeader>
                <DialogTitle>Add Medical Details </DialogTitle>
                <hr className="mt-6" />
                <DialogDescription></DialogDescription>
              </DialogHeader>

              {/* Text Name Field */}
              <FormField
                control={form.control}
                name="bmi"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>BMI</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Relationship Field */}
              <FormField
                control={form.control}
                name="heartRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heart Rate</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date of Birth Field */}
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Width</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender Field */}
              <FormField
                control={form.control}
                name="fbc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FBC</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DateInput label="End Date" name="date" control={form.control} />

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
