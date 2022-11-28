import React from 'react';
import { Alert, Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginSchema } from 'common/utils/validate';
import { LoginShemaTypes } from 'common/utils/validate';

import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { useAuthRedirect } from 'common/hooks/useAuthRedirect';

import { userSelector } from 'redux/user/selector';
import { login } from 'redux/user/asyncActions';

import FormField from 'components/ui/FormField';

import styles from 'components/LoginForm/LoginForm.module.scss';

const LoginForm = () => {
  useAuthRedirect();
  const dispatch = useAppDispatch();
  const { status, message } = useAppSelector(userSelector);

  const form = useForm<LoginShemaTypes>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginShemaTypes) => {
    dispatch(login(data));
  };

  return (
    <FormProvider {...form}>
      {message ? (
        <Alert style={{ marginBottom: 20 }} severity="error">
          {message}
        </Alert>
      ) : null}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="login" label="Логин" />
        <FormField name="password" label="Пароль" />

        <Button
          disabled={!form.formState.isValid && status === 'loading'}
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
