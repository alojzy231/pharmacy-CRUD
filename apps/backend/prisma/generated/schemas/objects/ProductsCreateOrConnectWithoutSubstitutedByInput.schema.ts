import { z } from "zod";
import { ProductsWhereUniqueInputObjectSchema } from "./ProductsWhereUniqueInput.schema";
import { ProductsCreateWithoutSubstitutedByInputObjectSchema } from "./ProductsCreateWithoutSubstitutedByInput.schema";
import { ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema } from "./ProductsUncheckedCreateWithoutSubstitutedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsCreateOrConnectWithoutSubstitutedByInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductsCreateWithoutSubstitutedByInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProductsCreateOrConnectWithoutSubstitutedByInputObjectSchema =
  Schema;
