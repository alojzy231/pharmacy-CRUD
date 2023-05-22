import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumProductCategoryFilterObjectSchema } from './EnumProductCategoryFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumProductTypeFilterObjectSchema } from './EnumProductTypeFilter.schema';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    isPrescriptionNeeded: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    category: z
      .union([
        z.lazy(() => EnumProductCategoryFilterObjectSchema),
        z.lazy(() => ProductCategorySchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumProductTypeFilterObjectSchema),
        z.lazy(() => ProductTypeSchema),
      ])
      .optional(),
    substitutes: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
    substitutedBy: z
      .lazy(() => ProductListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ProductWhereInputObjectSchema = Schema;
