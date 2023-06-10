import { AppShell as MantineAppShell, Container, createStyles } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Fragment, PropsWithChildren } from 'react';

import { FadeInItem } from '@layout/AppShell/FadeInItem';

import { Header } from './Header';

const useStyles = createStyles({
  fadeInContainer: {
    height: '100%',
  },
});

type AppShellProps = PropsWithChildren<{
  withHeader?: boolean;
}>;
export function AppShell({ children, withHeader = true }: AppShellProps): JSX.Element {
  const { pathname } = useRouter();
  const { classes } = useStyles();

  return (
    <MantineAppShell header={withHeader ? <Header /> : <Fragment />}>
      <AnimatePresence initial={false} mode="wait">
        <FadeInItem className={classes.fadeInContainer} key={pathname}>
          <Container p={24} sx={{ display: 'flex', flexDirection: 'column' }}>
            {children}
          </Container>
        </FadeInItem>
      </AnimatePresence>
    </MantineAppShell>
  );
}
