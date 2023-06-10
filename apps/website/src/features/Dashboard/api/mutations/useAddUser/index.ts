import { AddUserArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { userService } from '@api/services/UserService';

import { usersKey } from '../../queries/useGetUsers';

const addUser = async (addUser: AddUserArgumentsDTO) => {
  await userService.addUser(addUser);
};

export const useAddUser = (): UseMutationResult<unknown, unknown, AddUserArgumentsDTO> => {
  const queryClient = useQueryClient();

  return useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(usersKey.details());
    },
  });
};
