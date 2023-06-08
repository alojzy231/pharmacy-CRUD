import { GetHospitalsResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { hospitalService } from '@api/services/HospitalService';

export const hospitalsNamesKey = {
  all: ['hospitals names'] as const,
  details: () => [...hospitalsNamesKey.all, 'details'] as const,
};

const getHospitalsNames = async () => {
  const { data } = await hospitalService.getHospitals();

  return data;
};

export type UseGetHospitalsSelectInputDataResult = ({
  value: string;
  label: string;
} & Omit<GetHospitalsResultDTO[number], 'id' | 'name'>)[];
const select = (data: GetHospitalsResultDTO): UseGetHospitalsSelectInputDataResult =>
  data.map(({ id, name, ...restData }) => ({ label: name, value: String(id), ...restData }));

export const useGetHospitalsSelectInputData =
  (): UseQueryResult<UseGetHospitalsSelectInputDataResult> =>
    useQuery(hospitalsNamesKey.details(), getHospitalsNames, { select });
