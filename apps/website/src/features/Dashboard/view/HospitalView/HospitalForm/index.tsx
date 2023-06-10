import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { ControlledTextInput } from '@components/ControlledInputs';

import { FieldValues, schema, defaultValues as emptyDefaultValues } from './schema';

type HospitalFormProps = {
  onSubmitCallback: (data: FieldValues) => Promise<unknown>;
  defaultValues?: FieldValues;
  isLoading: boolean;
};

export function HospitalForm({
  defaultValues,
  isLoading,
  onSubmitCallback,
}: HospitalFormProps): JSX.Element {
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
          placeholder="Name of the hospital"
          withAsterisk
        />
        <ControlledTextInput
          control={control}
          label="City"
          name="city"
          placeholder="Name of the city"
          withAsterisk
        />
        <ControlledTextInput
          control={control}
          label="Street name"
          name="streetName"
          placeholder="Name of the street"
          withAsterisk
        />
        <ControlledTextInput
          control={control}
          label="Address"
          name="address"
          placeholder="Address of the hospital"
          withAsterisk
        />
        <Button fullWidth loading={isLoading} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
