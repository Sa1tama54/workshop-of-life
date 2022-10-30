import { Paper, Typography } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/login.module.scss';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <Paper elevation={0} className={styles.loginForm}>
        <div className={styles.titleGroup}>
          <Typography variant="h1" className={styles.loginTitle}>
            Вход
          </Typography>
          <Typography className={styles.subtitle}>Введите логин и пароль ниже</Typography>
        </div>
        <LoginForm />
      </Paper>
    </div>
  );
};

export default Login;
