import { type Doctor, type Hospital } from '@prisma/client';

export type GetDoctorsResultDTO = {
  data: (Doctor & {
    hospital: Hospital;
  })[];
};
