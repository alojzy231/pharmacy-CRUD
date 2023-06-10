import { DeleteHospitalArgumentsDTO } from '@dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { hospitalService } from '@api/services/HospitalService';
import { hospitalsKey } from '@features/Dashboard/api/queries/useGetHospitals';

const deleteHospital = async (deleteHospital: DeleteHospitalArgumentsDTO) => {
  await hospitalService.deleteHospital(deleteHospital);
};

export const useDeleteHospital = (): UseMutationResult<
  unknown,
  unknown,
  DeleteHospitalArgumentsDTO
> => {
  const queryClient = useQueryClient();

  return useMutation(deleteHospital, {
    onSuccess: () => {
      queryClient.invalidateQueries(hospitalsKey.details());
    },
  });
};
