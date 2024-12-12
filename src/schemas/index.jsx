import * as Yup from "yup";

export const logInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email.")
    .required("This field is required."),
  password: Yup.string()
    .required("This field is required.")
    .min(8, "Password must be at least 8 charachters long.")
    .matches(
      /^(?=.*[!@#$%^&*.?])(?=.{8,})/,
      "Password should contain at least one speacial character."
    ),
});

export const signUpSchema = Yup.object().shape({
  ssn: Yup.string()
    .matches(/^\d{8}-\d{4}$/, "SSN should be in this format: yyyymmdd-xxxx.")
    .required("This field is required."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("This field is required."),
  password: Yup.string()
    .required("This field is required.")
    .min(8, "Password must be at least 8 charachters long.")
    .matches(
      /^(?=.*[!@#$%^&*.?])(?=.{8,})/,
      "Password should contain at least one speacial character."
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password and confirm password should be the same."
  ),
});

export const offerSchema = Yup.object().shape({
  address: Yup.string().required("This field is required."),
  amount: Yup.number("Enter valid number.")
    .min(0)
    .required("This field is required.")
    .typeError("Amount cannot be negative."),
  price: Yup.number("Enter valid number.")
    .min(0)
    .required("This field is required.")
    .typeError("Amount cannot be negative."),
  type: Yup.string().required("This field is required."),
});

export const bidSchema = Yup.object().shape({
  newPrice: Yup.number("Enter valid number.")
    .min(0)
    .required("This field is required.")
    .typeError("Amount cannot be negative."),
});
