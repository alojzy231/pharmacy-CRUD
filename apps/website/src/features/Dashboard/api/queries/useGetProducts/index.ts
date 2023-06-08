import { GetProductsResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { convertEnumToString } from '@utils/convertEnumToString';

import { productService } from '@api/services/ProductService';

export const productsKey = {
  all: ['products'] as const,
  details: () => [...productsKey.all, 'details'] as const,
};

export type UseGetProductsResult = (Omit<GetProductsResultDTO[0], 'category' | 'type' | 'price'> & {
  category: string;
  type: string;
  price: string;
})[];

const getProducts = async () => {
  const { data } = await productService.getProducts();

  return data;
};
const formatToDollars = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
}).format;

function select(data: GetProductsResultDTO): UseGetProductsResult {
  if (data === undefined) return data;

  return data.map((product) => ({
    ...product,
    category: convertEnumToString(product.category),
    price: formatToDollars(product.price),
    type: convertEnumToString(product.type),
  }));
}

export const useGetProducts = (): UseQueryResult<UseGetProductsResult> =>
  useQuery(productsKey.details(), getProducts, {
    select,
  });
