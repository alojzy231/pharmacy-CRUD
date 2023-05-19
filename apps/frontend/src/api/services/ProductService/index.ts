import { AddProductDTO } from '@pharmacy-crud/dto';

import { PharmacyCRUDClientApiClient } from '../../clients/PharmacyCRUDClient';

class ProductService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addProduct() {
    return this.api.get<AddProductDTO>('/add-product');
  }
}

export const productService = new ProductService();
