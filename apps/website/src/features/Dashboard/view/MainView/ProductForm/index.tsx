import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mantine/core';
import { useForm } from 'react-hook-form';

import {
  ControlledCheckbox,
  ControlledNumberInput,
  ControlledSelect,
  ControlledTextInput,
  ControlledCostInput,
} from '@components/ControlledInputs';
import { ControlledDoctorSelectInput } from '@features/Dashboard/view/MainView/ProductForm/components/ControlledDoctorSelectInput';

import { CATEGORIES, TYPES } from './const';
import { FieldValues, schema, defaultValues as emptyDefaultValues } from './schema';

type ProductFormProps = {
  onSubmitCallback: (data: FieldValues) => Promise<unknown>;
  defaultValues?: FieldValues;
  isLoading: boolean;
};

export function ProductForm({
  defaultValues,
  isLoading,
  onSubmitCallback,
}: ProductFormProps): JSX.Element {
  const { control, handleSubmit, reset, watch } = useForm<FieldValues>({
    defaultValues: defaultValues || emptyDefaultValues,
    resolver: zodResolver(schema),
  });

  const watchIsPrescriptionRequired = watch('isPrescriptionNeeded');

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
          placeholder="Name of the drug"
          withAsterisk
        />
        <ControlledSelect
          control={control}
          data={TYPES}
          label="Type"
          name="type"
          placeholder="Type of the drug"
          withAsterisk
        />
        <ControlledSelect
          control={control}
          data={CATEGORIES}
          label="Category"
          name="category"
          placeholder="Category of the type"
          withAsterisk
        />
        <ControlledNumberInput
          control={control}
          label="Quantity"
          min={1}
          name="quantity"
          placeholder="Quantity of the drug"
          withAsterisk
        />
        <ControlledCostInput
          control={control}
          label="Price"
          name="price"
          placeholder="Price of the drug"
          withAsterisk
        />
        <ControlledCheckbox
          control={control}
          label="Prescription needed"
          name="isPrescriptionNeeded"
        />
        <ControlledDoctorSelectInput
          control={control}
          disabled={!watchIsPrescriptionRequired}
          label="Doctor"
          name="doctorId"
          placeholder="Doctor who prescribed the drug"
        />
        <Button fullWidth loading={isLoading} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
