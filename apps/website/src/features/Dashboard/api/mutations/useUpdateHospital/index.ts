import { UpdateHospitalArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { hospitalService } from '@api/services/HospitalService';

import { hospitalsKey } from '../../queries/useGetHospitals';

const updateHospital = async (updateHospital: UpdateHospitalArgumentsDTO) => {
  await hospitalService.updateHospital(updateHospital);
};

export const useUpdateHospital = (): UseMutationResult<
  unknown,
  unknown,
  UpdateHospitalArgumentsDTO
> => {
  const queryClient = useQueryClient();

  return useMutation(updateHospital, {
    onSuccess: () => {
      queryClient.invalidateQueries(hospitalsKey.details());
    },
  });
};
