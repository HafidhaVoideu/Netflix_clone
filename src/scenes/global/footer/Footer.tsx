import Select from "../../../components/select/Select";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a> Questions? Contact us</a>
      <nav className="footer__nav">
        <ul className="footer__list">
          <li>
            <a> FAQ</a>
          </li>
          <li>
            <a>Investor Relations</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Speed Test</a>
          </li>
        </ul>

        <ul className="footer__list">
          <li>
            <a> Help center</a>
          </li>
          <li>
            {" "}
            <a>Jobs</a>
          </li>
          <li>
            {" "}
            <a> Cookies Prefernces</a>{" "}
          </li>

          <li>
            {" "}
            <a>Legal notices</a>
          </li>
        </ul>

        <ul className="footer__list">
          <li>
            <a>Account</a>
          </li>
          <li>
            <a>Ways to watch</a>
          </li>
          <li>
            <a>Corporate information</a>
          </li>

          <li>
            <a> Only on netflix</a>
          </li>
        </ul>
        <ul className="footer__list">
          <li>
            <a>Media center</a>
          </li>
          <li>
            <a>Terms of use</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>
      </nav>

      <Select />

      <p> Netflix Algeria</p>
    </footer>
  );
};

export default Footer;
