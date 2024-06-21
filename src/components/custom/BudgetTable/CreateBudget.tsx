import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as ShadForm,
} from "@/components/ui/Form/form";
import { Button } from "@/components/ui/Button/button";

import NumberInput from "@/components/custom/common/FormElements/Input/NumberInput/NumberInput";

import { AutosizeTextarea } from "@/components/custom/common/FormElements/AutosizeTextArea/AutosizeTextArea";
import TagInput from "@/components/custom/common/FormElements/Input/TagInput/TagInput";
import TextInput from "@/components/custom/common/FormElements/Input/TextInput/TextInput";
import PlateEditor from "../common/Editors/PlateEditor/PlateEditor";
import { useMemo } from "react";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import DatePicker from "../common/FormElements/DatePicker/DatePicker";
import {
  Sortable,
  SortableDragHandle,
  SortableItem,
} from "../common/Sortable/Sortable";
import { TrashIcon } from "../common/icons/commonIcons";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/Skeleton/skeleton";
import { faker } from "@faker-js/faker";

const CreateBudget: React.FC = () => {
  const plateEditorInitialValue = useMemo(() => {
    return [
      {
        id: "1",
        type: ELEMENT_PARAGRAPH,
        children: [{ text: "Enter notes here..." }],
      },
    ];
  }, []);
  const formSchema = z.object({
    name: z.string().min(2).max(100),
    allocated_amount: z.string(),
    tags: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    ),
    particulars: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        estimated_expense: z.number(),
      })
    ),
    description: z.string().min(10).max(1000),
    notes: z.string(),
    start_date: z.date(),
    due_date: z.date(),
    attachments: z.array(z.object({})),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      allocated_amount: "",
      tags: [],
      description: "",
      notes: "",
      attachments: [],
      particulars: [],
      start_date: new Date(Date.now()),
      due_date: new Date(Date.now()),
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { fields, append, move, remove } = useFieldArray({
    control: form.control,
    name: "particulars",
  });

  return (
    <ShadForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="text-bold text-xl mt-[2rem]">Create Budget</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget Name</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Eg. My Budget"
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
          name="allocated_amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Allocated Budget Amount</FormLabel>
              <FormControl>
                <NumberInput placeholder="Eg.$100000" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* <SortableArrayField /> */}

        <div className="flex w-full max-w-4xl flex-col gap-4 border rounded-lg p-[1rem]">
          <div className="space-y-1 ">
            <h4>Particulars</h4>
            <p className="text-[0.8rem] text-muted-foreground">
              Add particulars to tbe budget
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
                    <div className="grid grid-cols-[1fr,0.5fr,auto,auto] items-center gap-2">
                      <FormField
                        control={form.control}
                        name={`particulars.${index}.title`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <TextInput
                                {...field}
                                id={`particulars.${index}.title`}
                                name={`particulars.${index}.title`}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`particulars.${index}.estimated_expense`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <NumberInput {...field} />
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
              variant="outline"
              size="sm"
              className="w-fit"
              onClick={() =>
                append({
                  title: "",
                  estimated_expense: 0,
                  id: faker.string.uuid(),
                })
              }
            >
              Add Particular
            </Button>
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget Description</FormLabel>
              <FormControl>
                <AutosizeTextarea
                  placeholder="Enter budget description..."
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
              <FormLabel>Budget Tags</FormLabel>
              <FormControl>
                <TagInput
                  {...field}
                  placeholder="Enter tags "
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

        <div className="grid grid-cols-2 gap-[2rem]">
          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-[0.4rem]">
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <DatePicker />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="due_date"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-[0.4rem]">
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <DatePicker />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget Notes</FormLabel>
              <FormControl>
                {/* <AutosizeTextarea
                  placeholder="Enter task notes..."
                  {...field}
                  id="description"
                  maxHeight={300}
                /> */}
                <PlateEditor
                  initialValue={plateEditorInitialValue}
                  {...field}
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

export default CreateBudget;
