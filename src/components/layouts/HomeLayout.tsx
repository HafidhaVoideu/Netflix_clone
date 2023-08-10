import Navbar from "../../scenes/global/navbar/Navbar";
import { Outlet } from "react-router";
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
