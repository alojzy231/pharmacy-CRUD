import { type Doctor, type Hospital } from '@prisma/client';

export type GetDoctorsResultDTO = (Doctor & {
  hospital: Hospital;
})[];
