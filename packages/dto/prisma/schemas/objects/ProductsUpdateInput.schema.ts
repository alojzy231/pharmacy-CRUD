import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ProductsUpdateManyWithoutSubstitutedByNestedInputObjectSchema } from './ProductsUpdateManyWithoutSubstitutedByNestedInput.schema';
import { ProductsUpdateManyWithoutSubstitutesNestedInputObjectSchema } from './ProductsUpdateManyWithoutSubstitutesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    quantity: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isPrescriptionNeeded: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    category: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    substitutes: z
      .lazy(() => ProductsUpdateManyWithoutSubstitutedByNestedInputObjectSchema)
      .optional(),
    substitutedBy: z
      .lazy(() => ProductsUpdateManyWithoutSubstitutesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductsUpdateInputObjectSchema = Schema;
