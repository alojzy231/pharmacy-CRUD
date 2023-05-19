import { AddProductDTO } from '@pharmacy-crud/dto';
import { useMutation } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { productService } from '@api/services/ProductService';

const addProduct = async (addProduct: AddProductDTO) => {
  await productService.addProduct(addProduct);
};

export const useAddProduct = (): UseMutationResult<unknown, unknown, AddProductDTO> =>
  useMutation(addProduct);
