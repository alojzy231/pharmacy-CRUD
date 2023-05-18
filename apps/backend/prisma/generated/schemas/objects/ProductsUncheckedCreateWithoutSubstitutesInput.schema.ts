import { z } from "zod";
import { ProductsUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema } from "./ProductsUncheckedCreateNestedManyWithoutSubstitutesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsUncheckedCreateWithoutSubstitutesInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      quantity: z.string(),
      price: z.number(),
      isPrescriptionNeeded: z.boolean(),
      category: z.string(),
      type: z.string(),
      substitutedBy: z
        .lazy(
          () =>
            ProductsUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const ProductsUncheckedCreateWithoutSubstitutesInputObjectSchema =
  Schema;
