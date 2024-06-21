// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Form/Input/TextInput",

  args: {
    placeholder: "Input here ...",
  },
  component: TextInput,

  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
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
