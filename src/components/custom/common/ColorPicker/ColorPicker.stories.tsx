// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import ColorPicker from "./ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  title: "ColorPicker",

  args: {},
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
