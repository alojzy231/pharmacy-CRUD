import {
  AddHospitalArgumentsDTO,
  DeleteHospitalArgumentsDTO,
  GetHospitalArgumentsDTO,
  GetHospitalResultDTO,
  GetHospitalsResultDTO,
  UpdateHospitalArgumentsDTO,
} from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class HospitalService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addHospital(data: AddHospitalArgumentsDTO) {
    return this.api.post<AddHospitalArgumentsDTO>('/add-hospital', { data });
  }
  getHospital(data: GetHospitalArgumentsDTO) {
    return this.api.get<GetHospitalResultDTO>(`/get-hospital/${data.id}`);
  }
  getHospitals() {
    return this.api.get<GetHospitalsResultDTO>('/get-hospitals');
  }
  deleteHospital(data: DeleteHospitalArgumentsDTO) {
    return this.api.delete(`/delete-hospital/${data.id}`);
  }
  updateHospital(data: UpdateHospitalArgumentsDTO) {
    return this.api.patch<UpdateHospitalArgumentsDTO>(`/update-hospital/${data.id}`, { data });
  }
}

export const hospitalService = new HospitalService();
