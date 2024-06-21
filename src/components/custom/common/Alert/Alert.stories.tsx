// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Alert",

  args: {},
  component: Alert,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Are you sure you want to delete this ?",
    description: "This will be deleted permanently and will not be recovered.",
  },
};
