import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { productService } from '@api/services/ProductService';
import { AddProductArgumentsDTO } from '@dto';

import { productsKey } from '../../queries/useGetProducts';

const addProduct = async (addProduct: AddProductArgumentsDTO) => {
  await productService.addProduct(addProduct);
};

export const useAddProduct = (): UseMutationResult<unknown, unknown, AddProductArgumentsDTO> => {
  const queryClient = useQueryClient();

  return useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(productsKey.details());
    },
  });
};
