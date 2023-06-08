import { AddProductArgumentsDTO, DeleteProductArgumentsDTO, GetProductsResultDTO } from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class ProductService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addProduct(data: AddProductArgumentsDTO) {
    return this.api.post<AddProductArgumentsDTO>('/add-product', { data });
  }
  getProducts() {
    return this.api.get<GetProductsResultDTO>('/get-products');
  }
  deleteProduct(data: DeleteProductArgumentsDTO) {
    return this.api.delete<DeleteProductArgumentsDTO>('/delete-products', { data });
  }
}

export const productService = new ProductService();
