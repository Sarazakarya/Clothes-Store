import * as yup from "yup";
const LoginSchema = yup.object().shape({
  email: yup.string().required("Email is Required").email(),
  password: yup
    .string()
    .required("Password is Required")
    .min(8, "Password Must be At least 8 Charachter"),
});
export default LoginSchema;
