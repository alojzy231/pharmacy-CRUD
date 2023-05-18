import { z } from "zod";
import { ProductsWhereUniqueInputObjectSchema } from "./ProductsWhereUniqueInput.schema";
import { ProductsUpdateWithoutSubstitutedByInputObjectSchema } from "./ProductsUpdateWithoutSubstitutedByInput.schema";
import { ProductsUncheckedUpdateWithoutSubstitutedByInputObjectSchema } from "./ProductsUncheckedUpdateWithoutSubstitutedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsUpdateWithWhereUniqueWithoutSubstitutedByInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateWithoutSubstitutedByInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedUpdateWithoutSubstitutedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProductsUpdateWithWhereUniqueWithoutSubstitutedByInputObjectSchema =
  Schema;
