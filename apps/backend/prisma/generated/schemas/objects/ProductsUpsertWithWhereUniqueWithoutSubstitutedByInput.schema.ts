import { z } from "zod";
import { ProductsWhereUniqueInputObjectSchema } from "./ProductsWhereUniqueInput.schema";
import { ProductsUpdateWithoutSubstitutedByInputObjectSchema } from "./ProductsUpdateWithoutSubstitutedByInput.schema";
import { ProductsUncheckedUpdateWithoutSubstitutedByInputObjectSchema } from "./ProductsUncheckedUpdateWithoutSubstitutedByInput.schema";
import { ProductsCreateWithoutSubstitutedByInputObjectSchema } from "./ProductsCreateWithoutSubstitutedByInput.schema";
import { ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema } from "./ProductsUncheckedCreateWithoutSubstitutedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsUpsertWithWhereUniqueWithoutSubstitutedByInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductsUpdateWithoutSubstitutedByInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedUpdateWithoutSubstitutedByInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductsCreateWithoutSubstitutedByInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProductsUpsertWithWhereUniqueWithoutSubstitutedByInputObjectSchema =
  Schema;
