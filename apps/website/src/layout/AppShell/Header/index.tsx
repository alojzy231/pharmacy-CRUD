import {
  HeaderProps as MantineHeaderProps,
  Header as MantineHeader,
  Group,
  createStyles,
  Box,
} from '@mantine/core';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { ReactElement, Suspense } from 'react';

import { Route } from '@const/route';

import { ProfileInfo } from './ProfileInfo';

const SearchBar = dynamic(() => import('./SearchBar'), {
  loading: () => <Box w={212} />,
  ssr: false,
});

const ROUTES = [
  { href: Route.Product, label: 'Product' },
  { href: Route.Hospital, label: 'Hospital' },
  { href: Route.Doctor, label: 'Doctor' },
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

  return (
    <MantineHeader display="flex" height={60} {...props}>
      <ProfileInfo />
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
