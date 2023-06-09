import { Table, TableProps } from '@mantine/core';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { UseGetDoctorsResult } from '@features/Dashboard/api/queries/useGetDoctors';

import { RemoveCell } from './components/RemoveCell';

type Hospital = UseGetDoctorsResult[number];

const columnHelper = createColumnHelper<Hospital>();

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('lastName', {
    cell: (info) => info.getValue(),
    header: () => <span>Last name</span>,
  }),
  columnHelper.accessor('profession', {
    cell: (info) => info.getValue(),
    header: () => <span>Profession</span>,
  }),
  columnHelper.accessor('hospital.name', {
    cell: (info) => info.getValue(),
    header: () => <span>Hospital name</span>,
  }),
  columnHelper.accessor('id', {
    cell: (info) => <RemoveCell id={info.getValue()} />,
    header: () => <span />,
  }),
];

type DoctorsTableProps = TableProps & {
  data: UseGetDoctorsResult;
};

export function DoctorsTable({ data, ...restProps }: DoctorsTableProps): JSX.Element {
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
