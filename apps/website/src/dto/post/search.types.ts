import { type Doctor, type Hospital, type Product } from '@prisma/client';

export type SearchArgumentsDTO = {
  query: string;
};

export type SearchResultDTO = {
  product: Product[];
  hospital: Hospital[];
  doctor: Doctor[];
};
