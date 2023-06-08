import {
  AddHospitalArgumentsDTO,
  AddProductArgumentsDTO,
  GetHospitalsResultDTO,
  GetProductsResultDTO,
} from '@dto';
import { AxiosResponse } from 'axios';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

import { GetDoctorsResultDTO } from '../../../dto/get/getDoctors.types';
import { AddDoctorArgumentsDTO } from '../../../dto/post/addDoctor.types';

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
  addDoctor(data: AddHospitalArgumentsDTO) {
    return this.api.post<AddDoctorArgumentsDTO>('/add-doctor', { data });
  }
  getDoctors() {
    return this.api.get<AxiosResponse<GetDoctorsResultDTO>>('/get-doctors');
  }
}

export const productService = new ProductService();
