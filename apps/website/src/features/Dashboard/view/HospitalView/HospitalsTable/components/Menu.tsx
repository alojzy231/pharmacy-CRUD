import { Route } from '@const/route';
import { useDeleteHospital } from '@features/Dashboard/api/mutations/useDeleteHospital';
import { TableMenu } from '@features/Dashboard/components/TableMenu';

type MenuProps = {
  id: number;
};
export function Menu({ id }: MenuProps): JSX.Element {
  const { isLoading, mutate } = useDeleteHospital();

  return (
    <TableMenu
      href={`${Route.Hospital}/${id}`}
      isLoading={isLoading}
      onRemove={() => mutate({ id })}
    />
  );
}
