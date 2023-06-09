import { GetDoctorArgumentsDTO, GetDoctorResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { doctorService } from '@api/services/DoctorService';

export const doctorKey = {
  all: ['doctors'] as const,
  details: () => [...doctorKey.all, 'details'] as const,
};

export type UseGetDoctorResult = GetDoctorResultDTO;

const getDoctor = async (queryData: GetDoctorArgumentsDTO) => {
  const { data } = await doctorService.getDoctor(queryData);

  return data;
};

export const useGetDoctor = (data: GetDoctorArgumentsDTO): UseQueryResult<UseGetDoctorResult> =>
  useQuery(doctorKey.details(), () => getDoctor(data));
