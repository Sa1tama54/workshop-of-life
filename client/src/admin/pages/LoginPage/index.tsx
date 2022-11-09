import { Paper } from '@mui/material';
import React from 'react';
import LoginForm from 'components/LoginForm';

import styles from 'admin/pages/LoginPage/Login.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <Paper elevation={0} className={styles.loginForm}>
        <div className={styles.titleGroup}>
          <h1 className={styles.loginTitle}>Вход</h1>
          <p className={styles.subtitle}>Введите логин и пароль ниже</p>
        </div>
        <LoginForm />
      </Paper>
    </div>
  );
};

export default LoginPage;
