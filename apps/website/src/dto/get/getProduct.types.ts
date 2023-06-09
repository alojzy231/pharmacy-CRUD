import { type Product } from '@prisma/client';

export type GetProductResultDTO = Product | null;
export type GetProductArgumentsDTO = {
  id: string;
};
