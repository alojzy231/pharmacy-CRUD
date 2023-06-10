import { GetUsersResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { userService } from '@api/services/UserService';

export const userKey = {
  all: ['user'] as const,
  details: () => [...userKey.all, 'details'] as const,
};

const getUsers = async () => {
  const { data } = await userService.getUsers();

  return data;
};

export const useGetUsers = (): UseQueryResult<GetUsersResultDTO> =>
  useQuery(userKey.details(), getUsers);
