import { AddHospitalArgumentsDTO, DeleteHospitalArgumentsDTO, GetHospitalsResultDTO } from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class HospitalService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addHospital(data: AddHospitalArgumentsDTO) {
    return this.api.post<AddHospitalArgumentsDTO>('/add-hospital', { data });
  }
  getHospitals() {
    return this.api.get<GetHospitalsResultDTO>('/get-hospitals');
  }
  deleteHospital(data: DeleteHospitalArgumentsDTO) {
    return this.api.delete<DeleteHospitalArgumentsDTO>(`/delete-hospital/${data.id}`);
  }
}

export const hospitalService = new HospitalService();
