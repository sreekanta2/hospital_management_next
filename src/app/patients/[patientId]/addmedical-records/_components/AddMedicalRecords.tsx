"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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

// Define schema using zod
const FormSchema = z.object({
  textName: z.string().min(2, "Text Name must be at least 2 characters."),
  hospitalName: z
    .string()
    .min(2, "Hospital Name must be at least 2 characters."),
  uploadFile: z.any().optional(), // Make file upload optional
  date: z.string().min(1, "Date is required."),
});

export function AddMedicalRecords() {
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      textName: "",
      hospitalName: "",
      uploadFile: null,
      date: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    // Submit formData (e.g., send to an API)
    console.log("Submitted data:", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Medical Records</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6">
        <ScrollArea className="h-[75vh]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <DialogHeader>
                <DialogTitle className="-ml-5 md:ml-0">
                  Add Medical Record
                </DialogTitle>
              </DialogHeader>

              {/* Text Name Field */}
              <FormField
                control={form.control}
                name="textName"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Text Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Text Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hospital Name Field */}
              <FormField
                control={form.control}
                name="hospitalName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hospital Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Hospital Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date Field */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {images.length > 0 &&
                images.map((image, index) => (
                  <div key={index}>
                    <ResponsiveImage
                      src={image}
                      width="100%"
                      height="200px"
                      alt="file preview"
                      className="rounded-md"
                    />
                  </div>
                ))}
              {images.length === 0 && (
                <File size={75} className="border rounded-md p-4" />
              )}
              <DialogDescription>
                Your image should be below 3 MB, accepted formats: jpg, png,
                svg.
              </DialogDescription>
              <div className="flex flex-col gap-2">
                <FileInput setImages={setImages} images={images} />
              </div>

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
