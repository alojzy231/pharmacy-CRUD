import { GetProductsResultDTO } from '@pharmacy-crud/dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { productService } from '@api/services/ProductService';

export const productsKey = {
  all: ['products'] as const,
  details: () => [...productsKey.all, 'details'] as const,
};

const getProducts = async () => {
  const { data } = await productService.getProducts();

  return data;
};

export const useGetProducts = (): UseQueryResult<GetProductsResultDTO> =>
  useQuery(productsKey.details(), getProducts);
