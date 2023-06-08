import { Table, TableProps } from '@mantine/core';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { GetHospitalsResultDTO } from '@dto';

type Hospital = GetHospitalsResultDTO[0];

const columnHelper = createColumnHelper<Hospital>();

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: () => <span>Id</span>,
  }),
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('city', {
    cell: (info) => info.getValue(),
    header: () => <span>City</span>,
  }),
  columnHelper.accessor('streetName', {
    cell: (info) => info.getValue(),
    header: () => <span>Street name</span>,
  }),
];

type HospitalTableProps = TableProps & {
  data: GetHospitalsResultDTO;
};

export function HospitalsTable({ data, ...restProps }: HospitalTableProps): JSX.Element {
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
