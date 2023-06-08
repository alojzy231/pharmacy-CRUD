import { type Doctor, type Hospital, type Product } from '@prisma/client';

export type SearchArgumentsDTO = {
  searchPhrase: string;
};

type TYPE = 'doctor' | 'hospital' | 'product';

export type SearchResultDTO = ((Product | Doctor | Hospital) & { type: TYPE })[];
