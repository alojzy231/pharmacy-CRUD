import { Prisma } from '@prisma/client';

export type UpdateProductArgumentsDTO = Prisma.ProductUpdateInput & { id: string };
