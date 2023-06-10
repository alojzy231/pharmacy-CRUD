import { GetRoleResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { authService } from '@api/services/AuthService';

export const roleKey = {
  all: ['roles'] as const,
  details: () => [...roleKey.all, 'details'] as const,
};

export type UseGetRoleResult = GetRoleResultDTO;

export const getRole = async (): Promise<GetRoleResultDTO> => {
  const { data } = await authService.getRole();

  return data;
};

export const useGetRole = (): UseQueryResult<UseGetRoleResult> =>
  useQuery(roleKey.details(), getRole);
