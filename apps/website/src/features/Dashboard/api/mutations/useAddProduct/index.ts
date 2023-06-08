import { AddProductDTO } from '@pharmacy-crud/dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { productService } from '@api/services/ProductService';

import { productsKey } from '../../queries/useGetProducts';

const addProduct = async (addProduct: AddProductDTO) => {
  await productService.addProduct(addProduct);
};

export const useAddProduct = (): UseMutationResult<unknown, unknown, AddProductDTO> => {
  const queryClient = useQueryClient();

  return useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(productsKey.details());
    },
  });
};
