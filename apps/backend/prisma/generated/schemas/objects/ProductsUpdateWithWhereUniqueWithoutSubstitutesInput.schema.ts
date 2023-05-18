import { z } from "zod";
import { ProductsWhereUniqueInputObjectSchema } from "./ProductsWhereUniqueInput.schema";
import { ProductsUpdateWithoutSubstitutesInputObjectSchema } from "./ProductsUpdateWithoutSubstitutesInput.schema";
import { ProductsUncheckedUpdateWithoutSubstitutesInputObjectSchema } from "./ProductsUncheckedUpdateWithoutSubstitutesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsUpdateWithWhereUniqueWithoutSubstitutesInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateWithoutSubstitutesInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedUpdateWithoutSubstitutesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProductsUpdateWithWhereUniqueWithoutSubstitutesInputObjectSchema =
  Schema;
