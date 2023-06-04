import { AddProductArgumentsDTO, GetProductsResultDTO } from '@pharmacy-crud/dto';
import { Prisma } from '@pharmacy-crud/prisma-client';
import { AxiosResponse } from 'axios';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class ProductService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addProduct(data: Prisma.ProductCreateInput) {
    return this.api.post<AddProductArgumentsDTO>('/add-product', { data });
  }
  getProducts() {
    return this.api.get<AxiosResponse<GetProductsResultDTO>>('/get-products');
  }
}

export const productService = new ProductService();
