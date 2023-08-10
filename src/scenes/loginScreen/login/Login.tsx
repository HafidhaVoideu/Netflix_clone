import "./login.css";
import Form from "../../../components/form/Form";
import Background from "../../../components/background/Background";
const Login = () => {
  return (
    <Background>
      <section className="login">
        <section className="login__content">
          <h1> Unlimited movies, TV shows, and more </h1>
          <h2> Plans now start at USD3.99/month.</h2>
          <Form />
        </section>
      </section>
    </Background>
  );
};

export default Login;
