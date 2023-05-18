import { z } from 'zod';
import { ProductsCreateWithoutSubstitutedByInputObjectSchema } from './ProductsCreateWithoutSubstitutedByInput.schema';
import { ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema } from './ProductsUncheckedCreateWithoutSubstitutedByInput.schema';
import { ProductsCreateOrConnectWithoutSubstitutedByInputObjectSchema } from './ProductsCreateOrConnectWithoutSubstitutedByInput.schema';
import { ProductsUpsertWithWhereUniqueWithoutSubstitutedByInputObjectSchema } from './ProductsUpsertWithWhereUniqueWithoutSubstitutedByInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithWhereUniqueWithoutSubstitutedByInputObjectSchema } from './ProductsUpdateWithWhereUniqueWithoutSubstitutedByInput.schema';
import { ProductsUpdateManyWithWhereWithoutSubstitutedByInputObjectSchema } from './ProductsUpdateManyWithWhereWithoutSubstitutedByInput.schema';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithoutSubstitutedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductsCreateWithoutSubstitutedByInputObjectSchema),
          z
            .lazy(() => ProductsCreateWithoutSubstitutedByInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsUncheckedCreateWithoutSubstitutedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductsCreateOrConnectWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsCreateOrConnectWithoutSubstitutedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductsUpsertWithWhereUniqueWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsUpsertWithWhereUniqueWithoutSubstitutedByInputObjectSchema,
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
              ProductsUpdateWithWhereUniqueWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsUpdateWithWhereUniqueWithoutSubstitutedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProductsUpdateManyWithWhereWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsUpdateManyWithWhereWithoutSubstitutedByInputObjectSchema,
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

export const ProductsUpdateManyWithoutSubstitutedByNestedInputObjectSchema =
  Schema;
