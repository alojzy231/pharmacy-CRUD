import { GetUsersResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { userService } from '@api/services/UserService';

export const usersKey = {
  all: ['user'] as const,
  details: () => [...usersKey.all, 'details'] as const,
};

const getUsers = async () => {
  const { data } = await userService.getUsers();

  return data;
};

export const useGetUsers = (): UseQueryResult<GetUsersResultDTO> =>
  useQuery(usersKey.details(), getUsers);
