import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { theme } from 'app/theme';

import 'styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
