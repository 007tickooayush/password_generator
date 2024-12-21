import { number, object } from "yup";

export const PasswordSchema = object().shape({
    passwordLength: number()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
});