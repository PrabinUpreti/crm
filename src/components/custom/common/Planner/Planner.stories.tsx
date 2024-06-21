// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Planner from "./PlannerDemo";

const meta: Meta<typeof Planner> = {
  title: "Planner",

  args: {},
  component: Planner,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
