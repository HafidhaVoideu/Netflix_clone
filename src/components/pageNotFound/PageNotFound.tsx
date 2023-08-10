import { useEffect } from "react";
import "./pageNotFound.css";
import { useNavigate } from "react-router";
const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate("/", { state: "page not found" });
    }, 4000);
    return () => clearTimeout(timeOut);
  });

  return (
    <section className="error-page">
      <h1 className="error-page__title">Page Not Found 404</h1>
    </section>
  );
};

export default PageNotFound;
