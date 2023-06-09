import { UpdateDoctorArgumentsDTO } from '@dto';
import { router } from 'next/client';

import { Route } from '@const/route';
import { useUpdateDoctor } from '@features/Dashboard/api/mutations/useUpdateDoctor';
import { useGetDoctor } from '@features/Dashboard/api/queries/useGetDoctor';
import { DoctorForm } from '@features/Dashboard/view/DoctorView/DoctorForm';

type FormProps = {
  id: string;
};
export function Form({ id }: FormProps): JSX.Element {
  const { isLoading, mutateAsync: updateDoctor } = useUpdateDoctor();
  const { data } = useGetDoctor({ id });

  const onSubmit = async (data: Omit<UpdateDoctorArgumentsDTO, 'id'>) => {
    await updateDoctor({ ...data, id });

    router.push(Route.Doctor);
  };

  return (
    <>
      {data ? (
        <DoctorForm defaultValues={data} isLoading={isLoading} onSubmitCallback={onSubmit} />
      ) : (
        'Loading...'
      )}
    </>
  );
}
