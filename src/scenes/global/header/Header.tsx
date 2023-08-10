import "./header.css";
import logo from "../../../assets/netflix.png";
import Select from "../../../components/select/Select";
import { useNavigate } from "react-router";
import { getUser } from "../../../redux/features/userSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(getUser);

  return (
    <header className="login__header">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        className="login__logo"
      />
      {/* select */}
      <Select />

      {!user.email ? (
        <button className="login__btn" onClick={() => navigate("/signIn")}>
          sign in
        </button>
      ) : (
        <button className="login__btn" onClick={() => navigate("/home")}>
          account
        </button>
      )}
    </header>
  );
};

export default Header;
