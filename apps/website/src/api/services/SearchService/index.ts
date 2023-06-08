import { SearchArgumentsDTO, SearchResultDTO } from '@dto';
import { AxiosResponse } from 'axios';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class SearchService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  search(data: SearchArgumentsDTO) {
    return this.api.post<SearchArgumentsDTO, AxiosResponse<SearchResultDTO>>(`/search`, { data });
  }
}

export const searchService = new SearchService();
