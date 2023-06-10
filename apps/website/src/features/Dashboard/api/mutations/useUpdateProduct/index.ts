import { UpdateProductArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { productService } from '@api/services/ProductService';

import { productsKey } from '../../queries/useGetProducts';

const updateProduct = async (updateProduct: UpdateProductArgumentsDTO) => {
  await productService.updateProduct(updateProduct);
};

export const useUpdateProduct = (): UseMutationResult<
  unknown,
  unknown,
  UpdateProductArgumentsDTO
> => {
  const queryClient = useQueryClient();

  return useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(productsKey.details());
    },
  });
};
