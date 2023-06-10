import { clientConfig } from '@config/clientConfig';

import { HttpClient } from '../HttpClient';

export abstract class PharmacyCRUDClientApiClient extends HttpClient {
  protected constructor() {
    // TODO: write config for api url
    super(clientConfig.NEXT_PUBLIC_API_URL, '/api');
  }
}
