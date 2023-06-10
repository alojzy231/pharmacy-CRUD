import { MantineProvider } from '@mantine/core';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextPage } from 'next';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode, useState } from 'react';

import { AppShell } from '@layout/AppShell';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppProps = NextAppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppProps): ReactNode {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout ?? ((page): JSX.Element => <AppShell>{page}</AppShell>);

  return (
    <>
      <Head>
        <title>Pharmacy - CRUD</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
            {getLayout(<Component {...pageProps} />)}
          </MantineProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
