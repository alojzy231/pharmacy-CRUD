import { z } from 'zod';

export const ProductsScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'quantity',
  'price',
  'isPrescriptionNeeded',
  'category',
  'type',
]);
