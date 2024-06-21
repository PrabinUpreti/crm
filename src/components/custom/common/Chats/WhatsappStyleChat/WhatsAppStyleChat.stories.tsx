// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import MessageBox from "./WhatsAppStyleChat.tsx";

const meta: Meta<typeof MessageBox> = {
  title: "MessageBox",

  component: MessageBox,
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
