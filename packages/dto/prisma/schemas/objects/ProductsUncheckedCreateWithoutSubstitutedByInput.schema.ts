import { z } from 'zod';
import { ProductsUncheckedCreateNestedManyWithoutSubstitutedByInputObjectSchema } from './ProductsUncheckedCreateNestedManyWithoutSubstitutedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUncheckedCreateWithoutSubstitutedByInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      quantity: z.string(),
      price: z.number(),
      isPrescriptionNeeded: z.boolean(),
      category: z.string(),
      type: z.string(),
      substitutes: z
        .lazy(
          () =>
            ProductsUncheckedCreateNestedManyWithoutSubstitutedByInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema =
  Schema;
