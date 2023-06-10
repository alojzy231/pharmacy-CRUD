import { DeleteDoctorArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { doctorService } from '@api/services/DoctorService';
import { doctorsKey } from '@features/Dashboard/api/queries/useGetDoctors';

const deleteDoctor = async (deleteDoctor: DeleteDoctorArgumentsDTO) => {
  await doctorService.deleteDoctor(deleteDoctor);
};

export const useDeleteDoctor = (): UseMutationResult<
  unknown,
  unknown,
  DeleteDoctorArgumentsDTO
> => {
  const queryClient = useQueryClient();

  return useMutation(deleteDoctor, {
    onSuccess: () => {
      queryClient.invalidateQueries(doctorsKey.details());
    },
  });
};
