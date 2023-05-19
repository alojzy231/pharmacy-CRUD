import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'quantity',
  'price',
  'isPrescriptionNeeded',
  'category',
  'type',
]);
