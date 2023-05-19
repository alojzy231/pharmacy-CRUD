import { AddProductDTO, GetProductsResultDTO } from '@pharmacy-crud/dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class ProductService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addProduct(data: AddProductDTO) {
    return this.api.post<AddProductDTO>('/add-product', { data });
  }
  getProducts() {
    return this.api.get<GetProductsResultDTO>('/get-products');
  }
}

export const productService = new ProductService();
