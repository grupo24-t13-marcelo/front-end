import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().required("Email é obrigatório!"),
  password: yup.string().required("Senha é obrigatória!"),
});
