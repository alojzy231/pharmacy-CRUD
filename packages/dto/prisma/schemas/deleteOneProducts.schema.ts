import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';

export const ProductsDeleteOneSchema = z.object({
  where: ProductsWhereUniqueInputObjectSchema,
});
