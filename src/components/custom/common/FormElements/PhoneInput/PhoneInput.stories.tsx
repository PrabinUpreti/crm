// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import { PhoneInput } from "./PhoneInput";
import en from "react-phone-number-input/locale/en";
const meta: Meta<typeof PhoneInput> = {
  title: "PhoneInput",

  args: {
    // value: {
    //   __tag: "9876543210",
    // },
    value: "9876543210",
    onChange: () => {},
    onCountryChange: () => {},
    placeholder: "Enter a phone number",
    international: true,
    defaultCountry: "US",
    labels: en,
  },
  component: PhoneInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
