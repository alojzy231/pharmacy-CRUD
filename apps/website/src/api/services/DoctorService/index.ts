import { GetDoctorsResultDTO, AddDoctorArgumentsDTO } from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class DoctorService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addDoctor(data: AddDoctorArgumentsDTO) {
    return this.api.post<AddDoctorArgumentsDTO>('/add-doctor', { data });
  }
  getDoctors() {
    return this.api.get<GetDoctorsResultDTO>('/get-doctors');
  }
}

export const doctorService = new DoctorService();
