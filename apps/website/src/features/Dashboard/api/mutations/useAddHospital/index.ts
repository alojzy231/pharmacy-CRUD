import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseMutationResult } from '@tanstack/react-query/src/types';

import { productService } from '@api/services/ProductService';
import { AddHospitalArgumentsDTO } from '@dto';
import { hospitalsKey } from '@features/Dashboard/api/queries/useGetHospitals';

const addHospital = async (addHospital: AddHospitalArgumentsDTO) => {
  await productService.addHospital(addHospital);
};

export const useAddHospital = (): UseMutationResult<unknown, unknown, AddHospitalArgumentsDTO> => {
  const queryClient = useQueryClient();

  return useMutation(addHospital, {
    onSuccess: () => {
      queryClient.invalidateQueries(hospitalsKey.details());
    },
  });
};
