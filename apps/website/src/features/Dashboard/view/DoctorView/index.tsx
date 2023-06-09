import { Box, Title } from '@mantine/core';

import { useAddDoctor } from '@features/Dashboard/api/mutations/useAddDoctor';
import { useGetDoctors } from '@features/Dashboard/api/queries/useGetDoctors';
import { DoctorForm } from '@features/Dashboard/view/DoctorView/DoctorForm';

import { DoctorsTable } from './DoctorsTable';

export function DoctorView(): JSX.Element {
  const { isLoading, mutateAsync: addDoctor } = useAddDoctor();
  const { data } = useGetDoctors();

  return (
    <>
      <Title mx="auto">Doctor</Title>
      <DoctorForm isLoading={isLoading} onSubmitCallback={addDoctor} />
      <Box mt={32}>{data ? <DoctorsTable data={data} /> : 'Loading...'}</Box>
    </>
  );
}
