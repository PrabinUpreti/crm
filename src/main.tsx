import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./index.css";
import RootLayout from "./components/custom/layout/RootLayout/RootLayout.tsx";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store.ts";

import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  `Ngo9BigBOggjHTQxAR8/V1NBaF1cWmhPYVFzWmFZfVpgcl9FZlZRQWYuP1ZhSXxXdkNhWX9ZcXFQQmRfV0E=`,
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RootLayout>
        <App />
      </RootLayout>
    </ReduxProvider>
  </React.StrictMode>,
);
