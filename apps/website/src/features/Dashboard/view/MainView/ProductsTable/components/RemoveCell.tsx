import { useDeleteProduct } from '@features/Dashboard/api/mutations/useDeleteProduct';
import { RemoveButton } from '@features/Dashboard/components/RemoveButton';

type RemoveCellProps = {
  id: number;
};
export function RemoveCell({ id }: RemoveCellProps): JSX.Element {
  const { mutate } = useDeleteProduct();

  return <RemoveButton onClick={() => mutate({ id })} />;
}
