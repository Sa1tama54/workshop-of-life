import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  login: yup.string().required('Логин обязательный'),
  password: yup
    .string()
    .min(6, 'Длина пароля должна быть более 5 символов')
    .max(32, 'Длина пароля должна быть менее 32 символов')
    .required('Пароль обязательный'),
});
