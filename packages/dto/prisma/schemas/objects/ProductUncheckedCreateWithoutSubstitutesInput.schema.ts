import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutSubstitutesInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      quantity: z.number(),
      price: z.number(),
      isPrescriptionNeeded: z.boolean(),
      category: z.string(),
      type: z.string(),
      substitutedBy: z
        .lazy(
          () =>
            ProductUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProductUncheckedCreateWithoutSubstitutesInputObjectSchema = Schema;
