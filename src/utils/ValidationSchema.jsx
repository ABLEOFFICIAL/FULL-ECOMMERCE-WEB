// validation/ValidationSchema.js
import * as yup from "yup";

// Full schema for sign-up
const SignUpSchema = yup.object().shape({
  name: yup.string().required("Enter name!"),
  email: yup.string().email("Enter a valid email!").required("Enter email!"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long!")
    .required("Enter password!"),
});

// Login schema derived from sign-up
const LoginSchema = SignUpSchema.pick(["email", "password"]);

export { SignUpSchema, LoginSchema };

export const AddressUpSchema = yup.object().shape({
  name: yup.string().required("Enter name!"),
  country: yup.string().required("Enter Country!"),
  streetName: yup.string().required("Enter street address!"),
  city: yup.string().required("Enter city name!"),
  state: yup.string().required("Required!"),
  zipCode: yup.string().required("Required!"),
  phoneNumber: yup.string().required("Enter Phone!"),
});
