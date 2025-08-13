import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import router from "./routers";
import store from "./store";
import "./index.scss";
import { App as AntdApp, ConfigProvider, message } from "antd";
import "antd/dist/reset.css";
import "@ant-design/v5-patch-for-react-19";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AntdApp>
      <RouterProvider router={router} />
    </AntdApp>
  </Provider>
);
