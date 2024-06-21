// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Header from "./Header";
import { userInfo } from "@/utils/constants";

const meta: Meta<typeof Header> = {
  title: "Header",

  args: {
    user: userInfo,
  },
  component: Header,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
