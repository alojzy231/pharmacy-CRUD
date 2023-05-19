import { z } from 'zod';
import { ProductCreateWithoutSubstitutedByInputObjectSchema } from './ProductCreateWithoutSubstitutedByInput.schema';
import { ProductUncheckedCreateWithoutSubstitutedByInputObjectSchema } from './ProductUncheckedCreateWithoutSubstitutedByInput.schema';
import { ProductCreateOrConnectWithoutSubstitutedByInputObjectSchema } from './ProductCreateOrConnectWithoutSubstitutedByInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedManyWithoutSubstitutedByInput> =
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
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductCreateNestedManyWithoutSubstitutedByInputObjectSchema =
  Schema;
