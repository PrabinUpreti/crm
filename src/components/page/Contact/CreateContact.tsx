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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/select";
import NumberInput from "@/components/custom/common/FormElements/Input/NumberInput/NumberInput";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorTrigger,
  MultiSelectorList,
} from "@/components/custom/common/FormElements/Select/MultiSelect/MultiSelect";
import { AutosizeTextarea } from "@/components/custom/common/FormElements/AutosizeTextArea/AutosizeTextArea";
import TagInput from "@/components/custom/common/FormElements/Input/TagInput/TagInput";
import TextInput from "@/components/custom/common/FormElements/Input/TextInput/TextInput";
import { PhoneInput } from "@/components/custom/common/FormElements/PhoneInput/PhoneInput";
import { Label } from "@/components/ui/Label/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible/collapsible";

const CreateContact: React.FC = () => {
  // const { workspaceId } = useParams();
  const formSchema = z.object({
    first_name: z.string().min(2).max(100),
    last_name: z.string().min(2).max(100),
    organization: z.string(),
    email: z.string().email(),
    city: z.string().min(2).max(16),
    street: z.string().min(2).max(16),
    country: z.string().min(2).max(16),
    phone: z
      .string()
      .regex(/^(\+?\d{1,3}[-.\s]?)?(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/),

    company_name: z.string().max(100),
    company_position: z.string(),
    next_comms_date: z.string(),
    background_field: z.string(),
    social_media_links: z.object({
      facebook: z.string().url(),
      x: z.string().url(),
      linkedin: z.string().url(),
      instagram: z.string().url(),
      tiktok: z.string().url(),
      snapchat: z.string().url(),
      website: z.string().url(),
    }),
    source: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    ),
    opportunity: z.string(),
    category: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      organization: "",
      email: "",
      city: "",
      street: "",
      country: "",
      phone: "",
      company_name: "",
      company_position: "",
      next_comms_date: "",
      background_field: "",
      social_media_links: {
        facebook: "",
        x: "",
        linkedin: "",
        instagram: "",
        tiktok: "",
        snapchat: "",
        website: "",
      },
      source: [],
      opportunity: "",
      category: "",
    },
  });
  console.log(form, "FORM HOOKS");

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  <TextInput placeholder="Prabin" {...field} id="first_name" />
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
                  <TextInput placeholder="Upreti" {...field} id="last_name" />
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
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="social_media_links"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add Social Media Links</FormLabel>

                <FormControl>
                  <div className="">
                    <Collapsible>
                      <CollapsibleTrigger className=" text-gray-500 font-extralight w-full  p-[0.4rem] text-left border rounded-md">
                        Add Social Media Links
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="grid grid-cols-4  items-center gap-2 mt-5 border rounded-md p-5">
                          <FormLabel>Facebook</FormLabel>
                          <TextInput
                            className="col-span-3"
                            placeholder="https://facebook.com"
                            {...field.value.facebook}
                            id="social_media_links"
                          />
                          <FormLabel>X</FormLabel>
                          <TextInput
                            className="col-span-3"
                            placeholder="https://facebook.com"
                            {...field.value.x}
                            id="social_media_links"
                          />
                          <FormLabel>LinkedIn</FormLabel>
                          <TextInput
                            className="col-span-3"
                            placeholder="https://facebook.com"
                            {...field.value.linkedin}
                            id="social_media_links"
                          />
                          <FormLabel>Instagram</FormLabel>
                          <TextInput
                            className="col-span-3"
                            placeholder="https://facebook.com"
                            {...field.value.instagram}
                            id="social_media_links"
                          />
                          <FormLabel>TikTok</FormLabel>
                          <TextInput
                            className="col-span-3"
                            placeholder="https://facebook.com"
                            {...field.value.tiktok}
                            id="social_media_links"
                          />
                          <FormLabel>Snapchat</FormLabel>
                          <TextInput
                            className="col-span-3"
                            placeholder="https://facebook.com"
                            {...field.value.snapchat}
                            id="social_media_links"
                          />
                          <FormLabel>Website</FormLabel>
                          <TextInput
                            className="col-span-3"
                            placeholder="https://facebook.com"
                            {...field.value.website}
                            id="social_media_links"
                          />
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Information Technology`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Information Technology">
                      Information Technology
                    </SelectItem>
                    <SelectItem value="Construction">Construction</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Real Estate">Real Estate</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}

          {/* <FormField
          control={form.control}
          name="workspace"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workspace</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Workspace 1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Workspace1">Workspace1</SelectItem>
                    <SelectItem value="Workspace2">Workspace2</SelectItem>
                    <SelectItem value="Workspace3">Workspace3</SelectItem>
                    <SelectItem value="Workspace4">Workspace4</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}

          {/* <FormField
          control={form.control}
          name="teamMembers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Members</FormLabel>
              <FormControl>
                <MultiSelector
                  values={field.value}
                  onValuesChange={field.onChange}
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select team members" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value="Member1">
                        Member1
                      </MultiSelectorItem>
                      <MultiSelectorItem value="Member2">
                        Member2
                      </MultiSelectorItem>
                      <MultiSelectorItem value="Member3">
                        Member3
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}
          {/* <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Hgh" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}

          {/* <FormField
          control={form.control}
          name="totalBudget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Budget</FormLabel>
              <FormControl>
                <NumberInput placeholder="Eg.$100000" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}
          {/* <FormField
          control={form.control}
          name="inventories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inventories</FormLabel>
              <FormControl>
                <MultiSelector
                  values={field.value}
                  onValuesChange={field.onChange}
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select inventories" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value="Inventory1">
                        Inventory1
                      </MultiSelectorItem>
                      <MultiSelectorItem value="Inventory2">
                        Inventory2
                      </MultiSelectorItem>
                      <MultiSelectorItem value="Inventory3">
                        Inventory3
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}
          {/* <FormField
          control={form.control}
          name="equipments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Equipments</FormLabel>
              <FormControl>
                <MultiSelector
                  values={field.value}
                  onValuesChange={field.onChange}
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select equipments" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value="Equipment1">
                        Equipment1
                      </MultiSelectorItem>
                      <MultiSelectorItem value="Equipment2">
                        Equipment2
                      </MultiSelectorItem>
                      <MultiSelectorItem value="Equipment3">
                        Equipment3
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}

          {/* <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <AutosizeTextarea
                  placeholder="Enter project description..."
                  {...field}
                  id="projectDescription"
                  maxHeight={300}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}
          {/* <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Tags</FormLabel>
              <FormControl>
                <TagInput
                  {...field}
                  placeholder="Enter a topic"
                  className=" py-[1.5rem]"
                  tags={field.value}
                  setTags={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </ShadForm>
  );
};

export default CreateContact;
