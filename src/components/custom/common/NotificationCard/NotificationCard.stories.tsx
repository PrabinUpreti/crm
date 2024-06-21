// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import NotificationCard from "./NotificationCard";
import { notifications } from "@/utils/constants/notification";

const meta: Meta<typeof NotificationCard> = {
  title: "NotificationCard",

  args: {},
  component: NotificationCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <div className="m-[2rem]">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notifications: notifications,
  },
};
