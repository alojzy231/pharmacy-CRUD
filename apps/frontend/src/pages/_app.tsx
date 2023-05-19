import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';

function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Head>
        <title>Pharmacy - CRUD</title>
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default App;
