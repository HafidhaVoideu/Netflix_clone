import useAuthContext from "../hooks/useAuthContext";
import { Outlet, Navigate, useLocation } from "react-router";

const AuthRequierd = () => {
  const { authenti } = useAuthContext();
  const location = useLocation();

  return authenti.email ? (
    <Outlet />
  ) : (
    <Navigate to="/signIn" state={{ from: location }} replace />
  );
};

export default AuthRequierd;
