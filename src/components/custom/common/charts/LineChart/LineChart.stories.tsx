import { Meta, StoryObj } from "@storybook/react";
import LineChart from "./LineChart";

const meta: Meta<typeof LineChart> = {
  title: "Charts/Line",
  component: LineChart,
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
