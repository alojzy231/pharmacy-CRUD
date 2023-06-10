import { LoginArgumentsDTO } from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class AuthService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  login(data: LoginArgumentsDTO) {
    return this.api.post<LoginArgumentsDTO>(`/auth/login`, { data });
  }
}

export const authService = new AuthService();
