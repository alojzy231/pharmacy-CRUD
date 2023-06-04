import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, Stack } from '@mantine/core';
import { AddProductArgumentsDTO } from '@pharmacy-crud/dto';
import { useForm } from 'react-hook-form';

import {
  ControlledCheckbox,
  ControlledNumberInput,
  ControlledSelect,
  ControlledTextInput,
} from '@components/ControlledInputs';
import { useAddProduct } from '@features/Dashboard/api/mutations/useAddProduct';
import { useGetProducts } from '@features/Dashboard/api/queries/useGetProducts';
import { CATEGORIES, TYPES } from '@features/Dashboard/view/const';
import { ProductsTable } from '@features/Dashboard/view/ProductsTable';

import { defaultValues, FieldValues, schema } from './schema';

export function MainView(): JSX.Element {
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { mutateAsync: addProduct } = useAddProduct();
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
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack maw={320} mt={64} mx="auto" spacing={24}>
          <ControlledTextInput control={control} label="Name" name="name" />
          <ControlledSelect control={control} data={TYPES} label="Type" name="type" />
          <ControlledSelect control={control} data={CATEGORIES} label="Category" name="category" />
          <ControlledNumberInput control={control} label="Quantity" name="quantity" />
          <ControlledNumberInput control={control} label="Price" name="price" />
          <ControlledCheckbox
            control={control}
            label="Prescription needed"
            name="isPrescriptionNeeded"
          />
          <Button fullWidth type="submit">
            Submit
          </Button>
        </Stack>
      </form>
      <Box mt={32}>{data ? <ProductsTable data={data} /> : 'Loading...'}</Box>
    </Container>
  );
}
