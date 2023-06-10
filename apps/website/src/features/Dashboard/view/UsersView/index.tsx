import { Title } from '@mantine/core';

import { useGetUsers } from '@features/Dashboard/api/queries/useGetUsers';

import { UsersTable } from './UsersTable';

export function UsersView(): JSX.Element {
  const { data, isLoading } = useGetUsers();

  return (
    <>
      <Title mx="auto">Users</Title>
      {isLoading || !data ? 'Loading...' : <UsersTable data={data} />}
    </>
  );
}
