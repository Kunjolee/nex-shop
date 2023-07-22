import '@/styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { lightTheme } from '../themes/';
import { CssBaseline } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
