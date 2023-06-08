import { SearchResultDTO } from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class SearchService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  getAll() {
    return this.api.get<SearchResultDTO>(`/get-all`);
  }
}

export const searchService = new SearchService();
