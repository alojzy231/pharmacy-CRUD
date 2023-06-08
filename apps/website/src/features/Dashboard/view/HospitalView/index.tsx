import { AddHospitalArgumentsDTO } from '@dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Title } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { ControlledTextInput } from '@components/ControlledInputs';
import { useAddHospital } from '@features/Dashboard/api/mutations/useAddHospital';
import { useGetHospitals } from '@features/Dashboard/api/queries/useGetHospitals';

import { HospitalsTable } from './HospitalsTable';
import { defaultValues, FieldValues, schema } from './schema';

export function HospitalView(): JSX.Element {
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { mutateAsync: addHospital } = useAddHospital();
  const { data } = useGetHospitals();

  const onSubmit = async (data: AddHospitalArgumentsDTO) => {
    try {
      await addHospital(data);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title mx="auto">Hospital</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack maw={320} mt={64} mx="auto" spacing={24}>
          <ControlledTextInput
            control={control}
            label="Name"
            name="name"
            placeholder="Name of the drug"
          />
          <ControlledTextInput
            control={control}
            label="City"
            name="city"
            placeholder="Name of the city"
          />
          <ControlledTextInput
            control={control}
            label="Street name"
            name="streetName"
            placeholder="Name of the street"
          />
          <ControlledTextInput
            control={control}
            label="Address"
            name="address"
            placeholder="Address of the hospital"
          />
          <Button fullWidth type="submit">
            Submit
          </Button>
        </Stack>
      </form>
      <Box mt={32}>{data ? <HospitalsTable data={data} /> : 'Loading...'}</Box>
    </>
  );
}
