import { z } from "zod";
import { ProductsCreateWithoutSubstitutedByInputObjectSchema } from "./ProductsCreateWithoutSubstitutedByInput.schema";
import { ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema } from "./ProductsUncheckedCreateWithoutSubstitutedByInput.schema";
import { ProductsCreateOrConnectWithoutSubstitutedByInputObjectSchema } from "./ProductsCreateOrConnectWithoutSubstitutedByInput.schema";
import { ProductsWhereUniqueInputObjectSchema } from "./ProductsWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsCreateNestedManyWithoutSubstitutedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductsCreateWithoutSubstitutedByInputObjectSchema),
          z
            .lazy(() => ProductsCreateWithoutSubstitutedByInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema
          ),
          z
            .lazy(
              () => ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductsCreateOrConnectWithoutSubstitutedByInputObjectSchema
          ),
          z
            .lazy(
              () => ProductsCreateOrConnectWithoutSubstitutedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductsCreateNestedManyWithoutSubstitutedByInputObjectSchema =
  Schema;
