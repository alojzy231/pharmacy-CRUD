import { Prisma, Product } from '@pharmacy-crud/prisma-client';
import { AxiosResponse } from 'axios';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class ProductService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addProduct(data: Prisma.ProductCreateInput) {
    return this.api.post<Prisma.ProductCreateInput>('/add-product', { data });
  }
  getProducts() {
    return this.api.get<AxiosResponse<Product>>('/get-products');
  }
}

export const productService = new ProductService();
