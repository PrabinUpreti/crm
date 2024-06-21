// AreaCharts.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import AreaCharts from "./AreaCharts";

const meta: Meta<typeof AreaCharts> = {
  title: "Charts/AreaCharts",

  component: AreaCharts,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
//   args: {
//     type: "large",
//     // items: sidebarItems(),
//     path: "/",
//   },
};
export const Small: Story = {
//   args: {
//     // type: "small",
//     // items: sidebarItems(),
//     path: "/",
//   },
};
