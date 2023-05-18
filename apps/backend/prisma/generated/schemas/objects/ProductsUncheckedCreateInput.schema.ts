import { z } from "zod";
import { ProductsUncheckedCreateNestedManyWithoutSubstitutedByInputObjectSchema } from "./ProductsUncheckedCreateNestedManyWithoutSubstitutedByInput.schema";
import { ProductsUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema } from "./ProductsUncheckedCreateNestedManyWithoutSubstitutesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsUncheckedCreateInput> = z
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
          ProductsUncheckedCreateNestedManyWithoutSubstitutedByInputObjectSchema
      )
      .optional(),
    substitutedBy: z
      .lazy(
        () =>
          ProductsUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const ProductsUncheckedCreateInputObjectSchema = Schema;
