import { z } from 'zod';
import { ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';
import { ProductsOrderByWithAggregationInputObjectSchema } from './objects/ProductsOrderByWithAggregationInput.schema';
import { ProductsScalarWhereWithAggregatesInputObjectSchema } from './objects/ProductsScalarWhereWithAggregatesInput.schema';
import { ProductsScalarFieldEnumSchema } from './enums/ProductsScalarFieldEnum.schema';

export const ProductsGroupBySchema = z.object({
  where: ProductsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProductsOrderByWithAggregationInputObjectSchema,
      ProductsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProductsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProductsScalarFieldEnumSchema),
});
