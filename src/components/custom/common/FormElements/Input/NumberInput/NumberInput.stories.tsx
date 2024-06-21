// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import NumberInput from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Form/Input/NumberInput",

  args: {},
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: " Number Input here ...",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
};
export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};