import { ProductsCreateInputObjectSchema } from '@pharmacy-crud/dto/dist';
import z from 'zod';

export const schema = ProductsCreateInputObjectSchema;

export type FieldValues = z.infer<typeof schema>;

export const defaultValues: FieldValues = {
  category: undefined,
  isPrescriptionNeeded: false,
  name: undefined,
  price: undefined,
  quantity: 0,
  type: undefined,
};
