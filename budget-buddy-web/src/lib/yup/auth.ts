import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const RegisterSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: yup.string().min(8, "Password must be at least 8 characters").required("Please confirm your password")
    .oneOf(
      [yup.ref('password')],
      'Passwords do not match'
    ),
});