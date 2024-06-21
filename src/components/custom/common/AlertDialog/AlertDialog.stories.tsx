// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import AlertDialog from "./AlertDialog";
import { Button } from "@/components/ui/Button/button";

const meta: Meta<typeof AlertDialog> = {
  title: "AlertDialog",

  args: {},
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button variant={"outline"}>Open dialog</Button>,
    title: "Are you sure you want to delete this ?",
    description: "This will be deleted permanently and will not be recovered.",
    CancelText: "Cancel",
    actionText: "Continue",
  },
};
