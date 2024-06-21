// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import AddCard from "./AddCard";

const meta: Meta<typeof AddCard> = {
  title: "AddCard",

  args: {},
  component: AddCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
