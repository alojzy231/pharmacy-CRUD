import { LoginArgumentsDTO } from '@dto';
import { useMutation } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { authService } from '@api/services/AuthService';

const addDoctor = async (login: LoginArgumentsDTO) => {
  await authService.login(login);
};

export const useLogin = (): UseMutationResult<unknown, unknown, LoginArgumentsDTO> =>
  useMutation(addDoctor);
