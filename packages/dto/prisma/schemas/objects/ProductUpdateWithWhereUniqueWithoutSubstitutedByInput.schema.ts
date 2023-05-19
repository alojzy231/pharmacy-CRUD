import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutSubstitutedByInputObjectSchema } from './ProductUpdateWithoutSubstitutedByInput.schema';
import { ProductUncheckedUpdateWithoutSubstitutedByInputObjectSchema } from './ProductUncheckedUpdateWithoutSubstitutedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutSubstitutedByInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductUpdateWithoutSubstitutedByInputObjectSchema),
        z.lazy(
          () => ProductUncheckedUpdateWithoutSubstitutedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductUpdateWithWhereUniqueWithoutSubstitutedByInputObjectSchema =
  Schema;
