import { z } from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductTypeSchema } from '../enums/ProductType.schema';
import { ProductCreateNestedManyWithoutSubstitutedByInputObjectSchema } from './ProductCreateNestedManyWithoutSubstitutedByInput.schema';
import { ProductCreateNestedManyWithoutSubstitutesInputObjectSchema } from './ProductCreateNestedManyWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateInput> = z
  .object({
    name: z.string(),
    quantity: z.number(),
    price: z.number(),
    isPrescriptionNeeded: z.boolean(),
    category: z.lazy(() => ProductCategorySchema),
    type: z.lazy(() => ProductTypeSchema),
    substitutes: z
      .lazy(() => ProductCreateNestedManyWithoutSubstitutedByInputObjectSchema)
      .optional(),
    substitutedBy: z
      .lazy(() => ProductCreateNestedManyWithoutSubstitutesInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateInputObjectSchema = Schema;
