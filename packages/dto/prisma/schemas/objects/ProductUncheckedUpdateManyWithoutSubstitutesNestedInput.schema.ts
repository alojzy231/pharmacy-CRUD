import { z } from 'zod';
import { ProductCreateWithoutSubstitutesInputObjectSchema } from './ProductCreateWithoutSubstitutesInput.schema';
import { ProductUncheckedCreateWithoutSubstitutesInputObjectSchema } from './ProductUncheckedCreateWithoutSubstitutesInput.schema';
import { ProductCreateOrConnectWithoutSubstitutesInputObjectSchema } from './ProductCreateOrConnectWithoutSubstitutesInput.schema';
import { ProductUpsertWithWhereUniqueWithoutSubstitutesInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutSubstitutesInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutSubstitutesInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutSubstitutesInput.schema';
import { ProductUpdateManyWithWhereWithoutSubstitutesInputObjectSchema } from './ProductUpdateManyWithWhereWithoutSubstitutesInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutSubstitutesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutSubstitutesInputObjectSchema),
          z
            .lazy(() => ProductCreateWithoutSubstitutesInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductUncheckedCreateWithoutSubstitutesInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductUncheckedCreateWithoutSubstitutesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductCreateOrConnectWithoutSubstitutesInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductCreateOrConnectWithoutSubstitutesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductUpsertWithWhereUniqueWithoutSubstitutesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductUpsertWithWhereUniqueWithoutSubstitutesInputObjectSchema,
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
              ProductUpdateWithWhereUniqueWithoutSubstitutesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductUpdateWithWhereUniqueWithoutSubstitutesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProductUpdateManyWithWhereWithoutSubstitutesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductUpdateManyWithWhereWithoutSubstitutesInputObjectSchema,
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

export const ProductUncheckedUpdateManyWithoutSubstitutesNestedInputObjectSchema =
  Schema;
