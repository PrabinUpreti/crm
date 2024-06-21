// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import {InputOTP} from "./input-otp";
import { Layout } from "lucide-react";
import { onChange } from "react-toastify/dist/core/store";

const meta: Meta<typeof InputOTP> = {
  title: "InputOTP",
  component: InputOTP,
  parameters:{
    Layout: "centered",
  },

  
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    length:6,
    onChange:(otp: string) => console.log(otp),

  },
};
