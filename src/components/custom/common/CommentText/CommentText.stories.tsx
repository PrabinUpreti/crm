// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import CommentText from "./CommentText";

const meta: Meta<typeof CommentText> = {
  title: "CommentText",

  args: {},
  component: CommentText,
  parameters: {
    layout: "centered"
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
