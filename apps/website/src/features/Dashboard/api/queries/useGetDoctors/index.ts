import { GetDoctorsResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { convertEnumToString } from '@utils/convertEnumToString';

import { doctorService } from '@api/services/DoctorService';

export const doctorsKey = {
  all: ['hospitals'] as const,
  details: () => [...doctorsKey.all, 'details'] as const,
};

export type UseGetDoctorsResult = (Omit<GetDoctorsResultDTO[number], 'profession'> & {
  profession: string;
})[];

const getDoctors = async () => {
  const { data } = await doctorService.getDoctors();

  return data;
};

function select(data: GetDoctorsResultDTO): UseGetDoctorsResult {
  if (data === undefined) return data;

  return data.map((doctor) => ({
    ...doctor,
    profession: convertEnumToString(doctor.profession),
  }));
}

export const useGetDoctors = (): UseQueryResult<UseGetDoctorsResult> =>
  useQuery(doctorsKey.details(), getDoctors, { select });
