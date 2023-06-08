import axios, { AxiosInstance } from 'axios';

export abstract class HttpClient {
  protected api: AxiosInstance;

  protected constructor(baseUrl: string, path: string) {
    this.api = axios.create({ baseURL: `${baseUrl}${path}` });
  }
}
