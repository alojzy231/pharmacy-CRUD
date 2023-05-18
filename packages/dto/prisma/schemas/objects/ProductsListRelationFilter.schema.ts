import { z } from 'zod';
import { ProductsWhereInputObjectSchema } from './ProductsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsListRelationFilter> = z
  .object({
    every: z.lazy(() => ProductsWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProductsWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProductsWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProductsListRelationFilterObjectSchema = Schema;
