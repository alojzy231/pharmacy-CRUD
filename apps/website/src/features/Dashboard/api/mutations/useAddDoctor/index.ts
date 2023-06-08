import { AddDoctorArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { productService } from '@api/services/ProductService';

import { doctorsKey } from '../../queries/useGetDoctors';

const addDoctor = async (addDoctor: AddDoctorArgumentsDTO) => {
  await productService.addDoctor(addDoctor);
};

export const useAddDoctor = (): UseMutationResult<unknown, unknown, AddDoctorArgumentsDTO> => {
  const queryClient = useQueryClient();

  return useMutation(addDoctor, {
    onSuccess: () => {
      queryClient.invalidateQueries(doctorsKey.details());
    },
  });
};
