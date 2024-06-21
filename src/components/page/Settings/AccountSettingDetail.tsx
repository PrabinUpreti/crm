// import { useParams } from "react-router";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as ShadForm,
} from "@/components/ui/Form/form";
import { Button } from "@/components/ui/Button/button";
import TextInput from "@/components/custom/common/FormElements/Input/TextInput/TextInput";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/Calendar/calendar";
import { format } from "date-fns";

const AccountSettingDetail: React.FC = () => {
  const [date, setDate] = useState<Date>();
  const formSchema = z.object({
    currentPassword: z.string().min(8).max(16),
    newPassword: z.string().min(8).max(16),
    confirmPassword: z.string().min(8).max(16),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <ShadForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <h1 className="text-bold text-xl mt-[2rem]">Change Password</h1>
        <span className="text-sm text-gray-500">
          You can change your password here
        </span>
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Current Password</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Current Password"
                  {...field}
                  id="firstName"
                  // name="name"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="New Password"
                  {...field}
                  id="newPassword"
                  // name="name"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Confirm Password"
                  {...field}
                  id="confirmPassword"
                  // name="name"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </ShadForm>
  );
};

export default AccountSettingDetail;
