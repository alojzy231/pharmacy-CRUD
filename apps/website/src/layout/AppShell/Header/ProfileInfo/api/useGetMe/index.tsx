import { GetMeResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { authService } from '@api/services/AuthService';

export const meKey = {
  all: ['me'] as const,
  details: () => [...meKey.all, 'details'] as const,
};

export type UseGetMeResult = GetMeResultDTO;

export const getMe = async (): Promise<GetMeResultDTO> => {
  const { data } = await authService.getMe();

  return data;
};

export const useGetMe = (): UseQueryResult<UseGetMeResult> => useQuery(meKey.details(), getMe);
