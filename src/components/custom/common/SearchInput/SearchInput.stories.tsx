import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Search",
    placeholder: "Search here ...",
  },
};
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    inputSize: "default",
  },
};
export const ExtraLarge: Story = {
  args: {
    inputSize: "xl",
  },
};

export const Large: Story = {
  args: {
    inputSize: "lg",
  },
};

export const Medium: Story = {
  args: {
    inputSize: "md",
  },
};
export const Small: Story = {
  args: {
    inputSize: "sm",
  },
};

export const Primary: Story = {
  args: {
    inputSize: "lg",
  },
};

export const Secondary: Story = {
  args: {
    inputSize: "lg",
  },
};

export const Outline: Story = {
  args: {
    inputSize: "lg",
  },
};
