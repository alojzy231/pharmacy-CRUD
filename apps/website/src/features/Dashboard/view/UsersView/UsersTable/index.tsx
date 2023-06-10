import { GetUsersResultDTO } from '@dto';
import { Table, TableProps } from '@mantine/core';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type User = GetUsersResultDTO[number];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('email', {
    cell: (info) => info.getValue(),
    header: () => <span>City</span>,
  }),
  columnHelper.accessor('role', {
    cell: (info) => info.getValue(),
    header: () => <span>Street name</span>,
  }),
];

type UserTableProps = TableProps & {
  data: GetUsersResultDTO;
};

export function UsersTable({ data, ...restProps }: UserTableProps): JSX.Element {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table {...restProps}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
