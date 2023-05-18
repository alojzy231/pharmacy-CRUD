import { z } from 'zod';
import { ProductsCreateNestedManyWithoutSubstitutesInputObjectSchema } from './ProductsCreateNestedManyWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsCreateWithoutSubstitutesInput> = z
  .object({
    name: z.string(),
    quantity: z.string(),
    price: z.number(),
    isPrescriptionNeeded: z.boolean(),
    category: z.string(),
    type: z.string(),
    substitutedBy: z
      .lazy(() => ProductsCreateNestedManyWithoutSubstitutesInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductsCreateWithoutSubstitutesInputObjectSchema = Schema;
