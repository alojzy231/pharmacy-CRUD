import { GetDoctorsResultDTO, AddDoctorArgumentsDTO, DeleteDoctorArgumentsDTO } from '@dto';

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
  deleteDoctor(data: DeleteDoctorArgumentsDTO) {
    return this.api.delete<DeleteDoctorArgumentsDTO>(`/delete-doctor/${data.id}`);
  }
}

export const doctorService = new DoctorService();
