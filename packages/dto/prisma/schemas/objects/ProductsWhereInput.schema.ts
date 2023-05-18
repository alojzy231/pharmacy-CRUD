import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { ProductsListRelationFilterObjectSchema } from './ProductsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductsWhereInputObjectSchema),
        z.lazy(() => ProductsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductsWhereInputObjectSchema),
        z.lazy(() => ProductsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    quantity: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    isPrescriptionNeeded: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    category: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    substitutes: z
      .lazy(() => ProductsListRelationFilterObjectSchema)
      .optional(),
    substitutedBy: z
      .lazy(() => ProductsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ProductsWhereInputObjectSchema = Schema;
