import { Meta, StoryObj } from "@storybook/react";
import BarChart from "./BarChart";
import { barChartData } from "@/utils/constants";

const meta: Meta<typeof BarChart> = {
  title: "Charts/Bar",
  component: BarChart,
  args: {
    title: "Budget Estimation",
    data: barChartData,
  },
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
