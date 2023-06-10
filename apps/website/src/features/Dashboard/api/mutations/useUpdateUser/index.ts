import { UpdateUserArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { userService } from '@api/services/UserService';

import { usersKey } from '../../queries/useGetUsers';

const updateUser = async (updateUser: UpdateUserArgumentsDTO) => {
  await userService.updateUser(updateUser);
};

export const useUpdateUser = (): UseMutationResult<unknown, unknown, UpdateUserArgumentsDTO> => {
  const queryClient = useQueryClient();

  return useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(usersKey.details());
    },
  });
};
