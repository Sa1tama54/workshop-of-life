import { Alert, Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, ValidateShemaTypes } from '../../utils/validate';
import FormField from '../ui/FormField';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm<ValidateShemaTypes>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data: ValidateShemaTypes) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="login" label="Логин" />
        <FormField name="password" label="Пароль" />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
