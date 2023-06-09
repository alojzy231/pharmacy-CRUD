import { AppShell as MantineAppShell, Container, createStyles } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { FadeInItem } from '@layout/AppShell/FadeInItem';

import { Header } from './Header';

const useStyles = createStyles({
  fadeInContainer: {
    height: '100%',
  },
});

export function AppShell({ children }: PropsWithChildren): JSX.Element {
  const { pathname } = useRouter();
  const { classes } = useStyles();

  return (
    <MantineAppShell header={<Header />}>
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
