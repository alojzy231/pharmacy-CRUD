import { z } from 'zod';
import { ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';

export const ProductsDeleteManySchema = z.object({
  where: ProductsWhereInputObjectSchema.optional(),
});
