import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    isPrescriptionNeeded: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    substitutes: z
      .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
    substitutedBy: z
      .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;
