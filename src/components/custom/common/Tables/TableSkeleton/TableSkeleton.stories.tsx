// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import TableSkeleton from "./TableSkeleton";

const meta: Meta<typeof TableSkeleton> = {
  title: "TableSkeleton",

  args: {},
  component: TableSkeleton,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
