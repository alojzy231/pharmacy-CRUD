import { z } from "zod";
import { ProductsWhereUniqueInputObjectSchema } from "./ProductsWhereUniqueInput.schema";
import { ProductsUpdateWithoutSubstitutesInputObjectSchema } from "./ProductsUpdateWithoutSubstitutesInput.schema";
import { ProductsUncheckedUpdateWithoutSubstitutesInputObjectSchema } from "./ProductsUncheckedUpdateWithoutSubstitutesInput.schema";
import { ProductsCreateWithoutSubstitutesInputObjectSchema } from "./ProductsCreateWithoutSubstitutesInput.schema";
import { ProductsUncheckedCreateWithoutSubstitutesInputObjectSchema } from "./ProductsUncheckedCreateWithoutSubstitutesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsUpsertWithWhereUniqueWithoutSubstitutesInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductsUpdateWithoutSubstitutesInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedUpdateWithoutSubstitutesInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductsCreateWithoutSubstitutesInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedCreateWithoutSubstitutesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProductsUpsertWithWhereUniqueWithoutSubstitutesInputObjectSchema =
  Schema;
