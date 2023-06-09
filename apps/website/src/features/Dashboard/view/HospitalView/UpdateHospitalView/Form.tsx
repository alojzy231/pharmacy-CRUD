import { UpdateHospitalArgumentsDTO } from '@dto';
import { router } from 'next/client';

import { Route } from '@const/route';
import { useUpdateHospital } from '@features/Dashboard/api/mutations/useUpdateHospital';
import { useGetHospital } from '@features/Dashboard/api/queries/useGetHospital';
import { HospitalForm } from '@features/Dashboard/view/HospitalView/HospitalForm';

type FormProps = {
  id: string;
};
export function Form({ id }: FormProps): JSX.Element {
  const { isLoading, mutateAsync: updateHospital } = useUpdateHospital();
  const { data } = useGetHospital({ id });

  const onSubmit = async (data: Omit<UpdateHospitalArgumentsDTO, 'id'>) => {
    await updateHospital({ ...data, id });

    router.push(Route.Hospital);
  };

  return (
    <>
      {data ? (
        <HospitalForm defaultValues={data} isLoading={isLoading} onSubmitCallback={onSubmit} />
      ) : (
        'Loading...'
      )}
    </>
  );
}
