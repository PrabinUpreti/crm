// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import AvatarDropdown from "./AvatarDropdownMenu";
import { avatarDropdownMenu } from "@/utils/constants";

const meta: Meta<typeof AvatarDropdown> = {
  title: "AvatarDropdown",
  args: {
    name: "user",
  },

  component: AvatarDropdown,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    name: {
      control: "text",
    },
    imgSrc: {
      control: "text",
    },
    dropdownVariant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    avatarSize: {
      control: "select",

      options: ["default", "sm", "md", "lg"],
    },
    dropdownSize: {
      control: "select",
      options: ["default", "sm", "md", "lg"],
    },
  },
};

export const Default: Story = {
  args: {
    menu: avatarDropdownMenu,
  },
};

export const Large: Story = {
  args: {
    menu: avatarDropdownMenu,
    dropdownSize: "lg",
  },
};
export const Medium: Story = {
  args: {
    menu: avatarDropdownMenu,
    dropdownSize: "md",
  },
};
export const Small: Story = {
  args: {
    menu: avatarDropdownMenu,
    dropdownSize: "sm",
  },
};

export const DefaultAvatar: Story = {
  args: {
    menu: avatarDropdownMenu,
  },
};

export const LargeAvatar: Story = {
  args: {
    menu: avatarDropdownMenu,
    avatarSize: "lg",
    dropdownSize: "lg",
  },
};
export const MediumAvatar: Story = {
  args: {
    menu: avatarDropdownMenu,
    avatarSize: "md",
  },
};
export const SmallAvatar: Story = {
  args: {
    menu: avatarDropdownMenu,
    avatarSize: "sm",
  },
};

export const Primary: Story = {
  args: {
    menu: avatarDropdownMenu,
    dropdownVariant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    menu: avatarDropdownMenu,
    dropdownVariant: "secondary",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
