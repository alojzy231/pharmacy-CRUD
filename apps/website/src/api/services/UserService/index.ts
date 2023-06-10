import { AddUserArgumentsDTO, GetUsersResultDTO } from '@dto';

import { PharmacyCRUDClientApiClient } from '@api/clients/PharmacyCRUDClient';

class UserService extends PharmacyCRUDClientApiClient {
  constructor() {
    super();
  }

  addUser(data: AddUserArgumentsDTO) {
    return this.api.post<AddUserArgumentsDTO>('/add-user', { data });
  }
  getUsers() {
    return this.api.get<GetUsersResultDTO>(`/get-users`);
  }
}

export const userService = new UserService();
