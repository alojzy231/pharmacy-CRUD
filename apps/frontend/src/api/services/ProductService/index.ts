import { AddProductDTO } from '@pharmacy-crud/dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class ProductService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addProduct(data: AddProductDTO) {
    return this.api.post<AddProductDTO>('/add-product', { data });
  }
}

export const productService = new ProductService();
