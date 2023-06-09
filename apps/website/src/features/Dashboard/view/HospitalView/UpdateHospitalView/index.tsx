import { GetHospitalResultDTO, UpdateHospitalArgumentsDTO } from '@dto';
import { Title } from '@mantine/core';
import { useRouter } from 'next/router';

import { Route } from '@const/route';
import { useUpdateHospital } from '@features/Dashboard/api/mutations/useUpdateHospital';
import { HospitalForm } from '@features/Dashboard/view/HospitalView/HospitalForm';
import { WithGetUpdateDataResultData } from '@hocs/withGetUpdateData';

export function UpdateHospitalView({
  data,
  id,
}: WithGetUpdateDataResultData<GetHospitalResultDTO>): JSX.Element {
  const router = useRouter();
  const { isLoading, mutateAsync: updateHospital } = useUpdateHospital();

  const onSubmit = async (data: Omit<UpdateHospitalArgumentsDTO, 'id'>) => {
    await updateHospital({ ...data, id });

    router.push(Route.Hospital);
  };

  return (
    <>
      <Title mx="auto">Update hospital</Title>
      {data ? (
        <HospitalForm defaultValues={data} isLoading={isLoading} onSubmitCallback={onSubmit} />
      ) : (
        'Loading...'
      )}
    </>
  );
}
