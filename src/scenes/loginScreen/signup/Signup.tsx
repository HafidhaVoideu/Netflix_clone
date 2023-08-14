import "./signup.css";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import { auth } from "../../../firebase";

import "../SingIn/singIn.css";
import { useNavigate } from "react-router";

type SignupFormValues = {
  name: string;
  surname: string;
  email: string;
  pwd: string;
  pwdConfirmation: string;
};

const initialValues: SignupFormValues = {
  name: "",
  surname: "",
  email: "",
  pwd: "",
  pwdConfirmation: "",
};

const Signup = () => {
  const navigate = useNavigate();

  //   validation Schema

  const validateSchema = Yup.object({
    name: Yup.string().required("required"),
    surname: Yup.string().required("required"),
    email: Yup.string().email("Invalid Email Format").required("required"),
    pwd: Yup.string()
      .test(
        "len",
        "password should be at least 6 characters",
        (val) => typeof val === "string" && val.length >= 6
      )
      .required("required"),
    pwdConfirmation: Yup.string()
      .oneOf([Yup.ref("pwd"), ""], "Your passwords do not match.")
      .required("required"),
  });

  //   validation Register

  const handleOnSubmit = (
    values: SignupFormValues,
    onSubmit: FormikHelpers<SignupFormValues>
  ) => {
    createUserWithEmailAndPassword(auth, values.email, values.pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(user.email);
        onSubmit.resetForm();
        onSubmit.setSubmitting(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <section className="sign-up">
      <div className="sign-up__content">
        <h1 className="sign-up__title">Sign up</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
          validationSchema={validateSchema}
        >
          {(formik: FormikProps<SignupFormValues>) => {
            console.log("formik", formik.errors);

            return (
              <Form className="sign-up__form">
                <Field
                  id="name_id"
                  name="name"
                  type="text"
                  placeholder="name"
                />

                <span className="error-formik">
                  <ErrorMessage className="error-formik" name="name" />
                </span>
                <Field
                  id="surname_id"
                  name="surname"
                  type="text"
                  placeholder="surname"
                />
                <span className="error-formik">
                  <ErrorMessage className="error-formik" name="surname" />
                </span>

                <Field
                  id="email_id"
                  name="email"
                  type="email"
                  placeholder="email address"
                />

                <span className="error-formik">
                  <ErrorMessage className="error-formik" name="email" />
                </span>

                <Field
                  id="password_id"
                  name="pwd"
                  type="password"
                  placeholder="password"
                />

                <span className="error-formik">
                  <ErrorMessage className="error-formik" name="pwd" />
                </span>

                <Field
                  id="passwordConf_id"
                  name="pwdConfirmation"
                  type="password"
                  placeholder="Retype password"
                />

                <span className="error-formik">
                  <ErrorMessage
                    className="error-formik"
                    name="pwdConfirmation"
                  />
                </span>

                <button
                  className="sign-up__btn"
                  type="submit"
                  disabled={
                    !(formik.isValid && formik.dirty) || formik.isSubmitting
                  }
                >
                  {" "}
                  Sign up
                </button>

                <p className="sign-up__subtitle">
                  Already a memeber?{" "}
                  <a onClick={() => navigate("/signIn")}>Sign in Now</a>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default Signup;
