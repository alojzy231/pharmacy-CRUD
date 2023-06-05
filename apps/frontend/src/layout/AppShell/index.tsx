import { AppShell as MantineAppShell, Container } from '@mantine/core';
import { PropsWithChildren } from 'react';

import { Header } from './Header';

export function AppShell({ children }: PropsWithChildren): JSX.Element {
  return (
    <MantineAppShell header={<Header />}>
      <Container p={24} sx={{ display: 'flex', flexDirection: 'column' }}>
        {children}
      </Container>
    </MantineAppShell>
  );
}
