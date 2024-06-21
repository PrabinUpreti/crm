// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Breadcrumb",

  args: {},
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
