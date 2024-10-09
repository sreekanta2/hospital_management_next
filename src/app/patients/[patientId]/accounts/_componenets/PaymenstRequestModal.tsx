"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function PaymentRequestModal() {
  const FormSchema = z.object({
    amount: z.number().min(2, "Text Name must be at least 2 characters."),
    desctiption: z
      .string()
      .min(2, "Hospital Name must be at least 2 characters."),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 0,
      desctiption: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    //   const formData = new FormData();
    //   formData.append("textName", data.textName);
    //   formData.append("hospitalName", data.hospitalName);
    //   formData.append("date", data.date);

    //   if (data.uploadFile) {
    //     formData.append("uploadFile", data.uploadFile);
    //   }

    // Submit formData (e.g., send to an API)
    console.log("Submitted data:", data);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="hover">Request Payment</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="">
        <ScrollArea className="h-fit pr-4">
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle>
              Payment Request{" "}
              <span className="text-red-700"> Request ID : #RQ-1323</span>
            </AlertDialogTitle>
            <hr />
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 "
              >
                {/* bank Name Field */}
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Bank Name</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          placeholder="Bank Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Hospital Name Field */}
                <FormField
                  control={form.control}
                  name="desctiption"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </Form>
          </AlertDialogHeader>
        </ScrollArea>
      </AlertDialogContent>
    </AlertDialog>
  );
}
