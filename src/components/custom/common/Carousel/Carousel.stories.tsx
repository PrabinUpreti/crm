// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Carousel",
  decorators: (Story) => {
    return (
      <div className="max-w-[600px]">
        <Story />
      </div>
    );
  },
  args: {},
  component: Carousel,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const picSumUrl = "https://picsum.photos/400/400";
const carouselData = [
  {
    content: <img alt="" className="object-cover rounded-md" src={picSumUrl} />,
  },
  {
    content: <img alt="" className="object-cover rounded-md" src={picSumUrl} />,
  },
  {
    content: <img alt="" className="object-cover rounded-md" src={picSumUrl} />,
  },
  {
    content: <img alt="" className="object-cover rounded-md" src={picSumUrl} />,
  },
  {
    content: <img alt="" className="object-cover rounded-md" src={picSumUrl} />,
  },
  {
    content: <img alt="" className="object-cover rounded-md" src={picSumUrl} />,
  },
];
export const Default: Story = {
  args: {
    carouselData: carouselData,
  },
};
