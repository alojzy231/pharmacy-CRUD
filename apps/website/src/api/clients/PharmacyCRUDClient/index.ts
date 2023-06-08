import { HttpClient } from '../HttpClient';

export abstract class PharmacyCRUDClientApiClient extends HttpClient {
  protected constructor() {
    // TODO: write config for api url
    super(process.env.NEXT_PUBLIC_API_URL as string, '/api');
  }
}
