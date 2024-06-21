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
import PlateEditor from "@/components/custom/common/Editors/PlateEditor/PlateEditor";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";

const CreateTask: React.FC = () => {
  // const { workspaceId } = useParams();

  const plateEditorInitialValue = [
    {
      id: "1",
      type: ELEMENT_PARAGRAPH,
      children: [{ text: "Enter notes here..." }],
    },
  ];

  const formSchema = z.object({
    name: z.string().min(2).max(100),
    type: z.string(),
    workspace: z.string(),
    status: z.string(),
    priority: z.string(),
    budget: z.string(),
    inventories: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        image: z.string(),
      })
    ),
    equipments: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        image: z.string(),
      })
    ),
    description: z.string().min(10).max(1000),
    tags: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    ),
    attachments: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    ),
    members: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        avatar: z.string(),
        position: z.string(),
      })
    ),
    notes: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "",
      workspace: "",
      members: [
        {
          id: "",
          name: "",
          avatar: "",
          position: "",
        },
      ],
      priority: "",
      budget: "0",
      inventories: [
        {
          id: "",
          name: "",
          image: "",
        },
      ],
      equipments: [
        {
          id: "",
          name: "",
          image: "",
        },
      ],
      description: "",
      tags: [
        // {
        //   id: "",
        //   text: "",
        // },
        // null,
      ],

      attachments: [],
      notes: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <ShadForm {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 pb-[2rem]">
        <h1 className="text-bold text-xl mt-[2rem]">Create Task</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Eg. Task 1"
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
              <FormLabel>Task Type</FormLabel>
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
          name="members"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Members</FormLabel>
              <FormControl>
                <MultiSelector
                  //  asChild
                  // {...field}
                  // values={field.value.id}
                  values={["Member1", "Member2", "Member3"]}
                  onValuesChange={field.onChange}>
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select team members" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value="Member1Id">
                        Member1
                      </MultiSelectorItem>
                      <MultiSelectorItem value="Member2Id">
                        Member2
                      </MultiSelectorItem>
                      <MultiSelectorItem value="Member3Id">
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
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Budget</FormLabel>
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
                  values={["Inventory1", "Inventory2", "Inventory3"]}
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
                  // values={field.value}
                  values={["Equipment1", "Equipment2", "Equipment3"]}
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Description</FormLabel>
              <FormControl>
                <AutosizeTextarea
                  placeholder="Enter task description..."
                  {...field}
                  id="description"
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
              <FormLabel>Task Tags</FormLabel>
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

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Notes</FormLabel>
              <FormControl>
                {/* <AutosizeTextarea
                  placeholder="Enter task notes..."
                  {...field}
                  id="description"
                  maxHeight={300}
                /> */}
                <PlateEditor initialValue={plateEditorInitialValue} />
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

export default CreateTask;
