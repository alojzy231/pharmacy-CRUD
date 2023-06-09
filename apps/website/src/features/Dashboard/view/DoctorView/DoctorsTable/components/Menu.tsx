import { Route } from '@const/route';
import { useDeleteDoctor } from '@features/Dashboard/api/mutations/useDeleteDoctor';
import { TableMenu } from '@features/Dashboard/components/TableMenu';

type MenuProps = {
  id: number;
};
export function Menu({ id }: MenuProps): JSX.Element {
  const { mutate } = useDeleteDoctor();

  return <TableMenu href={`${Route.Doctor}/${id}`} onRemove={() => mutate({ id })} />;
}
