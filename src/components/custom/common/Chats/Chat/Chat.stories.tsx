// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Chat from "./ChatDemo";

const meta: Meta<typeof Chat> = {
  title: "Chat",

  args: {},
  component: Chat,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
