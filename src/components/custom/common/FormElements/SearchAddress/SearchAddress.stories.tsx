// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import SearchAddress from "./SearchAddress";

const meta: Meta<typeof SearchAddress> = {
  title: "SearchAddress",

  args: {},
  component: SearchAddress,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
