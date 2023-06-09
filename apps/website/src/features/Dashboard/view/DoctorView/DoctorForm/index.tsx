import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { ControlledSelect, ControlledTextInput } from '@components/ControlledInputs';

import { ControlledHospitalSelectInput } from './components/ControlledHospitalSelectInput';
import { PROFESSIONS } from './const';
import { FieldValues, schema, defaultValues as emptyDefaultValues } from './schema';

type DoctorFormProps = {
  onSubmitCallback: (data: FieldValues) => Promise<unknown>;
  defaultValues?: FieldValues;
  isLoading: boolean;
};

export function DoctorForm({
  defaultValues,
  isLoading,
  onSubmitCallback,
}: DoctorFormProps): JSX.Element {
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: defaultValues || emptyDefaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      await onSubmitCallback(data);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack maw={320} mt={64} mx="auto" spacing={24}>
        <ControlledTextInput
          control={control}
          label="Name"
          name="name"
          placeholder="Name of the doctor"
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
        <Button fullWidth loading={isLoading} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
