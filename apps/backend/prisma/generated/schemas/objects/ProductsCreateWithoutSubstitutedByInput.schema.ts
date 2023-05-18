import { z } from "zod";
import { ProductsCreateNestedManyWithoutSubstitutedByInputObjectSchema } from "./ProductsCreateNestedManyWithoutSubstitutedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsCreateWithoutSubstitutedByInput> = z
  .object({
    name: z.string(),
    quantity: z.string(),
    price: z.number(),
    isPrescriptionNeeded: z.boolean(),
    category: z.string(),
    type: z.string(),
    substitutes: z
      .lazy(() => ProductsCreateNestedManyWithoutSubstitutedByInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductsCreateWithoutSubstitutedByInputObjectSchema = Schema;
