import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { NestedEnumProductCategoryFilterObjectSchema } from './NestedEnumProductCategoryFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumProductCategoryFilter> = z
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
        z.lazy(() => NestedEnumProductCategoryFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumProductCategoryFilterObjectSchema = Schema;
