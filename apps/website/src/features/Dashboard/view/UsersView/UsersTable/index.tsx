import { GetUsersResultDTO } from '@dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Table, TableProps } from '@mantine/core';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAddUser } from '@features/Dashboard/api/mutations/useAddUser';

import { EditRow } from './EditRow';
import { defaultValues, FieldValues, schema } from './schema';

const FORM_NAMES = {
  email: 'email',
  name: 'name',
  password: 'password',
  role: 'role',
} as const;

type User = GetUsersResultDTO[number];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('email', {
    cell: (info) => info.getValue(),
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor('role', {
    cell: (info) => info.getValue(),
    header: () => <span>Role</span>,
  }),
];

type UserTableProps = TableProps & {
  data: GetUsersResultDTO;
};

export function UsersTable({ data, ...restProps }: UserTableProps): JSX.Element {
  const [isAddingUser, setIsAddingUser] = useState(false);

  const { isLoading, mutateAsync: addUser } = useAddUser();
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      await addUser(data);

      setIsAddingUser(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Table {...restProps}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
                <th>Password</th>
                <th />
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
                <td>********</td>
                <td />
              </tr>
            ))}
            {isAddingUser && <EditRow control={control} isLoading={isLoading} names={FORM_NAMES} />}
          </tbody>
        </Table>
      </form>
      {!isAddingUser && (
        <Button mt={24} onClick={() => setIsAddingUser(true)} variant="outline">
          Add User
        </Button>
      )}
    </>
  );
}
