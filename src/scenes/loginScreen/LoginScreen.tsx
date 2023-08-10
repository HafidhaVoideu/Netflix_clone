import Login from "./login/Login";
import Offer from "../../components/offer/Offer";
import FAQ from "../homeScreen/FAQ/FAQ";

import { useEffect } from "react";
import { OFFERS } from "../../data/data";
const LoginScreen = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <div>
      <Login />
      {OFFERS.map(({ direction, id, title, description, cover }) => (
        <Offer
          key={id}
          direction={direction || "left"}
          title={title}
          description={description}
          cover={cover}
        />
      ))}
      <FAQ />
    </div>
  );
};

export default LoginScreen;
