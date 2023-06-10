import { Role } from '@dto';
import { Avatar, Group, Loader, Menu, Stack, Text, UnstyledButton } from '@mantine/core';
import { IconLogout, IconUsers } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';

import { ACCESS_TOKEN } from '@const/cookies';
import { Route } from '@const/route';

import { useGetMe } from './api/useGetMe';

export function ProfileInfo(): JSX.Element {
  const { data, isLoading } = useGetMe();
  const router = useRouter();

  const onLogout = () => {
    destroyCookie(null, ACCESS_TOKEN);

    router.push(Route.Login);
  };

  const onUserRedirect = () => {
    router.push(Route.Users);
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
            {data.role === Role.ADMIN && (
              <Menu.Item icon={<IconUsers size={14} />} onClick={onUserRedirect}>
                Users
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
