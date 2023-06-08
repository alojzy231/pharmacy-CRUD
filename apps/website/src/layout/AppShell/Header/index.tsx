import {
  HeaderProps as MantineHeaderProps,
  Header as MantineHeader,
  Group,
  createStyles,
} from '@mantine/core';
import NextLink from 'next/link';
import { ReactElement } from 'react';

import { Route } from '@const/route';

const ROUTES = [
  { href: Route.Dashboard, label: 'Home' },
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
      <Group m="auto" spacing={32}>
        {ROUTES.map(({ href, label }) => (
          <NextLink className={classes.link} href={href} key={href}>
            {label}
          </NextLink>
        ))}
      </Group>
    </MantineHeader>
  );
}
