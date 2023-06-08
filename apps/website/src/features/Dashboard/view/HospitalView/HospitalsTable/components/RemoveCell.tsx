import { useDeleteHospital } from '@features/Dashboard/api/mutations/useDeleteHospital';
import { RemoveButton } from '@features/Dashboard/components/RemoveButton';

type RemoveCellProps = {
  id: number;
};
export function RemoveCell({ id }: RemoveCellProps): JSX.Element {
  const { mutate } = useDeleteHospital();

  return <RemoveButton onClick={() => mutate({ id })} />;
}
