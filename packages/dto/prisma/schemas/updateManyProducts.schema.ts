import { z } from 'zod';
import { ProductsUpdateManyMutationInputObjectSchema } from './objects/ProductsUpdateManyMutationInput.schema';
import { ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';

export const ProductsUpdateManySchema = z.object({
  data: ProductsUpdateManyMutationInputObjectSchema,
  where: ProductsWhereInputObjectSchema.optional(),
});
