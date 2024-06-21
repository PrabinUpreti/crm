// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import PlateEditor from "./PlateEditor.js";
import RootLayout from "@/components/custom/layout/RootLayout/RootLayout.js";

const meta: Meta<typeof PlateEditor> = {
  title: "Editor/PlateEditor",

  args: {},
  component: PlateEditor,
  parameters: {
    layout: "top",
  },
  decorators: (Story) => {
    return (
      <RootLayout>
        <div className="mx-[2rem] mt-[6rem] border ">
          <Story />
        </div>
      </RootLayout>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
