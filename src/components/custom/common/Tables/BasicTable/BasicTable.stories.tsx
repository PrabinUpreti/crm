// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import BasicTable from "./BasicTable";
import { basicTableData, upcomingDeadlineData } from "@/utils/constants";

const meta: Meta<typeof BasicTable> = {
  title: "BasicTable",

  args: {
    // user: userInfo,
    ...upcomingDeadlineData,
  },
  component: BasicTable,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
