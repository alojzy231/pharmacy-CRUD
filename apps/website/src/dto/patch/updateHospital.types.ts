import { Prisma } from '@prisma/client';

export type UpdateHospitalArgumentsDTO = Prisma.HospitalUpdateInput & { id: string };
