import { GetHospitalsResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { productService } from '@api/services/ProductService';

export const hospitalsNamesKey = {
  all: ['hospitals names'] as const,
  details: () => [...hospitalsNamesKey.all, 'details'] as const,
};

const getHospitalsNames = async () => {
  const { data } = await productService.getHospitals();

  return data?.map(({ id, name }) => ({ id, name }));
};

export type UseGetHospitalsNames = Pick<GetHospitalsResultDTO[0], 'name' | 'id'>[];

export const useGetHospitalsNames = (): UseQueryResult<UseGetHospitalsNames> =>
  useQuery(hospitalsNamesKey.details(), getHospitalsNames);
