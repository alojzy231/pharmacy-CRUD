import { z } from 'zod';
import { ProductCreateNestedManyWithoutSubstitutedByInputObjectSchema } from './ProductCreateNestedManyWithoutSubstitutedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutSubstitutedByInput> = z
  .object({
    name: z.string(),
    quantity: z.number(),
    price: z.number(),
    isPrescriptionNeeded: z.boolean(),
    category: z.string(),
    type: z.string(),
    substitutes: z
      .lazy(() => ProductCreateNestedManyWithoutSubstitutedByInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateWithoutSubstitutedByInputObjectSchema = Schema;
