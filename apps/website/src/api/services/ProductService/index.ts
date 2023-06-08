import { AxiosResponse } from 'axios';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';
import {
  AddHospitalArgumentsDTO,
  AddProductArgumentsDTO,
  GetHospitalsResultDTO,
  GetProductsResultDTO,
} from '@dto';

class ProductService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addProduct(data: AddProductArgumentsDTO) {
    return this.api.post<AddProductArgumentsDTO>('/add-product', { data });
  }
  getProducts() {
    return this.api.get<AxiosResponse<GetProductsResultDTO>>('/get-products');
  }
  addHospital(data: AddHospitalArgumentsDTO) {
    return this.api.post<AddHospitalArgumentsDTO>('/add-hospital', { data });
  }
  getHospitals() {
    return this.api.get<AxiosResponse<GetHospitalsResultDTO>>('/get-hospitals');
  }
}

export const productService = new ProductService();
