import { z } from 'zod';
import { ProductCreateWithoutSubstitutesInputObjectSchema } from './ProductCreateWithoutSubstitutesInput.schema';
import { ProductUncheckedCreateWithoutSubstitutesInputObjectSchema } from './ProductUncheckedCreateWithoutSubstitutesInput.schema';
import { ProductCreateOrConnectWithoutSubstitutesInputObjectSchema } from './ProductCreateOrConnectWithoutSubstitutesInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedManyWithoutSubstitutesInput> =
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
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductCreateNestedManyWithoutSubstitutesInputObjectSchema =
  Schema;
