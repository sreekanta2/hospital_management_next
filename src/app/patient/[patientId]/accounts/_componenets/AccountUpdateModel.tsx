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

export function AccountUpdateModel() {
  const FormSchema = z.object({
    bankname: z.string().min(2, "Text Name must be at least 2 characters."),
    branchname: z
      .string()
      .min(2, "Hospital Name must be at least 2 characters."),
    accountnumner: z.number().min(2, "account number required."),
    accountname: z
      .string()
      .min(2, "Account Name must be at least 2 characters."),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bankname: "",
      branchname: "",
      accountnumner: 0,

      accountname: "",
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
        <h1 className="text-blue-600 cursor-pointer">Edit Details</h1>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full ">
        <ScrollArea className="h-[75vh] pr-4">
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle>Account Details</AlertDialogTitle>
            <hr />
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
              {/* bank Name Field */}
              <FormField
                control={form.control}
                name="bankname"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Bank Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hospital Name Field */}
              <FormField
                control={form.control}
                name="branchname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branch Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Branch Name"
                        {...field}
                        className="dark:bggra-80"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date Field */}
              <FormField
                control={form.control}
                name="accountnumner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number</FormLabel>
                    <FormControl>
                      <Input type="Account number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Account Name" {...field} />
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
        </ScrollArea>
      </AlertDialogContent>
    </AlertDialog>
  );
}
