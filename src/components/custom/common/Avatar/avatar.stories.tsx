// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",

  component: Avatar,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export const Default: Story = {
  args: {
    // menu: dropdownMenus,
    imgSrc: "",
    name: "User",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
