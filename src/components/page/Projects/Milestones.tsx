import PlateEditor from "@/components/custom/common/Editors/PlateEditor/PlateEditor";
import { AutosizeTextarea } from "@/components/custom/common/FormElements/AutosizeTextArea/AutosizeTextArea";
import DatePicker from "@/components/custom/common/FormElements/DatePicker/DatePicker";
import TextInput from "@/components/custom/common/FormElements/Input/TextInput/TextInput";
import {
  PlusIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import Modal from "@/components/custom/common/Modal/Modal";
import {
  Sortable,
  SortableDragHandle,
  SortableItem,
} from "@/components/custom/common/Sortable/Sortable";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form/form";
import { Skeleton } from "@/components/ui/Skeleton/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip/tooltip";
import { faker } from "@faker-js/faker";
import { zodResolver } from "@hookform/resolvers/zod";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { MilestoneIcon } from "lucide-react";
import { useMemo } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

export const AddMileStonesForm = () => {
  const formSchema = z.object({
    milestones: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        expected_achievement_date: z.date(),
        tasks: z.array(
          z.object({
            name: z.string(),
            id: z.string(),
          })
        ),
      })
    ),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      milestones: [
        {
          id: "",
          title: "",
          description: "",
          expected_achievement_date: new Date(),
          tasks: [
            {
              name: "Task1",
              id: "task1",
            },
          ],
        },
      ],
    },
  });
  const plateEditorInitialValue = useMemo(() => {
    return [
      {
        id: "1",
        type: ELEMENT_PARAGRAPH,
        children: [{ text: "Enter description here..." }],
      },
    ];
  }, []);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { fields, append, move, remove } = useFieldArray({
    control: form.control,
    name: "milestones",
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full  flex-col   rounded-lg  ">
          <div className="space-y-2 ">
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
              }>
              <div className="w-full  flex flex-col gap-[4rem] max-h-[400px]  overflow-auto  py-[1rem] px-[0.3rem]">
                {fields.map((field, index) => (
                  <SortableItem key={field.id} value={field.id} asChild>
                    <div className="grid grid-cols-4  items-start gap-[2rem] justify-between ">
                      <div className="col-span-3 grid  gap-[1rem]">
                        <FormField
                          control={form.control}
                          name={`milestones.${index}.title`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <TextInput
                                  {...field}
                                  id={`milestones.${index}.title`}
                                  name={`milestones.${index}.title`}
                                  placeholder="Enter title"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`milestones.${index}.expected_achievement_date`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <DatePicker {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`milestones.${index}.description`}
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>Description</FormLabel> */}
                              <FormControl>
                                <AutosizeTextarea
                                  placeholder="Enter description here..."
                                  {...field}
                                  name={`milestones.${index}.description`}
                                  id={`milestones.${index}.description`}
                                  maxHeight={300}
                                />
                                {/* <PlateEditor
                                  id={`milestones.${index}.description`}
                                  initialValue={plateEditorInitialValue}
                                  {...field}
                                /> */}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="col-span-1 space-x-2 group">
                        <SortableDragHandle
                          variant="outline"
                          size="icon"
                          className="rounded-full">
                          <DragHandleDots2Icon
                            className="size-4"
                            aria-hidden="true"
                          />
                        </SortableDragHandle>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="shrink-0 rounded-full "
                          onClick={() => remove(index)}>
                          <TrashIcon
                            className="text-destructive"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Remove</span>
                        </Button>
                        {index === fields.length - 1 && (
                          <Button
                            type="button"
                            variant="default"
                            size="icon"
                            className="rounded-full "
                            onClick={() =>
                              append({
                                title: "",
                                description: "",
                                id: faker.string.uuid(),
                                expected_achievement_date: new Date(),
                                tasks: [
                                  {
                                    id: "",
                                    name: "",
                                  },
                                ],
                              })
                            }>
                            <PlusIcon />
                          </Button>
                        )}
                      </div>
                    </div>
                  </SortableItem>
                ))}
              </div>
            </Sortable>
            {/* <Button
              type="button"
              variant="default"
              size="icon"
              className="rounded-full "
              onClick={() =>
                append({
                  title: "",
                  description: "",
                  id: faker.string.uuid(),
                  expected_achievement_date: new Date(),
                  tasks: [
                    {
                      id: "",
                      name: "",
                    },
                  ],
                })
              }>
              <PlusIcon />
            </Button> */}
          </div>
        </div>
      </form>
    </Form>
  );
};
const Milestones = () => {
  return (
    <div>
      <Modal
        title={`Milestones`}
        description={` Add milestones to the project`}
        size="xl"
        trigger={
          <Button
            variant={`ghost`}
            size={`icon`}
            className="h-5 w-5 flex items-center hover:bg-inherit">
            <Tooltip>
              <TooltipTrigger className="h-5 w-5 flex items-center bg">
                <MilestoneIcon className="cursor-pointe text-xl text-foreground/60" />
              </TooltipTrigger>
              <TooltipContent>Milestones</TooltipContent>
            </Tooltip>
          </Button>
        }
        body={<AddMileStonesForm />}
        footer={
          <div className="flex gap-4">
            <Button variant={`outline`}>Cancel</Button>
            <Button>Save</Button>
          </div>
        }
      />
    </div>
  );
};

export default Milestones;
