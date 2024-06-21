// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import EmailInput from "./EmailInput";

const meta: Meta<typeof EmailInput> = {
  title: "Form/Input/EmailInput",

  args: {
    placeholder: "Enter email ...",
  },
  component: EmailInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Input here ...",
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
