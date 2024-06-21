// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import RegisterPage from "./Register";
import { userInfo } from "@/utils/constants";

const meta: Meta<typeof RegisterPage> = {
  title: "Auth/RegisterPage",

  args: {
    user: userInfo,
  },
  component: RegisterPage,
  parameters: {
    layout: "top",
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
  args: {},
};
