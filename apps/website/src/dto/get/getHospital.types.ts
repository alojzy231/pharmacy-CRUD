import { type Hospital } from '@prisma/client';

export type GetHospitalResultDTO = Hospital | null;
export type GetHospitalArgumentsDTO = {
  id: string;
};
