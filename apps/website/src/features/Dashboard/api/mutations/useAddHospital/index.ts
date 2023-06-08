import { AddHospitalArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { hospitalService } from '@api/services/HospitalService';
import { hospitalsKey } from '@features/Dashboard/api/queries/useGetHospitals';

const addHospital = async (addHospital: AddHospitalArgumentsDTO) => {
  await hospitalService.addHospital(addHospital);
};

export const useAddHospital = (): UseMutationResult<unknown, unknown, AddHospitalArgumentsDTO> => {
  const queryClient = useQueryClient();

  return useMutation(addHospital, {
    onSuccess: () => {
      queryClient.invalidateQueries(hospitalsKey.details());
    },
  });
};
