import { GetDoctorResultDTO, UpdateDoctorArgumentsDTO } from '@dto';
import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { Route } from '@const/route';
import { useUpdateDoctor } from '@features/Dashboard/api/mutations/useUpdateDoctor';
import { DoctorForm } from '@features/Dashboard/view/DoctorView/DoctorForm';
import { WithGetUpdateDataResultData } from '@hocs/withGetUpdateData';

export function UpdateDoctorView({
  data,
  id,
}: WithGetUpdateDataResultData<GetDoctorResultDTO>): JSX.Element {
  const router = useRouter();
  const { isLoading, mutateAsync: updateDoctor } = useUpdateDoctor();

  const onSubmit = async (data: Omit<UpdateDoctorArgumentsDTO, 'id'>) => {
    await updateDoctor({ ...data, id });

    router.push(Route.Doctor);
  };

  return (
    <>
      <Title mx="auto">Update doctor</Title>
      {data ? (
        <DoctorForm defaultValues={data} isLoading={isLoading} onSubmitCallback={onSubmit} />
      ) : (
        'Loading...'
      )}
    </>
  );
}
