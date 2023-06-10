import {
  HeaderProps as MantineHeaderProps,
  Header as MantineHeader,
  Group,
  createStyles,
  Box,
  Button,
} from '@mantine/core';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { ReactElement, Suspense } from 'react';

import { ACCESS_TOKEN } from '@const/cookies';
import { Route } from '@const/route';

const SearchBar = dynamic(() => import('./SearchBar'), {
  loading: () => <Box w={212} />,
  ssr: false,
});

const ROUTES = [
  { href: Route.Product, label: 'Product' },
  { href: Route.Hospital, label: 'Hospital' },
  { href: Route.Doctor, label: 'Doctor' },
  { href: Route.Users, label: 'Users' },
];

const useStyles = createStyles({
  link: {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: 'white',
    fontSize: '1.5rem',
    textDecoration: 'none',
  },
});

type HeaderProps = Omit<MantineHeaderProps, 'height' | 'children' | 'display'>;
export function Header(props: HeaderProps): ReactElement {
  const { classes } = useStyles();
  const router = useRouter();

  const onLogout = () => {
    destroyCookie(null, ACCESS_TOKEN);

    router.push(Route.Login);
  };

  return (
    <MantineHeader display="flex" height={60} {...props}>
      <Group position="center" w={212}>
        <Button
          gradient={{ deg: 35, from: '#ed6ea0', to: '#ec8c69' }}
          my="auto"
          onClick={onLogout}
          variant="gradient"
        >
          Logout
        </Button>
      </Group>
      <Group m="auto" spacing={32}>
        {ROUTES.map(({ href, label }) => (
          <NextLink className={classes.link} href={href} key={href}>
            {label}
          </NextLink>
        ))}
      </Group>
      <Suspense>
        <SearchBar />
      </Suspense>
    </MantineHeader>
  );
}
