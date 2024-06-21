// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Combobox from "./Combobox";
import { comboboxData } from "@/utils/constants";

const meta: Meta<typeof Combobox> = {
  title: "Combobox",

  args: {
    comboboxData: comboboxData,
  },
  component: Combobox,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
