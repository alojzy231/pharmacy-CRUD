import { GetProductsResultDTO } from '@pharmacy-crud/dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { productService } from '@api/services/ProductService';
import { convertEnumToString } from '@utils/convertEnumToString';

export const productsKey = {
  all: ['products'] as const,
  details: () => [...productsKey.all, 'details'] as const,
};

const getProducts = async () => {
  const { data } = await productService.getProducts();

  return data?.data;
};

export type UseGetProductsResult = Omit<GetProductsResultDTO[0], 'category' | 'type'> &
  {
    category: string;
    type: string;
  }[];

function select(data: GetProductsResultDTO): UseGetProductsResult {
  if (data === undefined) return data;

  return data.map((product: GetProductsResultDTO[0]): UseGetProductsResult[0] => ({
    ...product,
    category: convertEnumToString(product.category),
    type: convertEnumToString(product.type),
  }));
}

export const useGetProducts = (): UseQueryResult<UseGetProductsResult> =>
  useQuery(productsKey.details(), getProducts, {
    select,
  });
