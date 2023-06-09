import { GetDoctorsResultDTO } from '@dto';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { convertEnumToString } from '@utils/convertEnumToString';

import { doctorService } from '@api/services/DoctorService';

export const doctorsNamesKey = {
  all: ['doctors names'] as const,
  details: () => [...doctorsNamesKey.all, 'details'] as const,
};

const getDoctorsNames = async () => {
  const { data } = await doctorService.getDoctors();

  return data;
};

export type UseGetDoctorsSelectInputDataResult = {
  value: string;
  label: string;
  description: string;
}[];
const select = (data: GetDoctorsResultDTO): UseGetDoctorsSelectInputDataResult =>
  data.map(({ hospital: { city, name: hospitalName }, id, lastName, name, profession }) => ({
    description: `${convertEnumToString(profession)} | ${hospitalName} ${city}`,
    label: `${name} ${lastName}`,
    value: String(id),
  }));

export const useGetDoctorsSelectInputData =
  (): UseQueryResult<UseGetDoctorsSelectInputDataResult> =>
    useQuery(doctorsNamesKey.details(), getDoctorsNames, { select });
