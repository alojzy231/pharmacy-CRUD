import { type Doctor, type Hospital, type Product } from '@prisma/client';

export const SEARCH_RESULT_KEYS = {
  doctor: 'doctor',
  hospital: 'hospital',
  product: 'product',
} as const;

export type SearchResultDTO = {
  [SEARCH_RESULT_KEYS.product]: Product[];
  [SEARCH_RESULT_KEYS.hospital]: Hospital[];
  [SEARCH_RESULT_KEYS.doctor]: (Doctor & {
    hospital: Hospital;
  })[];
};
