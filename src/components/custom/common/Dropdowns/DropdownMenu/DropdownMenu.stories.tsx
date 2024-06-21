// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Dropdown from "./DropdownMenu";
import { dropdownMenus } from "@/utils/constants";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",

  component: Dropdown,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    dropdownTriggerVariant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    dropdownVariant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    dropdownTriggerSize: {
      control: "select",

      options: ["default", "sm", "md", "lg"],
    },
    dropdownSize: {
      control: "select",
      options: ["default", "sm", "md", "lg"],
    },
  },
};

export const Default: Story = {
  args: {
    menu: dropdownMenus,
  },
};

export const Large: Story = {
  args: {
    menu: dropdownMenus,
    dropdownSize: "lg",
  },
};
export const Medium: Story = {
  args: {
    menu: dropdownMenus,
    dropdownSize: "md",
  },
};
export const Small: Story = {
  args: {
    menu: dropdownMenus,
    dropdownSize: "sm",
  },
};

export const DefaultTrigger: Story = {
  args: {
    menu: dropdownMenus,
  },
};

export const LargeTrigger: Story = {
  args: {
    menu: dropdownMenus,
    dropdownTriggerSize: "lg",
    dropdownSize: "lg",
  },
};
export const MediumTrigger: Story = {
  args: {
    menu: dropdownMenus,
    dropdownSize: "md",
    dropdownTriggerSize: "lg",
  },
};
export const SmallTrigger: Story = {
  args: {
    menu: dropdownMenus,
    dropdownTriggerSize: "sm",
  },
};

export const Primary: Story = {
  args: {
    menu: dropdownMenus,
    dropdownVariant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    menu: dropdownMenus,
    dropdownVariant: "secondary",
  },
};

export const SecondaryTriggerButton: Story = {
  args: {
    menu: dropdownMenus,
    // dropdownVariant: "secondary",
  },
};

export const OutlinedTriggerButton: Story = {
  args: {
    menu: dropdownMenus,
    // dropdownVariant: "secondary",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
