import Background from "../background/Background";
import { Outlet } from "react-router";

const BackgroundLayout = () => {
  return (
    <Background>
      <Outlet />
    </Background>
  );
};

export default BackgroundLayout;
