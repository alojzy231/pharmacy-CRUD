import { z } from 'zod';
import { ProductCreateWithoutSubstitutedByInputObjectSchema } from './ProductCreateWithoutSubstitutedByInput.schema';
import { ProductUncheckedCreateWithoutSubstitutedByInputObjectSchema } from './ProductUncheckedCreateWithoutSubstitutedByInput.schema';
import { ProductCreateOrConnectWithoutSubstitutedByInputObjectSchema } from './ProductCreateOrConnectWithoutSubstitutedByInput.schema';
import { ProductUpsertWithWhereUniqueWithoutSubstitutedByInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutSubstitutedByInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutSubstitutedByInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutSubstitutedByInput.schema';
import { ProductUpdateManyWithWhereWithoutSubstitutedByInputObjectSchema } from './ProductUpdateManyWithWhereWithoutSubstitutedByInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutSubstitutedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutSubstitutedByInputObjectSchema),
          z
            .lazy(() => ProductCreateWithoutSubstitutedByInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductUncheckedCreateWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductUncheckedCreateWithoutSubstitutedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductCreateOrConnectWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductCreateOrConnectWithoutSubstitutedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductUpsertWithWhereUniqueWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductUpsertWithWhereUniqueWithoutSubstitutedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProductUpdateWithWhereUniqueWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductUpdateWithWhereUniqueWithoutSubstitutedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProductUpdateManyWithWhereWithoutSubstitutedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductUpdateManyWithWhereWithoutSubstitutedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductScalarWhereInputObjectSchema),
          z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductUncheckedUpdateManyWithoutSubstitutedByNestedInputObjectSchema =
  Schema;
