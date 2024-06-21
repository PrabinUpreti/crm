// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Files from "./Files";

const meta: Meta<typeof Files> = {
  title: "Files",

  args: {},
  component: Files,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
