import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import Router from 'next/router';
import * as gtag from '../lib/gtag';
import '../styles/global.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
