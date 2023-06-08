import { GetDoctorsResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { doctorService } from '@api/services/DoctorService';

export const doctorsKey = {
  all: ['hospitals'] as const,
  details: () => [...doctorsKey.all, 'details'] as const,
};

const getDoctors = async () => {
  const { data } = await doctorService.getDoctors();

  return data;
};

export const useGetDoctors = (): UseQueryResult<GetDoctorsResultDTO> =>
  useQuery(doctorsKey.details(), getDoctors);
