import {
  Avatar,
  createStyles,
  Group,
  Loader,
  Menu,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconLogout, IconUsers } from '@tabler/icons-react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';

import { isRoleValidWithAdminPermissions } from '@api/utils/hasAdminPermissions';
import { ACCESS_TOKEN } from '@const/cookies';
import { Route } from '@const/route';

import { useGetMe } from './api/useGetMe';

const useStyles = createStyles({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

export function ProfileInfo(): JSX.Element {
  const { classes } = useStyles();
  const { data, isLoading } = useGetMe();
  const router = useRouter();

  const onLogout = () => {
    destroyCookie(null, ACCESS_TOKEN);

    router.push(Route.Login);
  };

  return (
    <Group position="center" w={212}>
      {isLoading || !data ? (
        <Loader size={16} />
      ) : (
        <Menu shadow="md">
          <Menu.Target>
            <UnstyledButton>
              <Group>
                <Avatar>{data.name[0]}</Avatar>
                <Stack spacing={2}>
                  <Text size="sm">{data.name}</Text>
                  <Text size="sm">{data.email}</Text>
                </Stack>
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {isRoleValidWithAdminPermissions(data.role) && (
              <Menu.Item icon={<IconUsers size={14} />}>
                <NextLink className={classes.link} href={Route.Users}>
                  Users
                </NextLink>
              </Menu.Item>
            )}
            <Menu.Item color="red" icon={<IconLogout size={14} />} onClick={onLogout}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      )}
    </Group>
  );
}
