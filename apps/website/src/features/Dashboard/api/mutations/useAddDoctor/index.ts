import { AddDoctorArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { doctorService } from '@api/services/DoctorService';

import { doctorsKey } from '../../queries/useGetDoctors';

const addDoctor = async (addDoctor: AddDoctorArgumentsDTO) => {
  await doctorService.addDoctor(addDoctor);
};

export const useAddDoctor = (): UseMutationResult<unknown, unknown, AddDoctorArgumentsDTO> => {
  const queryClient = useQueryClient();

  return useMutation(addDoctor, {
    onSuccess: () => {
      queryClient.invalidateQueries(doctorsKey.details());
    },
  });
};
