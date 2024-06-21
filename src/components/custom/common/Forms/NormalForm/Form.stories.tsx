// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Form from "./Form";
import { userInfo } from "@/utils/constants";

const meta: Meta<typeof Form> = {
  title: "Form",

  args: {
    user: userInfo,
  },
  component: Form,
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
