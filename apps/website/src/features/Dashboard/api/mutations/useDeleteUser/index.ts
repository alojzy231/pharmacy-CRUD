import { DeleteUserArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { userService } from '@api/services/UserService';
import { usersKey } from '@features/Dashboard/api/queries/useGetUsers';

const deleteUser = async (deleteUser: DeleteUserArgumentsDTO) => {
  await userService.deleteUser(deleteUser);
};

export const useDeleteUser = (): UseMutationResult<unknown, unknown, DeleteUserArgumentsDTO> => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(usersKey.details());
    },
  });
};
