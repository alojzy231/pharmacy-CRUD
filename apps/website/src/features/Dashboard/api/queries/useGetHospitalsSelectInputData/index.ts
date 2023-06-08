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

export type UseGetHospitalsSelectInputDataResult = {
  value: string;
  label: GetHospitalsResultDTO[number]['name'];
}[];
const select = (data: GetHospitalsResultDTO): UseGetHospitalsSelectInputDataResult =>
  data.map(({ id, name }) => ({ label: name, value: String(id) }));

export const useGetHospitalsSelectInputData =
  (): UseQueryResult<UseGetHospitalsSelectInputDataResult> =>
    useQuery(hospitalsNamesKey.details(), getHospitalsNames, { select });
