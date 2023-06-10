import {
  AddUserArgumentsDTO,
  DeleteUserArgumentsDTO,
  GetUsersResultDTO,
  UpdateUserArgumentsDTO,
} from '@dto';

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
  deleteUser(data: DeleteUserArgumentsDTO) {
    return this.api.delete(`/delete-user/${data.id}`);
  }
  updateUser(data: UpdateUserArgumentsDTO) {
    return this.api.patch<UpdateUserArgumentsDTO>(`/update-user/${data.id}`, { data });
  }
}

export const userService = new UserService();
