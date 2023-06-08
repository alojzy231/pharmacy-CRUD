import { Prisma } from '@prisma/client';

export type AddDoctorArgumentsDTO = Omit<Prisma.DoctorCreateInput, 'hospital'> & {
  hospitalId: number;
};
