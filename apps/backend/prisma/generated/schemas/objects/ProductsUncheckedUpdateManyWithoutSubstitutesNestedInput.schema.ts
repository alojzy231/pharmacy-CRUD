import { z } from "zod";
import { ProductsCreateWithoutSubstitutesInputObjectSchema } from "./ProductsCreateWithoutSubstitutesInput.schema";
import { ProductsUncheckedCreateWithoutSubstitutesInputObjectSchema } from "./ProductsUncheckedCreateWithoutSubstitutesInput.schema";
import { ProductsCreateOrConnectWithoutSubstitutesInputObjectSchema } from "./ProductsCreateOrConnectWithoutSubstitutesInput.schema";
import { ProductsUpsertWithWhereUniqueWithoutSubstitutesInputObjectSchema } from "./ProductsUpsertWithWhereUniqueWithoutSubstitutesInput.schema";
import { ProductsWhereUniqueInputObjectSchema } from "./ProductsWhereUniqueInput.schema";
import { ProductsUpdateWithWhereUniqueWithoutSubstitutesInputObjectSchema } from "./ProductsUpdateWithWhereUniqueWithoutSubstitutesInput.schema";
import { ProductsUpdateManyWithWhereWithoutSubstitutesInputObjectSchema } from "./ProductsUpdateManyWithWhereWithoutSubstitutesInput.schema";
import { ProductsScalarWhereInputObjectSchema } from "./ProductsScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsUncheckedUpdateManyWithoutSubstitutesNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductsUpsertWithWhereUniqueWithoutSubstitutesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProductsUpsertWithWhereUniqueWithoutSubstitutesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProductsUpdateWithWhereUniqueWithoutSubstitutesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProductsUpdateWithWhereUniqueWithoutSubstitutesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProductsUpdateManyWithWhereWithoutSubstitutesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProductsUpdateManyWithWhereWithoutSubstitutesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductsScalarWhereInputObjectSchema),
          z.lazy(() => ProductsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductsUncheckedUpdateManyWithoutSubstitutesNestedInputObjectSchema =
  Schema;
