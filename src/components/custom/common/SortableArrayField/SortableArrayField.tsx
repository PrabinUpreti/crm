"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DragHandleDots2Icon, TrashIcon } from "@radix-ui/react-icons";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/Form/form";
import { Input } from "@/components/ui/Input/input";
import { Skeleton } from "@/components/ui/Skeleton/skeleton";
import {
  Sortable,
  SortableDragHandle,
  SortableItem,
} from "@/components/custom/common/Sortable/Sortable";
import TextInput from "../FormElements/Input/TextInput/TextInput";
import NumberInput from "../FormElements/Input/NumberInput/NumberInput";

const schema = z.object({
  particulars: z.array(
    z.object({
      name: z.string(),
      amount: z.string(),
    })
  ),
});

type Schema = z.infer<typeof schema>;

export default function SortableArrayField() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      particulars: [
        // {
        //   name: "Salary",
        //   amount: "360000000000",
        // },
        // {
        //   name: "Inventories",
        //   amount: "180",
        // },
      ],
    },
  });

  function onSubmit(input: Schema) {
    console.log({ input });
  }

  const { fields, append, move, remove } = useFieldArray({
    control: form.control,
    name: "particulars",
  });

  return (
    <div className="rounded-lg border p-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-4xl flex-col gap-4">
          <div className="space-y-1">
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
              }>
              <div className="w-full space-y-2">
                {fields.map((field, index) => (
                  <SortableItem key={field.id} value={field.id} asChild>
                    <div className="grid grid-cols-[1fr,0.5fr,auto,auto] items-center gap-2">
                      <FormField
                        control={form.control}
                        name={`particulars.${index}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <TextInput
                                {...field}
                                id={`particulars.${index}.name`}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`particulars.${index}.amount`}
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
                        className="size-8 shrink-0">
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
                        onClick={() => remove(index)}>
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
                  name: "",
                  amount: "",
                })
              }>
              Add Particular
            </Button>
          </div>
          {/* <Button type="submit" className="w-fit">
            Submit
          </Button> */}
        </form>
      </Form>
    </div>
  );
}
