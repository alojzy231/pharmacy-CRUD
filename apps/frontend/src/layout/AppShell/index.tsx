import { AppShell as MantineAppShell } from '@mantine/core';
import { PropsWithChildren } from 'react';

import { Header } from './Header';

export function AppShell({ children }: PropsWithChildren): JSX.Element {
  return <MantineAppShell header={<Header />}>{children}</MantineAppShell>;
}
