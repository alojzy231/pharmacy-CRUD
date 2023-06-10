import { GetUsersResultDTO } from '@dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Table, TableProps } from '@mantine/core';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAddUser } from '@features/Dashboard/api/mutations/useAddUser';
import { useUpdateUser } from '@features/Dashboard/api/mutations/useUpdateUser';

import { Menu } from './components/Menu';
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
  const [updatingUserId, setUpdatingUserId] = useState<null | string>(null);

  const shouldShowAddButton = !isAddingUser && updatingUserId === null;

  const { isLoading: isLoadingAddUser, mutateAsync: addUser } = useAddUser();
  const { isLoading: isLoadingUpdateUser, mutateAsync: updateUser } = useUpdateUser();
  const isLoading = isLoadingAddUser || isLoadingUpdateUser;

  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (!!updatingUserId) {
      reset(data[Number(updatingUserId)]);
    }
  }, [updatingUserId]);

  const onSubmit = async (formData: FieldValues) => {
    try {
      if (isAddingUser) {
        await addUser(formData);
        setIsAddingUser(false);
      }
      if (!!updatingUserId && typeof data[Number(updatingUserId)].id === 'number') {
        await updateUser({ ...formData, id: data[Number(updatingUserId)].id });

        setUpdatingUserId(null);
        reset();
      }
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
              <Fragment key={row.id}>
                {updatingUserId === row.id ? (
                  <EditRow control={control} isLoading={isLoading} names={FORM_NAMES} />
                ) : (
                  <tr>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                    <td>********</td>
                    <td>
                      <Menu onEdit={() => setUpdatingUserId(row.id)} onRemove={() => null} />
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
            {isAddingUser && <EditRow control={control} isLoading={isLoading} names={FORM_NAMES} />}
          </tbody>
        </Table>
      </form>
      {shouldShowAddButton && (
        <Button mt={24} onClick={() => setIsAddingUser(true)} variant="outline">
          Add User
        </Button>
      )}
    </>
  );
}
