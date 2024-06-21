 
import { Button } from "@/components/ui/Button/button";
import { Step, Stepper, useStepper } from "../common/Forms/StepperForm";
import { IComboboxProps, StepItem } from "@/@types";
import Combobox from "../common/Combobox/Combobox";
import { Label } from "@/components/ui/Label/label";
import { RocketIcon } from "@radix-ui/react-icons";
import { CalendarIcon, MinusIcon, PlusIcon } from "../common/icons/commonIcons";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/Table/table";
import NumberInput from "../common/FormElements/Input/NumberInput/NumberInput";

const categoriesComboboxData: IComboboxProps = {
  defaultText: "Search categories here...",
  emptyText: "No results found",
  placeholder: "Search categories here...",
  comboboxGroups: [
    {
      heading: "Categories",
      comboboxItems: [
        {
          icon: <CalendarIcon className="mr-2 h-4 w-4" />,
          label: "Raw Materials",
          value: "raw materials",
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          label: "Finished Goods",
          value: "finished Goods",
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          label: "maintenance",
          value: "maintenance",
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          label: "Service ",
          value: "service",
        },
      ],
    },
  ],
};

const inventoriesComboboxData: IComboboxProps = {
  defaultText: "Search inventories here...",
  emptyText: "No results found",
  placeholder: "Search inventories here...",
  comboboxGroups: [
    {
      heading: "Categories",
      comboboxItems: [
        {
          icon: <CalendarIcon className="mr-2 h-4 w-4" />,
          label: "Cement",
          value: "cement",
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          label: "Steel",
          value: "steel",
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          label: "Lubricants",
          value: "lubricants",
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          label: "Machinery ",
          value: "machinery",
        },
      ],
    },
  ],
};
const steps = [
  {
    label: " Category",
    key: "category",
    content: (
      <div className="flex flex-col my-[3rem] p-[1rem] gap-[1rem] border rounded-md">
        <Label className="">Select Inventory Category</Label>
        <Combobox comboboxData={categoriesComboboxData} />
      </div>
    ),
  },
  {
    label: " Inventories",
    key: "inventories",
    content: (
      <div className="flex flex-col my-[3rem] p-[1rem] gap-[1rem] border rounded-md">
        <Label className="">Select Inventories for Raw Materials</Label>
        <Combobox comboboxData={inventoriesComboboxData} />
      </div>
    ),
  },
  {
    label: " Quantity",
    key: "quantity",
    content: (
      <div className="flex flex-col my-[1rem] p-[1rem] gap-[1rem] border rounded-md">
        <Label className="">Set Quantity</Label>
        {/* <Combobox comboboxData={comboboxData} /> */}
        <div>
          <div>
            <Table className="border p-0">
              <TableHeader>
                <TableRow>
                  <TableCell> Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Stock </TableCell>
                  <TableCell> Quantity </TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className="">
                <TableRow>
                  <TableCell>Inventory1</TableCell>
                  <TableCell>Raw Materials</TableCell>
                  <TableCell>50</TableCell>
                  <TableCell>
                    <NumberInput />
                  </TableCell>
                  <TableCell className="flex items-center gap-1">
                    <Button variant={"outline"} size={"sm"}>
                      <PlusIcon />
                    </Button>
                    <p className="text-lg">0</p>
                    <Button size={"sm"} variant={"outline"}>
                      <MinusIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    ),
  },
] satisfies StepItem[];

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
    isDisabledStep,
  } = useStepper();

  return (
    <>
      {hasCompletedAllSteps && (
        <div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
          <h1 className="text-xl">Your Selected Inventory is Assigned 🎉</h1>
        </div>
      )}
      <div className="w-full flex justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default function AssignInventoryStepperForm() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper initialStep={0} steps={steps}>
        {steps.map((stepProps) => {
          return (
            <Step className="border-none" key={stepProps.key}>
              {stepProps.content}
            </Step>
          );
        })}
        <Footer />
      </Stepper>
    </div>
  );
}
