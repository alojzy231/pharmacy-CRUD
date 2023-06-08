import { GetHospitalsResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { productService } from '@api/services/ProductService';

export const hospitalsKey = {
  all: ['hospitals'] as const,
  details: () => [...hospitalsKey.all, 'details'] as const,
};

const getHospitals = async () => {
  const { data } = await productService.getHospitals();

  return data;
};

export const useGetHospitals = (): UseQueryResult<GetHospitalsResultDTO> =>
  useQuery(hospitalsKey.details(), getHospitals);
