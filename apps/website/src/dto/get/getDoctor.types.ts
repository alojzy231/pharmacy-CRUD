import { type Doctor } from '@prisma/client';

export type GetDoctorResultDTO = Doctor | null;
export type GetDoctorArgumentsDTO = {
  id: string;
};
