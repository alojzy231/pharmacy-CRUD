import { GetUsersResultDTO } from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class UserService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  getUsers() {
    return this.api.get<GetUsersResultDTO>(`/get-users`);
  }
}

export const userService = new UserService();
