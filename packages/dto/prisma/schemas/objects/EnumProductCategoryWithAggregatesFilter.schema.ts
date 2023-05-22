import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { NestedEnumProductCategoryWithAggregatesFilterObjectSchema } from './NestedEnumProductCategoryWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProductCategoryFilterObjectSchema } from './NestedEnumProductCategoryFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumProductCategoryWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ProductCategorySchema).optional(),
    in: z
      .union([
        z.lazy(() => ProductCategorySchema).array(),
        z.lazy(() => ProductCategorySchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => ProductCategorySchema).array(),
        z.lazy(() => ProductCategorySchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => ProductCategorySchema),
        z.lazy(() => NestedEnumProductCategoryWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumProductCategoryFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumProductCategoryFilterObjectSchema).optional(),
  })
  .strict();

export const EnumProductCategoryWithAggregatesFilterObjectSchema = Schema;
