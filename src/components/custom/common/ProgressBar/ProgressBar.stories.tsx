// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",

  args: {},
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 20,
    // size: "lg",
  },
};
export const Large: Story = {
  args: {
    progress: 20,
    size: "lg",
  },
};
export const Medium: Story = {
  args: {
    progress: 20,
    size: "md",
  },
};

export const Small: Story = {
  args: {
    progress: 20,
    size: "sm",
  },
};

export const FullWidth: Story = {
  args: {
    progress: 20,
    size: "full",
  },
  decorators: (Story) => {
    return (
      <div className="w-[500px]">
        <Story />
      </div>
    );
  },
};
export const Primary: Story = {
  args: {
    progress: 50,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    progress: 50,
    variant: "secondary",
  },
};
