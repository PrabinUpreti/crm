// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import CountryState from "./CountryState";

const meta: Meta<typeof CountryState> = {
  title: "Form/Input/CountryState",

  args: {},
  component: CountryState,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
