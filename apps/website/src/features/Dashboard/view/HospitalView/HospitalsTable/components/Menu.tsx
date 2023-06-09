import { Route } from '@const/route';
import { useDeleteHospital } from '@features/Dashboard/api/mutations/useDeleteHospital';
import { TableMenu } from '@features/Dashboard/components/TableMenu';

type MenuProps = {
  id: number;
};
export function Menu({ id }: MenuProps): JSX.Element {
  const { mutate } = useDeleteHospital();

  return <TableMenu href={`${Route.Hospital}/${id}`} onRemove={() => mutate({ id })} />;
}
