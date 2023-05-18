import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    quantity: z.string(),
    price: z.number(),
    isPrescriptionNeeded: z.boolean(),
    category: z.string(),
    type: z.string(),
  })
  .strict();

export const ProductsCreateManyInputObjectSchema = Schema;
