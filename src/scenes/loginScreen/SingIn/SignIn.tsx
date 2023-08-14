import "./singIn.css";

import * as Yup from "yup";
import { FormikHelpers, FormikProps } from "formik/dist/types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

type FormValues = {
  email: string;
  password: string;
};

const initialValues: FormValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const validateSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("required"),
    password: Yup.string()
      .test(
        "len",
        "password should be at least 6 characters",
        (val) => typeof val === "string" && val.length >= 6
      )
      .required("required"),
  });

  const handleOnSubmit = (
    values: FormValues,
    onSubmit: FormikHelpers<FormValues>
  ) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((authUser) => {
        console.log("authUser:", authUser);
        onSubmit.resetForm();
        onSubmit.setSubmitting(false);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <section className="sign-in">
      <div className="sign-in__content">
        <h1 className="sign-in__title">Sign in</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
          validationSchema={validateSchema}
        >
          {(formik: FormikProps<FormValues>) => (
            <Form className="sign-in__form">
              <Field
                id="email_id"
                name="email"
                type="email"
                placeholder="email"
              />

              <span className="error-formik">
                <ErrorMessage name="email" />
              </span>
              <Field
                id="password_id"
                name="password"
                type="password"
                placeholder="password"
              />

              <span className="error-formik">
                <ErrorMessage name="password" />
              </span>

              <button
                className="sign-in__btn"
                disabled={
                  !(formik.isValid && formik.dirty) || formik.isSubmitting
                }
                type="submit"
              >
                {" "}
                Sign in
              </button>

              <p className="sign-in__subtitle">
                New To Nerflix?{" "}
                <a onClick={() => navigate("/signUp")}>Sign up Now</a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default SignIn;
