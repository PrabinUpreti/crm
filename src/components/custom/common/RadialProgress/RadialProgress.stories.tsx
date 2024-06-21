// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import RadialProgress from "./RadialProgress";

const meta: Meta<typeof RadialProgress> = {
  title: "RadialProgress",

  args: {},
  component: RadialProgress,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
