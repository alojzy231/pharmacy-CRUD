import { MantineProvider } from '@mantine/core';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode, useState } from 'react';

import { AppShell } from '@layout/AppShell';

function App({ Component, pageProps }: AppProps): ReactNode {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Pharmacy - CRUD</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
            <AppShell>
              <Component {...pageProps} />
            </AppShell>
          </MantineProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
