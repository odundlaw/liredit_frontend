import * as Yup from "yup";

export const formValidations = Yup.object().shape({
  login: Yup.object({
    username: Yup.string()
      .min(2, "Must be greater than two characters")
      .required("Username is required"),
    password: Yup.string()
      .min(5, "Password has to be at least 5 characters")
      .required("Password is required"),
  }),
});
