import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutSubstitutedByInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutSubstitutedByInput.schema';
import { ProductUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    quantity: z.number(),
    price: z.number(),
    isPrescriptionNeeded: z.boolean(),
    category: z.string(),
    type: z.string(),
    substitutes: z
      .lazy(
        () =>
          ProductUncheckedCreateNestedManyWithoutSubstitutedByInputObjectSchema,
      )
      .optional(),
    substitutedBy: z
      .lazy(
        () =>
          ProductUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateInputObjectSchema = Schema;
