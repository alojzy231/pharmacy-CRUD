import { z } from 'zod';
import { ProductsCreateInputObjectSchema } from './objects/ProductsCreateInput.schema';
import { ProductsUncheckedCreateInputObjectSchema } from './objects/ProductsUncheckedCreateInput.schema';

export const ProductsCreateOneSchema = z.object({
  data: z.union([
    ProductsCreateInputObjectSchema,
    ProductsUncheckedCreateInputObjectSchema,
  ]),
});
