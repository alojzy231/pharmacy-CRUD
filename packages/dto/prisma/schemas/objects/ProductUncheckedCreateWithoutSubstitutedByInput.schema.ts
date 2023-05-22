import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { ProductUncheckedCreateNestedManyWithoutSubstitutedByInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutSubstitutedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutSubstitutedByInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      quantity: z.number(),
      price: z.number(),
      isPrescriptionNeeded: z.boolean(),
      category: z.lazy(() => ProductCategorySchema),
      type: z.lazy(() => ProductTypeSchema),
      substitutes: z
        .lazy(
          () =>
            ProductUncheckedCreateNestedManyWithoutSubstitutedByInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProductUncheckedCreateWithoutSubstitutedByInputObjectSchema =
  Schema;
