import { GetProductArgumentsDTO, GetProductResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { productService } from '@api/services/ProductService';

export const productKey = {
  all: ['products'] as const,
  details: () => [...productKey.all, 'details'] as const,
};

export type UseGetProductResult = GetProductResultDTO;

export const getProduct = async (
  queryData: GetProductArgumentsDTO
): Promise<GetProductResultDTO> => {
  const { data } = await productService.getProduct(queryData);

  return data;
};

export const useGetProduct = (data: GetProductArgumentsDTO): UseQueryResult<UseGetProductResult> =>
  useQuery(productKey.details(), () => getProduct(data));
