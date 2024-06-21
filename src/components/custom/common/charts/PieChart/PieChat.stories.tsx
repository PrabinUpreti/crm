import { Meta, StoryObj } from "@storybook/react";
import PieChart from "./PieChart";
import { pieChartData } from "@/utils/constants";

const meta: Meta<typeof PieChart> = {
  title: "Charts/Pie",
  component: PieChart,
  args: {
    data: pieChartData,
    title: "Project Status",
  },
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // args: {},
};

export default meta;
