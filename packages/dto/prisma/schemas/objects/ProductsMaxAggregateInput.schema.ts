import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    price: z.literal(true).optional(),
    isPrescriptionNeeded: z.literal(true).optional(),
    category: z.literal(true).optional(),
    type: z.literal(true).optional(),
  })
  .strict();

export const ProductsMaxAggregateInputObjectSchema = Schema;
