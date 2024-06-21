// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import FilePicker from "./FilePicker";

const meta: Meta<typeof FilePicker> = {
  title: "Form/Input/FilePicker",

  args: {
    // user: userInfo,
  },
  component: FilePicker,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
