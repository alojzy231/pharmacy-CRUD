import { z } from 'zod';
import { ProductsCreateManyInputObjectSchema } from './objects/ProductsCreateManyInput.schema';

export const ProductsCreateManySchema = z.object({
  data: z.union([
    ProductsCreateManyInputObjectSchema,
    z.array(ProductsCreateManyInputObjectSchema),
  ]),
});
