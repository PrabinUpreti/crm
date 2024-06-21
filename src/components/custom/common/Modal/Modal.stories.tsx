// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Modal from "./Modal";
import { Button } from "@/components/ui/Button/button";
import { Label } from "@/components/ui/Label/label";
import { Input } from "@/components/ui/Input/input";

const meta: Meta<typeof Modal> = {
  title: "Modal",

  args: {
    trigger: <Button>Open dialog</Button>,
    title: "Edit profile",
    description:
      " Make changes to your profile here. Click save when you're done.",
    body: (
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value="User" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" value="user" className="col-span-3" />
        </div>
      </div>
    ),
    footer: <Button type="submit">Save changes</Button>,
  },

  component: Modal,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
