// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import SortableForm from "./SortableForm";

const meta: Meta<typeof SortableForm> = {
  title: "SortableForm",

  args: {},
  component: SortableForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
