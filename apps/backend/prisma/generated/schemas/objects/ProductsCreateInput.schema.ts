import { z } from "zod";
import { ProductsCreateNestedManyWithoutSubstitutedByInputObjectSchema } from "./ProductsCreateNestedManyWithoutSubstitutedByInput.schema";
import { ProductsCreateNestedManyWithoutSubstitutesInputObjectSchema } from "./ProductsCreateNestedManyWithoutSubstitutesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsCreateInput> = z
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
    substitutedBy: z
      .lazy(() => ProductsCreateNestedManyWithoutSubstitutesInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductsCreateInputObjectSchema = Schema;
