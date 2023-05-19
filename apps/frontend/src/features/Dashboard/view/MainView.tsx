import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button } from '@mantine/core';
import { AddProductDTO } from '@pharmacy-crud/dto';
import { useForm } from 'react-hook-form';

import { ControlledNumberInput, ControlledTextInput } from '@components/ControlledInputs';
import { useAddProduct } from '@features/Dashboard/api/mutations/useAddProduct';

import { defaultValues, FieldValues, schema } from './schema';

export function MainView(): JSX.Element {
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { mutateAsync: addProduct } = useAddProduct();

  const onSubmit = async (data: AddProductDTO) => {
    try {
      await addProduct(data);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box maw={320} mt={64} mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextInput control={control} label="Name" name="name" />
        <ControlledTextInput control={control} label="Type" name="type" />
        <ControlledTextInput control={control} label="Category" name="category" />
        <ControlledNumberInput control={control} label="Quantity" name="quantity" />
        <ControlledNumberInput control={control} label="Price" name="price" />

        <Button fullWidth mt={12} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
