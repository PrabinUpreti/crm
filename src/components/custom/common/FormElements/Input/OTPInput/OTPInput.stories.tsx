// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import OTPInput from "./OTPInput";

const meta: Meta<typeof OTPInput> = {
  title: "OTPInput",

  args: {},
  component: OTPInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
