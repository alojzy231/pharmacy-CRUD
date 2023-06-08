import { useDeleteDoctor } from '@features/Dashboard/api/mutations/useDeleteDoctor';
import { RemoveButton } from '@features/Dashboard/components/RemoveButton';

type RemoveCellProps = {
  id: number;
};
export function RemoveCell({ id }: RemoveCellProps): JSX.Element {
  const { mutate } = useDeleteDoctor();

  return <RemoveButton onClick={() => mutate({ id })} />;
}
