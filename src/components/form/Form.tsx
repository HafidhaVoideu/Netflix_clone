import { IoIosArrowForward } from "react-icons/io";
import "./form.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/features/userSlice";

const Form = () => {
  const navigate = useNavigate();
  const login = useSelector(getUser);

  const handleSubmit = () => {
    login.email ? navigate("/home") : navigate("/signIn");
  };
  return (
    <article className="login__email">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login__form__input"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <button className="login__form__btn" type="submit">
          <span>Get Started</span>
          <span>
            <IoIosArrowForward />
          </span>
        </button>
      </form>
    </article>
  );
};

export default Form;
