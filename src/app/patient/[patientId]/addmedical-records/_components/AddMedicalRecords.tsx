"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

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
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      textName: "",
      hospitalName: "",
      uploadFile: null,
      date: "",
    },
  });

  // Handle file change
  const handleFileChange = (file: File | null) => {
    if (!file) {
      setImagePreview(null);
      return;
    }

    const validTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    const isValidType = validTypes.includes(file.type);
    const isValidSize = file.size <= 2 * 1024 * 1024;

    if (!isValidType) {
      alert("Please upload a file of type: jpg, png, or svg.");
      form.setValue("uploadFile", null);
      return;
    }

    if (!isValidSize) {
      alert("Please upload a file smaller than 3 MB.");
      form.setValue("uploadFile", null);
      return;
    }

    form.setValue("uploadFile", file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const formData = new FormData();
    formData.append("textName", data.textName);
    formData.append("hospitalName", data.hospitalName);
    formData.append("date", data.date);

    if (data.uploadFile) {
      formData.append("uploadFile", data.uploadFile);
    }

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

              {imagePreview && (
                <ResponsiveImage
                  src={imagePreview}
                  width="100%"
                  height="200px"
                  alt="file preview"
                  className="rounded-md"
                />
              )}
              {!imagePreview && (
                <File size={75} className="border rounded-md p-4" />
              )}
              <DialogDescription>
                Your image should be below 3 MB, accepted formats: jpg, png,
                svg.
              </DialogDescription>
              <div className="flex flex-col gap-2">
                <FileInput onFileChange={handleFileChange} />
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
