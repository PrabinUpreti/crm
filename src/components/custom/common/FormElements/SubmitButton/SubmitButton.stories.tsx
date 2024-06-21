// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import SubmitButton from "./SubmitButton";
import { IoMdAdd } from "react-icons/io";

const meta: Meta<typeof SubmitButton> = {
  title: "Form/SubmitButton",

  args: {
    children: "Submit",
    // user: userInfo,
  },
  component: SubmitButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <div className="m-[2rem]">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    disabled: false,
  },
};
export const Rounded: Story = {
  args: {
    variant: "default",
    className: "rounded-full",
  },
};
export const Outlined: Story = {
  args: {
    variant: "outline",
    className: "rounded-full",
  },
};

export const RoundedIcon: Story = {
  args: {
    variant: "secondary",
    className: "rounded-full flex gap-[0.4rem] ",
    // asChild: true,
    children: [
      <IoMdAdd
        key={"roundedIcon"}
        className=" bg-primary  text-white rounded-full w-[1.7rem] h-[1.5rem]"
      />,
      "Submit",
    ],
  },
};
// export const Default:Story =
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
// export const Full width:Story =
export const FullWidth: Story = {
  args: {
    // disabled: true,
    className: "w-[100%] max-w-[500px] w-[400px] ",
  },
};
