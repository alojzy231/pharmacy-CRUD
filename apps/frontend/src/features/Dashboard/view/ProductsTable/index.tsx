import { Table, TableProps } from '@mantine/core';
import { GetProductsResultDTO } from '@pharmacy-crud/dto';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Product = GetProductsResultDTO[0];

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: () => <span>Id</span>,
  }),
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('price', {
    cell: (info) => info.getValue(),
    header: () => <span>Price</span>,
  }),
  columnHelper.accessor('quantity', {
    cell: (info) => info.getValue(),
    header: () => <span>Quantity</span>,
  }),
  columnHelper.accessor('isPrescriptionNeeded', {
    cell: (info) => (info.getValue() ? 'yes' : 'no'),
    header: () => <span>On prescription</span>,
  }),
  columnHelper.accessor('type', {
    cell: (info) => info.getValue(),
    header: () => <span>Type</span>,
  }),
  columnHelper.accessor('category', {
    cell: (info) => info.getValue(),
    header: () => <span>Category</span>,
  }),
];

type ProductsTableProps = TableProps & {
  data: GetProductsResultDTO;
};

export function ProductsTable({ data, ...restProps }: ProductsTableProps): JSX.Element {
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
