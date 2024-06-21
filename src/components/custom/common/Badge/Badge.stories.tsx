// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Badge",

  args: {
    label: "badge",
    variant: "outline",
  },
  component: Badge,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const ExtraLarge: Story = {
  args: {
    size:"xl"
  },
};
