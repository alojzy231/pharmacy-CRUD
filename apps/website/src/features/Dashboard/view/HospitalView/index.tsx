import { Box, Title } from '@mantine/core';

import { useAddHospital } from '@features/Dashboard/api/mutations/useAddHospital';
import { useGetHospitals } from '@features/Dashboard/api/queries/useGetHospitals';
import { HospitalForm } from '@features/Dashboard/view/HospitalView/HospitalForm';

import { HospitalsTable } from './HospitalsTable';

export function HospitalView(): JSX.Element {
  const { isLoading, mutateAsync: addHospital } = useAddHospital();
  const { data } = useGetHospitals();

  return (
    <>
      <Title mx="auto">Hospital</Title>
      <HospitalForm isLoading={isLoading} onSubmitCallback={addHospital} />
      <Box mt={32}>{data ? <HospitalsTable data={data} /> : 'Loading...'}</Box>
    </>
  );
}
