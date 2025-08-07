import { createBrowserRouter } from "react-router";
import Layout from "@/pages/Layout/Layout";
import Login from "@/pages/Login/Login";

const router = createBrowserRouter([
  { path: "/", Component: Layout },
  { path: "/login", Component: Login },
]);

export default router;
