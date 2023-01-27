import React from "react";
import { useFormik } from "formik";
import FormWrapper from "../../hoc/FormWrapper";
import { formValidations } from "../../formValidations/validation";
import { reach } from "yup";
import InputWrapper from "../../hoc/InputWrapper";
import FormInputs from "../../components/FormInputs";
import Button from "../../components/Button";
import FormErrors from "../../components/FormErrors";
import { Link } from "react-router-dom";

interface Login {
  loginHandler: (values: LoginValues) => void;
  toggleModal: () => void;
  loading: boolean;
  error: string | null | undefined;
  onGoogleClick: () => void;
}

export type LoginValues = {
  username: string;
  password: string;
};

const LoginView: React.FC<Login> = ({
  loginHandler,
  toggleModal,
  loading,
  error,
  onGoogleClick,
}) => {
  const formik = useFormik<LoginValues>({
    initialValues: { username: "", password: "" },
    validationSchema: reach(formValidations, "login"),
    onSubmit: (values) => loginHandler(values),
  });
  return (
    <FormWrapper onClose={toggleModal}>
      <header>
        <h2 className="text-xl font-semibold text-black text-left w-full">
          Login
        </h2>
        <div className="my-2">
          <p className="text-[13px] text-justify">
            By continuing, you agree are setting up a Reddit account and agree
            to our User Agreement and Privacy Policy.
          </p>
        </div>
      </header>
      <div className="space-y-3">
        <Button
          type="button"
          className="px-2 py-1.5 rounded-full border border-slate-300 w-full hover:bg-slate-100 hover:transition-all hover:duration-300"
          onClick={onGoogleClick}
        >
          Continue with Google
        </Button>
        <Button
          type="button"
          className="px-2 py-1.5 rounded-full border border-slate-300 w-full hover:bg-slate-100 hover:transition-all hover:duration-300"
        >
          Continue with Apple
        </Button>
      </div>
      <div className="w-full border-b border-slate-200 text-center relative flex items-center justify-center">
        <p className="absolute text-center py-2 px-4 bg-white -top-5 text-slate-500">
          OR
        </p>
      </div>
      <div className="">
        {!loading && error ? (
          <div className="py-1 mb-3 text-center bg-red-200  text-red-900 border border-red-400">
            <p className="text-sm ">{error}</p>
          </div>
        ) : null}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <InputWrapper>
            <FormInputs
              error={
                formik.touched.username && formik.errors.username ? true : false
              }
              type="text"
              label="Username"
              required={true}
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <FormErrors>{formik.errors.username}</FormErrors>
            ) : null}
          </InputWrapper>
          <InputWrapper>
            <FormInputs
              error={
                formik.touched.password && formik.errors.password ? true : false
              }
              required={true}
              type="password"
              label="Password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <FormErrors>{formik.errors.password}</FormErrors>
            ) : null}
          </InputWrapper>
          <div className="px-2 py-1">
            <p className="text-sm text-gray-600">
              Forget your{" "}
              <Link
                to="/forgot-username"
                className="hover:underline transition-all duration-300 text-blue-500"
              >
                username
              </Link>{" "}
              or{" "}
              <Link
                to="/forgot-password"
                className="hover:underline transition-all duration-300 text-blue-500"
              >
                Password?
              </Link>
            </p>
          </div>
          <Button
            type="submit"
            className="bg-orange-700 px-2 py-1.5 text-white rounded-full font-bold disabled:opacity-60"
            disabled={loading}
          >
            Login
          </Button>
          <div className="px-2">
            <p className="text-sm text-gray-600">
              New to Liredit?{" "}
              <Link
                to="/signup"
                className="hover:underline transition-all duration-300 text-blue-500"
              >
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </div>
    </FormWrapper>
  );
};

export default LoginView;
