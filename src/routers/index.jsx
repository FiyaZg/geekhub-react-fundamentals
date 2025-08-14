import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout/Layout";
import Login from "@/pages/Login/Login";
import AuthRoute from "@/components/AuthRoute.jsx";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";

const router = createBrowserRouter([
  {
    // 受保护的首页
    element: <AuthRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "home", element: <Home /> },
          { path: "article", element: <Article /> },
          { path: "publish", element: <Publish /> },
        ],
      },

      // 这里继续加受保护的子路由...
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default router;
