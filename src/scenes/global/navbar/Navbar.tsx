import { useEffect, useState } from "react";
import "./navbar.css";
import netflix from "../../../assets/netflix.png";

import avatar from "../../../assets/avatar.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${show && "nav--black"}`}>
      <div className="nav__imgs">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={netflix}
          alt="logo"
        />
        <img
          className="nav__avatar"
          onClick={() => navigate("/editProfile")}
          src={avatar}
          alt="avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
