import { GetHospitalArgumentsDTO, GetHospitalResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { hospitalService } from '@api/services/HospitalService';

export const hospitalKey = {
  all: ['hospitals'] as const,
  details: () => [...hospitalKey.all, 'details'] as const,
};

export type UseGetHospitalResult = GetHospitalResultDTO;

export const getHospital = async (
  queryData: GetHospitalArgumentsDTO
): Promise<GetHospitalResultDTO> => {
  const { data } = await hospitalService.getHospital(queryData);

  return data;
};

export const useGetHospital = (
  data: GetHospitalArgumentsDTO
): UseQueryResult<UseGetHospitalResult> => useQuery(hospitalKey.details(), () => getHospital(data));
