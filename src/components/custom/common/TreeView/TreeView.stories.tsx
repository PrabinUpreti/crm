// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import TreeView from "./TreeView";
import { TreeViewElement } from "./TreeViewApi";

const elements: TreeViewElement[] = [
  {
    id: "1",
    name: "components",
    children: [
      {
        id: "2",
        name: "extension",
        children: [
          {
            id: "3",
            name: "tree-view.tsx",
          },
          {
            id: "4",
            name: "tree-view-api.tsx",
          },
        ],
      },
      {
        id: "5",
        name: "dashboard-tree.tsx",
      },
    ],
  },
  {
    id: "6",
    name: "pages",
    children: [
      {
        id: "7",
        name: "page.tsx",
      },
      {
        id: "8",
        name: "page-guide.tsx",
      },
    ],
  },
  {
    id: "18",
    name: "env.ts",
  },
];

const meta: Meta<typeof TreeView> = {
  title: "TreeView",

  args: {
    elements: elements,
    // initialSelectedId: "1",
    initialExpendedItems: [],
    expandAll: false as const,
  },
  component: TreeView,
  parameters: {
    layout: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: null as never,
};
