// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import SpeedDial from "./SpeedDial";
import Combobox from "../Combobox/Combobox";
import { comboboxData } from "@/utils/constants";

const items = [
  <Combobox key={"combobox-1"} comboboxData={comboboxData} />,
  <Combobox key={"combobox-2"} comboboxData={comboboxData} />,
];

const meta: Meta<typeof SpeedDial> = {
  title: "SpeedDial",

  decorators: (Story) => {
    return (
      <div className="w-full ml-[400px] ">
        <Story />
      </div>
    );
  },
  args: {
    direction: "left",
    children: items,
    itemWidth: 200,
  },
  component: SpeedDial,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
