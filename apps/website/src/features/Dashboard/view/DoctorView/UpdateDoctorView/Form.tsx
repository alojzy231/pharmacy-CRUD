import { UpdateProductArgumentsDTO } from '@dto';
import { router } from 'next/client';

import { Route } from '@const/route';
import { useUpdateDoctor } from '@features/Dashboard/api/mutations/useUpdateDoctor';
import { useGetDoctor } from '@features/Dashboard/api/queries/useGetDoctor';
import { DoctorForm } from '@features/Dashboard/view/DoctorView/DoctorForm';

type FormProps = {
  id: string;
};
export function Form({ id }: FormProps): JSX.Element {
  const { isLoading, mutateAsync: updateProduct } = useUpdateDoctor();
  const { data } = useGetDoctor({ id });

  const onSubmit = async (data: Omit<UpdateProductArgumentsDTO, 'id'>) => {
    await updateProduct({ ...data, id });

    router.push(Route.Dashboard);
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
