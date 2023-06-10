import { type Doctor, type Hospital, type Product } from '@prisma/client';

export const GET_ALL_KEYS = {
  doctor: 'doctor',
  hospital: 'hospital',
  product: 'product',
} as const;

export type GetAllResultDTO = {
  [GET_ALL_KEYS.product]: Product[];
  [GET_ALL_KEYS.hospital]: Hospital[];
  [GET_ALL_KEYS.doctor]: (Doctor & {
    hospital: Hospital;
  })[];
};
