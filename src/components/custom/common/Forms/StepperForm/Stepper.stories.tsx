// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import StepperExamples from "./Examples";

const meta: Meta<typeof StepperExamples> = {
  title: "StepperExamples",

  args: {},
  component: StepperExamples,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
