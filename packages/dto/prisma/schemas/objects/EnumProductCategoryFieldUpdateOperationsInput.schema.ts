import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumProductCategoryFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => ProductCategorySchema).optional(),
    })
    .strict();

export const EnumProductCategoryFieldUpdateOperationsInputObjectSchema = Schema;
