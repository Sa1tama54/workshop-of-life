import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '../app/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
