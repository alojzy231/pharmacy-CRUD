import { AddProductArgumentsDTO } from '@dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mantine/core';
import { useForm } from 'react-hook-form';

import {
  ControlledCheckbox,
  ControlledNumberInput,
  ControlledSelect,
  ControlledTextInput,
} from '@components/ControlledInputs';

import { CATEGORIES, TYPES } from './const';
import { FieldValues, schema, defaultValues as emptyDefaultValues } from './schema';

type ProductFormProps = {
  onSubmitCallback: (data: AddProductArgumentsDTO) => Promise<unknown>;
  defaultValues?: FieldValues;
  isLoading: boolean;
};

export function ProductForm({
  defaultValues,
  isLoading,
  onSubmitCallback,
}: ProductFormProps): JSX.Element {
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: defaultValues || emptyDefaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: AddProductArgumentsDTO) => {
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
        />
        <ControlledSelect
          control={control}
          data={TYPES}
          label="Type"
          name="type"
          placeholder="Type of the drug"
        />
        <ControlledSelect
          control={control}
          data={CATEGORIES}
          label="Category"
          name="category"
          placeholder="Category of the type"
        />
        <ControlledNumberInput
          control={control}
          label="Quantity"
          min={1}
          name="quantity"
          placeholder="Quantity of the drug"
        />
        <ControlledNumberInput
          control={control}
          formatter={(value) =>
            Number.isNaN(Number.parseFloat(value))
              ? '$ '
              : `$ ${value}`.replaceAll(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          }
          label="Price"
          name="price"
          parser={(value) => value.replaceAll(/\$\s?|(,*)/g, '')}
          placeholder="Price of the drug"
          precision={2}
          step={0.01}
        />
        <ControlledCheckbox
          control={control}
          label="Prescription needed"
          name="isPrescriptionNeeded"
        />
        <Button fullWidth loading={isLoading} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
