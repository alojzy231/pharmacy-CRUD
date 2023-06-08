import { AddDoctorArgumentsDTO } from '@dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Title } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { ControlledSelect, ControlledTextInput } from '@components/ControlledInputs';
import { useAddDoctor } from '@features/Dashboard/api/mutations/useAddDoctor';
import { useGetDoctors } from '@features/Dashboard/api/queries/useGetDoctors';
import { ControlledHospitalSelectInput } from '@features/Dashboard/view/DoctorView/components/ControlledHospitalSelectInput';
import { PROFESSIONS } from '@features/Dashboard/view/DoctorView/const';

import { DoctorsTable } from './DoctorsTable';
import { defaultValues, FieldValues, schema } from './schema';

export function DoctorView(): JSX.Element {
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { mutateAsync: addDoctor } = useAddDoctor();
  const { data } = useGetDoctors();

  const onSubmit = async (data: AddDoctorArgumentsDTO) => {
    try {
      await addDoctor(data);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title mx="auto">Doctor</Title>
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
            label="Last name"
            name="lastName"
            placeholder="Last name of the doctor"
          />
          <ControlledSelect
            control={control}
            data={PROFESSIONS}
            label="Profession"
            name="profession"
            placeholder="Profession of the doctor"
          />
          <ControlledHospitalSelectInput
            control={control}
            label="Hospital"
            name="hospitalId"
            placeholder="Hospital of the doctor"
          />
          <Button fullWidth type="submit">
            Submit
          </Button>
        </Stack>
      </form>
      <Box mt={32}>{data ? <DoctorsTable data={data} /> : 'Loading...'}</Box>
    </>
  );
}
