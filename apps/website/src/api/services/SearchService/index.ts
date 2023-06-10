import { GetAllResultDTO } from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class SearchService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  getAll() {
    return this.api.get<GetAllResultDTO>(`/get-all`);
  }
}

export const searchService = new SearchService();
