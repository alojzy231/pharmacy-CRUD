import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductTypeSchema } from '../enums/ProductType.schema';
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
      category: z.lazy(() => ProductCategorySchema),
      type: z.lazy(() => ProductTypeSchema),
      substitutedBy: z
        .lazy(
          () =>
            ProductUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProductUncheckedCreateWithoutSubstitutesInputObjectSchema = Schema;
