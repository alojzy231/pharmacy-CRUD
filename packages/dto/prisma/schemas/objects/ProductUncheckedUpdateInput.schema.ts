import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutSubstitutedByNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutSubstitutedByNestedInput.schema';
import { ProductUncheckedUpdateManyWithoutSubstitutesNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutSubstitutesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
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
      .lazy(
        () =>
          ProductUncheckedUpdateManyWithoutSubstitutedByNestedInputObjectSchema,
      )
      .optional(),
    substitutedBy: z
      .lazy(
        () =>
          ProductUncheckedUpdateManyWithoutSubstitutesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedUpdateInputObjectSchema = Schema;