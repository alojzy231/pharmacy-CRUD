import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Title } from '@mantine/core';
import { AddHospitalArgumentsDTO } from '@pharmacy-crud/dto';
import { useForm } from 'react-hook-form';

import { ControlledTextInput } from '@components/ControlledInputs';
import { useAddProduct } from '@features/Dashboard/api/mutations/useAddProduct';
import { useGetProducts } from '@features/Dashboard/api/queries/useGetProducts';

import { ProductsTable } from './ProductsTable';
import { defaultValues, FieldValues, schema } from './schema';

export function HospitalView(): JSX.Element {
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { mutateAsync: addProduct } = useAddProduct();
  const { data } = useGetProducts();

  const onSubmit = async (data: AddHospitalArgumentsDTO) => {
    try {
      await addProduct(data);

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
          <Button fullWidth type="submit">
            Submit
          </Button>
        </Stack>
      </form>
      <Box mt={32}>{data ? <ProductsTable data={data} /> : 'Loading...'}</Box>
    </>
  );
}
