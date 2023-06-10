import { Prisma } from '@prisma/client';

export type UpdateUserArgumentsDTO = Prisma.UserUpdateInput & { id: number };
