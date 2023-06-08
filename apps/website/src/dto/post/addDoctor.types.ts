import { Prisma } from '@prisma/client';

export type AddDoctorArgumentsDTO = Prisma.DoctorCreateInput & {
  hospitalId: number;
};
