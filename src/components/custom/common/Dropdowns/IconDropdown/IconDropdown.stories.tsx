// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import IconDropdown from "./IconDropdown";
import { ThreeVerticalDots } from "@/components/custom/common/icons/commonIcons";

const dropdownMenus = {
  label: "Actions",
  items: [
    { id: 1, isLink: false, label: "Export CSV" },
    { id: 2, isLink: false, label: "Export XLSX" },
    { id: 3, isLink: false, label: "Send Email" },
  ],
};

const meta: Meta<typeof IconDropdown> = {
  title: "IconDropdown",

  component: IconDropdown,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    dropdownVariant: {
      control: "select",
      options: ["primary", "secondary"],
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
    dropdownSize: "sm",
    dropdownVariant: "secondary",
    icon: <ThreeVerticalDots />,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
