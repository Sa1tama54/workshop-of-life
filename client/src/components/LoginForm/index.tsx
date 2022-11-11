import { Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin, useNotify } from 'react-admin';
import FormField from 'components/ui/FormField';
import styles from 'components/LoginForm/LoginForm.module.scss';
import { LoginSchema } from 'common/utils/validate';
import { LoginShemaTypes } from 'common/utils/types';

const LoginForm = () => {
  const form = useForm<LoginShemaTypes>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const auth = useLogin();
  const notify = useNotify();

  const onSubmit = (params: LoginShemaTypes) => {
    const { login, password } = params;

    auth({ login, password }).catch((err) => notify(err.response.data.message));
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="login" label="Логин" />
        <FormField name="password" label="Пароль" />
        <Button
          disabled={!form.formState.isValid}
          className={styles.loginBtn}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
