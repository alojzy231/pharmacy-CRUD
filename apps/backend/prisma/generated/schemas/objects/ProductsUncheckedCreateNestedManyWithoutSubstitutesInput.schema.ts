import { z } from "zod";
import { ProductsCreateWithoutSubstitutesInputObjectSchema } from "./ProductsCreateWithoutSubstitutesInput.schema";
import { ProductsUncheckedCreateWithoutSubstitutesInputObjectSchema } from "./ProductsUncheckedCreateWithoutSubstitutesInput.schema";
import { ProductsCreateOrConnectWithoutSubstitutesInputObjectSchema } from "./ProductsCreateOrConnectWithoutSubstitutesInput.schema";
import { ProductsWhereUniqueInputObjectSchema } from "./ProductsWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsUncheckedCreateNestedManyWithoutSubstitutesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductsCreateWithoutSubstitutesInputObjectSchema),
          z
            .lazy(() => ProductsCreateWithoutSubstitutesInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductsUncheckedCreateWithoutSubstitutesInputObjectSchema
          ),
          z
            .lazy(
              () => ProductsUncheckedCreateWithoutSubstitutesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductsCreateOrConnectWithoutSubstitutesInputObjectSchema
          ),
          z
            .lazy(
              () => ProductsCreateOrConnectWithoutSubstitutesInputObjectSchema
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

export const ProductsUncheckedCreateNestedManyWithoutSubstitutesInputObjectSchema =
  Schema;
