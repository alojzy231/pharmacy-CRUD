import {
  GetDoctorsResultDTO,
  AddDoctorArgumentsDTO,
  DeleteDoctorArgumentsDTO,
  UpdateDoctorArgumentsDTO,
  GetDoctorArgumentsDTO,
  GetDoctorResultDTO,
} from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class DoctorService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addDoctor(data: AddDoctorArgumentsDTO) {
    return this.api.post<AddDoctorArgumentsDTO>('/add-doctor', { data });
  }
  getDoctor(data: GetDoctorArgumentsDTO) {
    return this.api.get<GetDoctorResultDTO>(`/get-doctor/${data.id}`);
  }
  getDoctors() {
    return this.api.get<GetDoctorsResultDTO>('/get-doctors');
  }
  deleteDoctor(data: DeleteDoctorArgumentsDTO) {
    return this.api.delete(`/delete-doctor/${data.id}`);
  }
  updateDoctor(data: UpdateDoctorArgumentsDTO) {
    return this.api.patch<UpdateDoctorArgumentsDTO>(`/update-doctor/${data.id}`, { data });
  }
}

export const doctorService = new DoctorService();
