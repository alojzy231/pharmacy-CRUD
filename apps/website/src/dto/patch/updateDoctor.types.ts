import { Prisma } from '@prisma/client';

export type UpdateDoctorArgumentsDTO = Prisma.DoctorUpdateInput & { id: string };
