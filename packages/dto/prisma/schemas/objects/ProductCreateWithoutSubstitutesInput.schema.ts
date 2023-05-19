import { z } from 'zod';
import { ProductCreateNestedManyWithoutSubstitutesInputObjectSchema } from './ProductCreateNestedManyWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutSubstitutesInput> = z
  .object({
    name: z.string(),
    quantity: z.number(),
    price: z.number(),
    isPrescriptionNeeded: z.boolean(),
    category: z.string(),
    type: z.string(),
    substitutedBy: z
      .lazy(() => ProductCreateNestedManyWithoutSubstitutesInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateWithoutSubstitutesInputObjectSchema = Schema;
