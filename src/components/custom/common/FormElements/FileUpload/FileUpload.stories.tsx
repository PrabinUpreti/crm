// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import FileUpload from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Form/Input/FileUpload",

  args: {
    // user: userInfo,
  },
  component: FileUpload,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
