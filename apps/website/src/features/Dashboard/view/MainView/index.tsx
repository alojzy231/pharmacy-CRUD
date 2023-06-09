import { Box, Title } from '@mantine/core';

import { useAddProduct } from '@features/Dashboard/api/mutations/useAddProduct';
import { useGetProducts } from '@features/Dashboard/api/queries/useGetProducts';
import { ProductForm } from '@features/Dashboard/view/MainView/ProductForm';

import { ProductsTable } from './ProductsTable';

export function MainView(): JSX.Element {
  const { isLoading, mutateAsync: addProduct } = useAddProduct();
  const { data } = useGetProducts();

  return (
    <>
      <Title mx="auto">Product</Title>
      <ProductForm isLoading={isLoading} onSubmitCallback={addProduct} />
      <Box mt={32}>{data ? <ProductsTable data={data} /> : 'Loading...'}</Box>
    </>
  );
}
