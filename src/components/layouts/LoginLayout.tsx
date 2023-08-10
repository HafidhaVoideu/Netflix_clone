import Header from "../../scenes/global/header/Header";
import { Outlet } from "react-router";

const LoginLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LoginLayout;
