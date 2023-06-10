import { UpdateDoctorArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { doctorService } from '@api/services/DoctorService';

import { doctorsKey } from '../../queries/useGetDoctors';

const updateDoctor = async (updateDoctor: UpdateDoctorArgumentsDTO) => {
  await doctorService.updateDoctor(updateDoctor);
};

export const useUpdateDoctor = (): UseMutationResult<
  unknown,
  unknown,
  UpdateDoctorArgumentsDTO
> => {
  const queryClient = useQueryClient();

  return useMutation(updateDoctor, {
    onSuccess: () => {
      queryClient.invalidateQueries(doctorsKey.details());
    },
  });
};
