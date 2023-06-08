import { DeleteProductArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { productService } from '@api/services/ProductService';
import { productsKey } from '@features/Dashboard/api/queries/useGetProducts';

const deleteProduct = async (deleteDoctor: DeleteProductArgumentsDTO) => {
  await productService.deleteProduct(deleteDoctor);
};

export const useDeleteProduct = (): UseMutationResult<
  unknown,
  unknown,
  DeleteProductArgumentsDTO
> => {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(productsKey.details());
    },
  });
};
