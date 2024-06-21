"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/Form/form";
import { Button } from "@/components/ui/Button/button";
import { OtpStyledInput } from "@/components/custom/common/OTPStyledInput/OTPStyledInput";
import { getSuccessToast } from "@/utils/constants/toast";

const OTPInput = () => {
  const form = useForm({
    defaultValues: {
      otp: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    getSuccessToast(`Success , Your Otp code is : ${data.otp}`);
  };
  return (
    <div className="max-w-xs h-fit flex items-center justify-center outline outline-1 outline-muted rounded-md p-4 bg-background">
      <div className="w-full space-y-2">
        <div className="space-y-1">
          <h2 className="font-semibold">OTP verification</h2>
          <p className="text-xs">
            Enter the 5-digit code sent to your email address or phone number
          </p>
        </div>
        <Form {...form}>
          <form
            className="flex flex-wrap gap-2 "
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormControl>
                  <>
                    <FormItem>
                      <OtpStyledInput
                        numInputs={5}
                        inputType="number"
                        {...field}
                      />
                    </FormItem>
                    <FormMessage />
                  </>
                </FormControl>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default OTPInput;
