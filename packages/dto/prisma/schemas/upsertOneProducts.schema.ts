import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';
import { ProductsCreateInputObjectSchema } from './objects/ProductsCreateInput.schema';
import { ProductsUncheckedCreateInputObjectSchema } from './objects/ProductsUncheckedCreateInput.schema';
import { ProductsUpdateInputObjectSchema } from './objects/ProductsUpdateInput.schema';
import { ProductsUncheckedUpdateInputObjectSchema } from './objects/ProductsUncheckedUpdateInput.schema';

export const ProductsUpsertSchema = z.object({
  where: ProductsWhereUniqueInputObjectSchema,
  create: z.union([
    ProductsCreateInputObjectSchema,
    ProductsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProductsUpdateInputObjectSchema,
    ProductsUncheckedUpdateInputObjectSchema,
  ]),
});
