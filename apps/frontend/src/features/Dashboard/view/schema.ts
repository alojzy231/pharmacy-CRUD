import { ProductCategorySchema, ProductTypeSchema } from '@pharmacy-crud/dto';
import z from 'zod';

export const schema = z.object({
  category: ProductCategorySchema,
  isPrescriptionNeeded: z.boolean(),
  name: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
  type: ProductTypeSchema,
});

export type FieldValues = z.infer<typeof schema>;

const optionalFieldsSchema = z.object({
  category: ProductCategorySchema.optional(),
  type: ProductTypeSchema.optional(),
});

export const defaultValues: Omit<FieldValues, 'category' | 'type'> &
  z.infer<typeof optionalFieldsSchema> = {
  category: undefined,
  isPrescriptionNeeded: false,
  name: '',
  price: 0,
  quantity: 0,
  type: undefined,
};
