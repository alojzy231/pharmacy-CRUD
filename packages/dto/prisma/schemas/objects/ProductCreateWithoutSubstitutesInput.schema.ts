import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { ProductCreateNestedManyWithoutSubstitutesInputObjectSchema } from './ProductCreateNestedManyWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutSubstitutesInput> = z
  .object({
    name: z.string(),
    quantity: z.number(),
    price: z.number(),
    isPrescriptionNeeded: z.boolean(),
    category: z.lazy(() => ProductCategorySchema),
    type: z.lazy(() => ProductTypeSchema),
    substitutedBy: z
      .lazy(() => ProductCreateNestedManyWithoutSubstitutesInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateWithoutSubstitutesInputObjectSchema = Schema;
