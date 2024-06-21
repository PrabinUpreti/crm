import type { Preview } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import "../src/index.css";
import store from "./../src/redux/store";
const ReactRoutingWrapper = (Story: any) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};

const ReduxWrapper = (Story: any) => {
  return (
    <ReduxProvider store={store}>
      <Story />
    </ReduxProvider>
  );
};
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ReactRoutingWrapper, ReduxWrapper],
};

export default preview;
