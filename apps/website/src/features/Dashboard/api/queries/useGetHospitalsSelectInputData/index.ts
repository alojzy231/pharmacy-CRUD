import { GetHospitalsResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { productService } from '@api/services/ProductService';

export const hospitalsNamesKey = {
  all: ['hospitals names'] as const,
  details: () => [...hospitalsNamesKey.all, 'details'] as const,
};

const getHospitalsNames = async () => {
  const { data } = await productService.getHospitals();

  return data;
};

export type UseGetHospitalsSelectInputDataResult = ({
  value: string;
} & Omit<GetHospitalsResultDTO[number], 'id'>)[];
const select = (data: GetHospitalsResultDTO): UseGetHospitalsSelectInputDataResult =>
  data.map(({ id, ...restData }) => ({ value: String(id), ...restData }));

export const useGetHospitalsSelectInputData =
  (): UseQueryResult<UseGetHospitalsSelectInputDataResult> =>
    useQuery(hospitalsNamesKey.details(), getHospitalsNames, { select });
