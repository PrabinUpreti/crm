// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import AddComment from "./AddComment";


const meta: Meta<typeof AddComment> = {
  title: "AddComment",

  args: {
  },
  component: AddComment,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
