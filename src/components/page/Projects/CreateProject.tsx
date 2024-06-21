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
  SelectItem,
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

const CreateProject: React.FC = () => {
  // const { workspaceId } = useParams();

  const formSchema = z.object({
    name: z.string().min(2).max(100),
    type: z.string(),
    workspace: z.string(),
    teamMembers: z.array(z.string()),
    priority: z.string(),
    totalBudget: z.string(),
    inventories: z.array(z.string()),
    equipments: z.array(z.string()),
    projectDescription: z.string().min(10).max(1000),
    tags: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    ),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "",
      workspace: "",
      teamMembers: [],
      priority: "",
      totalBudget: "0",
      inventories: [],
      equipments: [],
      projectDescription: "",
      tags: [],
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="text-bold text-xl mt-[2rem]">Create a Project</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Eg. Project 1"
                  {...field}
                  id="name"
                  // name="name"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Type</FormLabel>
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
        />

        <FormField
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
        />

        <FormField
          control={form.control}
          name="teamMembers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Members</FormLabel>
              <FormControl>
                <MultiSelector
                  //  asChild
                  // {...field}
                  values={field.value}
                  onValuesChange={field.onChange}>
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
        />
        <FormField
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
        />

        <FormField
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
        />
        <FormField
          control={form.control}
          name="inventories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inventories</FormLabel>
              <FormControl>
                <MultiSelector
                  //  asChild
                  // {...field}
                  values={field.value}
                  onValuesChange={field.onChange}>
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
        />
        <FormField
          control={form.control}
          name="equipments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Equipments</FormLabel>
              <FormControl>
                <MultiSelector
                  //  asChild
                  // {...field}
                  values={field.value}
                  onValuesChange={field.onChange}>
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
        />

        <FormField
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
        />

        {/* tags */}

        <FormField
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
                  setTags={field.onChange} //   setTags={(newTags) => {
                  //     setTags(newTags);
                  //     setValue("topics", newTags as [Tag, ...Tag[]]);
                  //   }}
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

export default CreateProject;
