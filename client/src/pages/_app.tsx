import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import localFont from '@next/font/local';

import { theme } from 'common/theme';
import { store } from 'redux/store';

import 'styles/global.scss';

const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-Bold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-SemiBold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={montserrat.className}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default MyApp;
