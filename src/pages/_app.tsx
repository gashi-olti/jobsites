import type { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import StylesGlobal from '@/components/GlobalStyles';
import theme from '@/config/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <StylesGlobal />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}
