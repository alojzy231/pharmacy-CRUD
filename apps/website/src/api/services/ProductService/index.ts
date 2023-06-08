import {
  AddHospitalArgumentsDTO,
  AddProductArgumentsDTO,
  GetHospitalsResultDTO,
  GetProductsResultDTO,
  GetDoctorsResultDTO,
  AddDoctorArgumentsDTO,
} from '@dto';

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
  addHospital(data: AddHospitalArgumentsDTO) {
    return this.api.post<AddHospitalArgumentsDTO>('/add-hospital', { data });
  }
  getHospitals() {
    return this.api.get<GetHospitalsResultDTO>('/get-hospitals');
  }
  addDoctor(data: AddDoctorArgumentsDTO) {
    return this.api.post<AddDoctorArgumentsDTO>('/add-doctor', { data });
  }
  getDoctors() {
    return this.api.get<GetDoctorsResultDTO>('/get-doctors');
  }
}

export const productService = new ProductService();
