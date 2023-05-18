import { z } from "zod";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { FloatFieldUpdateOperationsInputObjectSchema } from "./FloatFieldUpdateOperationsInput.schema";
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema";
import { ProductsUncheckedUpdateManyWithoutSubstitutedByNestedInputObjectSchema } from "./ProductsUncheckedUpdateManyWithoutSubstitutedByNestedInput.schema";
import { ProductsUncheckedUpdateManyWithoutSubstitutesNestedInputObjectSchema } from "./ProductsUncheckedUpdateManyWithoutSubstitutesNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsUncheckedUpdateInput> = z
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
      .lazy(
        () =>
          ProductsUncheckedUpdateManyWithoutSubstitutedByNestedInputObjectSchema
      )
      .optional(),
    substitutedBy: z
      .lazy(
        () =>
          ProductsUncheckedUpdateManyWithoutSubstitutesNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const ProductsUncheckedUpdateInputObjectSchema = Schema;
