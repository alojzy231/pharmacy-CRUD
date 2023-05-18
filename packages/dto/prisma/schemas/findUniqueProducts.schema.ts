import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';

export const ProductsFindUniqueSchema = z.object({
  where: ProductsWhereUniqueInputObjectSchema,
});
