// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import AddCommentNew from "./AddCommentNew";

const meta: Meta<typeof AddCommentNew> = {
  title: "AddCommentNew",

  args: {},
  component: AddCommentNew,
  parameters: {
    layout: "centered"
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
