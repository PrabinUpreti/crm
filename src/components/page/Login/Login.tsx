import TextInput from "@/components/custom/common/FormElements/Input/TextInput/TextInput";
import { Button } from "@/components/ui/Button/button";
import LogoEnter from "../../../assets/images/LogoEnter.png";
import PasswordInput from "@/components/custom/common/FormElements/Input/PasswordInput/PasswordInput";
import { Helmet } from "react-helmet";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUserMutation } from "@/api/user";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form/form";
import { getSuccessToast } from "@/utils/constants/toast";
import { useNavigate } from "react-router";

export interface ILoginProps {
  title: string;
}
const Login: React.FC<ILoginProps> = ({ title }) => {
  const navigate = useNavigate();
  const [loginUser, { isLoading, status, error, data }] =
    useLoginUserMutation();
  const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(8).max(20),
  });

  console.log(isLoading, "loading");
  console.log(status, "status");
  console.log(error, "error");
  console.log(data, "data");

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await loginUser(values).unwrap();
      console.log(res.message);
      getSuccessToast(res.message || "User logged in");
      return navigate(`/`);
    } catch (err) {
      console.log(err);
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="grid h-screen justify-between   gap-[2rem] grid-cols-2 md:grid-cols-3 xl:grid-cols-5  ">
      <Helmet>
        <title>{`${title}`}</title>
      </Helmet>
      <div className=" col-span-1 md:col-span-2 xl:col-span-3  bg-gradient-to-r from-primary/80 via-primary/90 dark:bg-background to-primary/100 md:p-4 lg:p-16">
        <div className="text-primary-foreground absolute top-12">
          <div style={{ width: "195px", height: "86px", marginTop: "62px" }}>
            <img src={LogoEnter} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="flex items-end text-primary-foreground absolute bottom-12 text-sm lg:text-base  ">
          @2024Enterleaf.All right reserved
        </div>
      </div>

      <div className="col-span-1  xl:col-span-2  flex flex-col gap-[1rem] justify-center items-center p-[2rem]">
        <div className=" flex flex-col space-y-2 w-full  ">
          <div className="flex flex-col space-y-8">
            <p className="text-4xl font-bold ">Enter Leaf</p>
            <p className="text-2xl font-semibold ">Welcome Back!</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex gap-[2rem] flex-col">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Email</FormLabel>
                    <FormControl>
                      <TextInput
                        placeholder="Eg. example@company.com"
                        {...field}
                        id="email"
                        name="email"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Password"
                        {...field}
                        id="password"
                        name="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <p className="underline text-slate-500 text-sm ...">
                  Forgot Password
                </p>
              </div>
              <Button type="submit" size={"lg"} disabled={isLoading}>
                {isLoading ? `loading...` : "Login"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="text-sm text-gray-500">OR</div>
        <div
          className="w-full"
          style={{
            border: "1px solid #0E84ED",
            padding: "9px",
            borderRadius: "6px",
            boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
          }}>
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.54 12.2615C22.54 11.446 22.4668 10.6619 22.3309 9.90918H11.5V14.3576H17.6891C17.4225 15.7951 16.6123 17.013 15.3943 17.8285V20.714H19.1109C21.2855 18.7119 22.54 15.7637 22.54 12.2615Z"
              fill="#4285F4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5 23.4998C14.605 23.4998 17.2081 22.47 19.1109 20.7137L15.3943 17.8282C14.3645 18.5182 13.0472 18.9259 11.5 18.9259C8.50474 18.9259 5.96951 16.903 5.06519 14.1848H1.22314V17.1644C3.11542 20.9228 7.00451 23.4998 11.5 23.4998Z"
              fill="#34A853"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.06523 14.185C4.83523 13.495 4.70455 12.7579 4.70455 12C4.70455 11.242 4.83523 10.505 5.06523 9.81499V6.83545H1.22318C0.444318 8.38795 0 10.1443 0 12C0 13.8557 0.444318 15.612 1.22318 17.1645L5.06523 14.185Z"
              fill="#FBBC05"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5 5.07386C13.1884 5.07386 14.7043 5.65409 15.8961 6.79364L19.1945 3.49523C17.2029 1.63955 14.5997 0.5 11.5 0.5C7.00451 0.5 3.11542 3.07705 1.22314 6.83545L5.06519 9.815C5.96951 7.09682 8.50474 5.07386 11.5 5.07386Z"
              fill="#EA4335"
            />
          </svg>
          Sign In with Google
        </div>
        <div
          className=" w-full flex flex-row justify-center items-center space-y-4 text-muted-foreground"
          style={{ width: "100%" }}>
          Don't have an account ? &nbsp;
          <Button
            variant={"link"}
            className="underline  text-primary-foreground">
            {" "}
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
