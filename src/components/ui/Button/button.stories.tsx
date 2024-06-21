// Button.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import { Button } from "./button";
import { IoMdAdd } from "react-icons/io";
import { ReloadIcon } from "@radix-ui/react-icons";
const handleOnClick = () => {
  alert("Clicked");
};

const meta: Meta<typeof Button> = {
  title: "Button",

  component: Button,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "default ",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "lg", "icon"],
      },
    },

    disabled: { control: "boolean" },
    onClick: { handleOnClick },
  },
};

// console.log(buttonVariants);
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    disabled: false,
    children: "Button",
  },
};
export const Rounded: Story = {
  args: {
    variant: "default",
    className: "rounded-full",
    children: "Button",
  },
};
export const Outlined: Story = {
  args: {
    variant: "outline",
    className: "rounded-full",
    children: "Button",
  },
};

export const RoundedIcon: Story = {
  args: {
    variant: "secondary",
    className: "rounded-full flex gap-[0.4rem] ",
    // asChild: true,
    children: [
      <IoMdAdd className=" bg-primary  text-white rounded-full w-[1.7rem] h-[1.5rem]" />,
      "Create",
    ],
  },
};

export const Loading: Story = {
  args: {
    variant: "default",
    children: [
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />,
      "Please wait",
    ],
  },
};
// export const Default:Story =
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};
