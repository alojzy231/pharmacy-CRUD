import { z } from 'zod';
import { ProductsOrderByWithRelationInputObjectSchema } from './objects/ProductsOrderByWithRelationInput.schema';
import { ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';
import { ProductsCountAggregateInputObjectSchema } from './objects/ProductsCountAggregateInput.schema';
import { ProductsMinAggregateInputObjectSchema } from './objects/ProductsMinAggregateInput.schema';
import { ProductsMaxAggregateInputObjectSchema } from './objects/ProductsMaxAggregateInput.schema';
import { ProductsAvgAggregateInputObjectSchema } from './objects/ProductsAvgAggregateInput.schema';
import { ProductsSumAggregateInputObjectSchema } from './objects/ProductsSumAggregateInput.schema';

export const ProductsAggregateSchema = z.object({
  orderBy: z
    .union([
      ProductsOrderByWithRelationInputObjectSchema,
      ProductsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductsWhereInputObjectSchema.optional(),
  cursor: ProductsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProductsCountAggregateInputObjectSchema])
    .optional(),
  _min: ProductsMinAggregateInputObjectSchema.optional(),
  _max: ProductsMaxAggregateInputObjectSchema.optional(),
  _avg: ProductsAvgAggregateInputObjectSchema.optional(),
  _sum: ProductsSumAggregateInputObjectSchema.optional(),
});
