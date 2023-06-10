import { apiConfig } from '@config/apiConfig';

import { HttpClient } from '../HttpClient';

export abstract class PharmacyCRUDClientApiClient extends HttpClient {
  protected constructor() {
    // TODO: write config for api url
    super(apiConfig.NEXT_PUBLIC_API_URL, '/api');
  }
}
