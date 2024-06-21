// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Sidebar from "./Sidebar";
import { sidebarItems } from "@/utils/constants/sidebar";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/redux/store";

const meta: Meta<typeof Sidebar> = {
  title: "Sidebar",
  decorators: (Story) => {
    return (
      <ReduxProvider store={store}>
        <Story />
      </ReduxProvider>
    );
  },

  component: Sidebar,
  parameters: {
    layout: "left",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    items: sidebarItems({ workspaces: [], bookmarks: [], archives: [] }),
    path: "/",
  },
};
export const Small: Story = {
  args: {
    // type: "small",
    items: sidebarItems(),
    path: "/",
  },
};
