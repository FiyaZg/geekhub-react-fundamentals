import { getToken } from "@/utils";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRoute() {
  const token = getToken();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
