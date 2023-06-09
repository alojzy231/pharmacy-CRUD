import { Route } from '@const/route';
import { useDeleteProduct } from '@features/Dashboard/api/mutations/useDeleteProduct';
import { TableMenu } from '@features/Dashboard/components/TableMenu';

type MenuProps = {
  id: number;
};
export function Menu({ id }: MenuProps): JSX.Element {
  const { mutate } = useDeleteProduct();

  return <TableMenu href={`${Route.Product}/${id}`} onRemove={() => mutate({ id })} />;
}
