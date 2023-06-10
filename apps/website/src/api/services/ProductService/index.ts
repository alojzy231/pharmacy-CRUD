import {
  AddProductArgumentsDTO,
  DeleteProductArgumentsDTO,
  GetProductsResultDTO,
  GetProductResultDTO,
  GetProductArgumentsDTO,
  UpdateProductArgumentsDTO,
} from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class ProductService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addProduct(data: AddProductArgumentsDTO) {
    return this.api.post<AddProductArgumentsDTO>('/add-product', { data });
  }
  getProduct(data: GetProductArgumentsDTO) {
    return this.api.get<GetProductResultDTO>(`/get-product/${data.id}`);
  }
  getProducts() {
    return this.api.get<GetProductsResultDTO>(`/get-products`);
  }
  deleteProduct(data: DeleteProductArgumentsDTO) {
    return this.api.delete(`/delete-product/${data.id}`);
  }
  updateProduct(data: UpdateProductArgumentsDTO) {
    return this.api.patch<UpdateProductArgumentsDTO>(`/update-product/${data.id}`, { data });
  }
}

export const productService = new ProductService();
