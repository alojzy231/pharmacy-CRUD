import { AddProductArgumentsDTO } from '@dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Title } from '@mantine/core';
import { useForm } from 'react-hook-form';

import {
  ControlledCheckbox,
  ControlledNumberInput,
  ControlledSelect,
  ControlledTextInput,
} from '@components/ControlledInputs';
import { useAddProduct } from '@features/Dashboard/api/mutations/useAddProduct';
import { useGetProducts } from '@features/Dashboard/api/queries/useGetProducts';

import { CATEGORIES, TYPES } from './const';
import { ProductsTable } from './ProductsTable';
import { defaultValues, FieldValues, schema } from './schema';

export function MainView(): JSX.Element {
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { isLoading, mutateAsync: addProduct } = useAddProduct();
  const { data } = useGetProducts();

  const onSubmit = async (data: AddProductArgumentsDTO) => {
    try {
      await addProduct(data);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title mx="auto">Home</Title>
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
      <Box mt={32}>{data ? <ProductsTable data={data} /> : 'Loading...'}</Box>
    </>
  );
}
