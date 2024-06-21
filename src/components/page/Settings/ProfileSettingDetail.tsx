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
import DatePicker from "@/components/custom/common/FormElements/DatePicker/DatePicker";

const ProfileSettingDetail: React.FC = () => {
  const [date, setDate] = useState<Date>();
  const formSchema = z.object({
    firstName: z.string().min(2).max(100),
    lastName: z.string().min(2).max(100),
    email: z.string().email(),
    birthday: z.string(),
    sex: z.string(),
    role: z.string(),
    subscriptionTire: z.string(),
    avatar: z.string().url(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthday: "",
      sex: "",
      role: "",
      subscriptionTire: "",
      avatar: "",
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-[2rem]"
      >
        <h1 className="text-bold text-xl mt-[2rem] col-span-2">Profile</h1>

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="First Name"
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
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="lastName"
                  {...field}
                  id="lastName"
                  // name="name"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Email"
                  {...field}
                  id="email"
                  // name="name"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birth day </FormLabel>
              <FormControl>
                {/* <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover> */}
                <DatePicker />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sex</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Sex"
                  {...field}
                  id="sex"
                  // name="name"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Role"
                  {...field}
                  id="role"
                  // name="name"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subscriptionTire"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscription Tire</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Subscription Tire"
                  {...field}
                  id="subscriptionTire"
                  // name="name"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="col-span-2 max-w-[100px]">
          {" "}
          Submit
        </Button>
      </form>
    </ShadForm>
  );
};

export default ProfileSettingDetail;
