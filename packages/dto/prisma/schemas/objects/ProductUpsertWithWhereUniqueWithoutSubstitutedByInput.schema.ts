import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutSubstitutedByInputObjectSchema } from './ProductUpdateWithoutSubstitutedByInput.schema';
import { ProductUncheckedUpdateWithoutSubstitutedByInputObjectSchema } from './ProductUncheckedUpdateWithoutSubstitutedByInput.schema';
import { ProductCreateWithoutSubstitutedByInputObjectSchema } from './ProductCreateWithoutSubstitutedByInput.schema';
import { ProductUncheckedCreateWithoutSubstitutedByInputObjectSchema } from './ProductUncheckedCreateWithoutSubstitutedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutSubstitutedByInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductUpdateWithoutSubstitutedByInputObjectSchema),
        z.lazy(
          () => ProductUncheckedUpdateWithoutSubstitutedByInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductCreateWithoutSubstitutedByInputObjectSchema),
        z.lazy(
          () => ProductUncheckedCreateWithoutSubstitutedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductUpsertWithWhereUniqueWithoutSubstitutedByInputObjectSchema =
  Schema;
