// import { useParams } from "react-router";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as ShadForm,
} from "@/components/ui/Form/form";
import { Button } from "@/components/ui/Button/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/select";
import TagInput from "@/components/custom/common/FormElements/Input/TagInput/TagInput";
import TextInput from "@/components/custom/common/FormElements/Input/TextInput/TextInput";
import { PhoneInput } from "@/components/custom/common/FormElements/PhoneInput/PhoneInput";
import {
  Sortable,
  SortableDragHandle,
  SortableItem,
} from "@/components/custom/common/Sortable/Sortable";
import { Skeleton } from "@/components/ui/Skeleton/skeleton";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import {
  PlusIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import { useGetContactQuery, useUpdateContactMutation } from "@/api/contact";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import { useParams } from "react-router";
import { IContact } from "@/@types/crm";

const UpdateContact: React.FC = () => {
  const { contactId } = useParams();
  // form schema
  const { data, isLoading } = useGetContactQuery(contactId);
  const [updateContact, { isLoading: isUpdateContactLoading }] =
    useUpdateContactMutation();

  console.log(data);
  const formSchema = z.object({
    first_name: z.string().min(2).max(100),
    last_name: z.string().min(2).max(100),
    // organization: z.string(),
    email: z.string().email(),
    city: z.string().min(2).max(30),
    street: z.string().min(2).max(30),
    country: z.string().min(2).max(30),
    phone: z
      .string()
      .regex(/^(\+?\d{1,3}[-.\s]?)?(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/),

    company_name: z.string().max(100),
    company_position: z.string(),
    social_media_links: z.array(
      z.object({
        type: z.string(),
        url: z.string().url(),
      })
    ),
    source: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    ),
    background_field: z.string(),
    // opportunity: z.string(),
    // category: z.string().nullable(),
    // next_comms_date: z.date(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      // organization: "",
      email: "",
      city: "",
      street: "",
      country: "",
      phone: "",
      company_name: "",
      company_position: "",
      background_field: "",
      social_media_links: [],
      source: [],
      // opportunity: "",
      // category: null,
      // next_comms_date: new Date(Date.now()),
    },
    values: {
      first_name: data?.first_name ?? "",
      last_name: data?.last_name ?? "",
      // organization: data?.organization ?? "",
      email: data?.email ?? "",
      city: data?.city ?? "",
      street: data?.street ?? "",
      country: data?.country ?? "",
      phone: data?.phone ?? "",
      company_name: data?.company_name ?? "",
      company_position: data?.company_position ?? "",
      background_field: data?.background_field ?? "",
      social_media_links: data?.social_media_links ?? [{ url: "", type: "" }],
      source:
        data?.source?.map((item: string, index) => {
          return {
            id: `${index}`,
            text: item as string,
          };
        }) ?? [],
    },
  });
  console.log(form, "FORM HOOKS");

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const source = values.source.map((sourceItem) => sourceItem.text);
    const payload = {
      ...data,
      ...values,
      id: data?.uuid ?? "1",
      source,
    };
    await updateContact(payload);
  }
  const { fields, append, move, remove } = useFieldArray({
    control: form.control,
    name: "social_media_links",
  });

  if (isLoading) {
    <div className="h-screen w-full flex items-center justify-center">
      <Spinner size={"large"} />
    </div>;
  }
  return (
    <ShadForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <h1 className="text-bold text-xl mt-[2rem]">Create Customer</h1>
        <div className="grid grid-cols-2  gap-5">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <TextInput
                    placeholder="First Name"
                    {...field}
                    id="first_name"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <TextInput
                    placeholder="Last Name"
                    {...field}
                    id="last_name"
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
                    placeholder="xyz@gmail.com"
                    {...field}
                    id="email"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <PhoneInput placeholder="98453xxxxx" {...field} id="phone" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-3 col-span-2 gap-2 ">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <TextInput placeholder="Country" {...field} id="country" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <br />
                  </FormLabel>

                  <FormControl>
                    <TextInput placeholder="City" {...field} id="city" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <br />
                  </FormLabel>

                  <FormControl>
                    <TextInput placeholder="Street" {...field} id="street" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <TextInput
                    placeholder="Company Name"
                    {...field}
                    id="company_name"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <TextInput
                    placeholder="CEO"
                    {...field}
                    id="company_position"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Source</FormLabel>
                <FormControl>
                  <TagInput
                    {...field}
                    placeholder="Enter a topic"
                    className=""
                    tags={field.value}
                    setTags={field.onChange}
                    activeTagIndex={field.value.length - 1}
                    setActiveTagIndex={() => {}}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="background_field"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Field</FormLabel>
                <FormControl>
                  <TextInput
                    placeholder="CEO"
                    {...field}
                    id="background_field"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* <SortableArrayField /> */}

          <div className="flex w-full max-w-4xl flex-col gap-4 border rounded-lg p-[1rem] col-span-2">
            <div className="space-y-1 ">
              <h4>Social media links</h4>
              <p className="text-[0.8rem] text-muted-foreground">
                Add social media links
              </p>
            </div>
            <div className="space-y-2">
              <Sortable
                value={fields}
                onMove={({ activeIndex, overIndex }) =>
                  move(activeIndex, overIndex)
                }
                overlay={
                  <div className="grid grid-cols-[0.5fr,1fr,auto,auto] items-center gap-2">
                    <Skeleton className="h-8 w-full rounded-sm" />
                    <Skeleton className="h-8 w-full rounded-sm" />
                    <Skeleton className="size-8 shrink-0 rounded-sm" />
                    <Skeleton className="size-8 shrink-0 rounded-sm" />
                  </div>
                }
              >
                <div className="w-full space-y-2">
                  {fields.map((field, index) => (
                    <SortableItem key={field.id} value={field.id} asChild>
                      <div className="grid grid-cols-[0.5fr,1fr,auto,auto] items-center gap-2">
                        <FormField
                          control={form.control}
                          name={`social_media_links.${index}.type`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Select
                                  {...field}
                                  onValueChange={field.onChange}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder={`Facebook`} />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Facebook">
                                      Facebook
                                    </SelectItem>
                                    <SelectItem value="Instagram">
                                      Instagram
                                    </SelectItem>
                                    <SelectItem value="Twitter">
                                      Twitter
                                    </SelectItem>
                                    <SelectItem value="LinkedIn">
                                      LinkedIn
                                    </SelectItem>
                                    <SelectItem value="Website">
                                      Website
                                    </SelectItem>
                                    <SelectItem value="Tiktok">
                                      Tiktok
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`social_media_links.${index}.url`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <TextInput
                                  {...field}
                                  id={`social_media_links.${index}.url`}
                                  name={`social_media_links.${index}.url`}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <SortableDragHandle
                          variant="outline"
                          size="icon"
                          className="size-8 shrink-0"
                        >
                          <DragHandleDots2Icon
                            className="size-4"
                            aria-hidden="true"
                          />
                        </SortableDragHandle>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="size-8 shrink-0"
                          onClick={() => remove(index)}
                        >
                          <TrashIcon
                            className="size-4 text-destructive"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </SortableItem>
                  ))}
                </div>
              </Sortable>
              <Button
                type="button"
                size="icon"
                className="rounded-full"
                onClick={() =>
                  append({
                    type: "Facebook",
                    url: "",
                  })
                }
              >
                <PlusIcon />
              </Button>
            </div>
          </div>
        </div>
        <Button
          disabled={isUpdateContactLoading}
          type="submit"
          className="w-[100px]"
        >
          {isUpdateContactLoading ? (
            <Spinner className="text-white" size={`small`} />
          ) : (
            `Submit`
          )}
        </Button>
      </form>
    </ShadForm>
  );
};

export default UpdateContact;
