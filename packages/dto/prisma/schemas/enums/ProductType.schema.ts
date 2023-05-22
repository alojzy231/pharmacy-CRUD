import { z } from 'zod';

export const ProductTypeSchema = z.enum([
  'MEDICINE',
  'COSMETIC',
  'FOOD',
  'OTHER',
]);
