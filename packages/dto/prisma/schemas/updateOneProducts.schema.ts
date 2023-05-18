import { z } from 'zod';
import { ProductsUpdateInputObjectSchema } from './objects/ProductsUpdateInput.schema';
import { ProductsUncheckedUpdateInputObjectSchema } from './objects/ProductsUncheckedUpdateInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';

export const ProductsUpdateOneSchema = z.object({
  data: z.union([
    ProductsUpdateInputObjectSchema,
    ProductsUncheckedUpdateInputObjectSchema,
  ]),
  where: ProductsWhereUniqueInputObjectSchema,
});
