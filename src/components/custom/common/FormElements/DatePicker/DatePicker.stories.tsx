// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import DatePicker from "./DatePicker";


const meta: Meta<typeof DatePicker> = {
  title: "Form/DatePicker",

  args: {},
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
