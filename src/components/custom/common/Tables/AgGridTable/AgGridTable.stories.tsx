// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import AgGridTable from "./AgGridTable";
import { colDefs, rowData } from "./data";

const meta: Meta<typeof AgGridTable> = {
  title: "Tables/AgGridTable",

  args: {
    rowData,
    colDefs,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "dark"],
    },
  },
  component: AgGridTable,
  parameters: {
    // layout: "centered",
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

export const Basic: Story = {
  args: {
    rowSelection: "single",
    suppressRowClickSelection: true,
    pagination: true,
  },
};

export const QuartzTheme: Story = {
  args: {
    // rowSelection: null,
    // suppressRowClickSelection: false,
    // paginationPageSize: null,
    // pagination: null,
    theme: "ag-theme-quartz",
  },
};

export const AlpineTheme: Story = {
  args: {
    // rowSelection: null,
    // suppressRowClickSelection: false,
    // paginationPageSize: null,
    // pagination: null,
    theme: "ag-theme-alpine",
  },
};
export const Primary: Story = {
  args: {
    // rowSelection: null,
    // suppressRowClickSelection: false,
    // paginationPageSize: null,
    // pagination: null,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    // rowSelection: null,
    // suppressRowClickSelection: false,
    // paginationPageSize: null,
    // pagination: null,
    variant: "secondary",
  },
};
export const Dark: Story = {
  args: {
    // rowSelection: null,
    // suppressRowClickSelection: false,
    // paginationPageSize: null,
    // pagination: null,
    theme: "ag-theme-quartz-dark",
  },
};
export const Tall: Story = {
  args: {
    // rowSelection: null,
    // suppressRowClickSelection: false,
    // paginationPageSize: null,
    // pagination: null,
    // variant: "secondary",
    height: 600,
  },
};

export const Short: Story = {
  args: {
    // rowSelection: null,
    // suppressRowClickSelection: false,
    // paginationPageSize: null,
    // pagination: null,
    // variant: "secondary",
  },
};
