// AreaCharts.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import LoginPage from "./Login";

const meta: Meta<typeof LoginPage> = {
  title: "Auth/LoginPage",

  component: LoginPage,
  parameters: {
    layout: "",
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
