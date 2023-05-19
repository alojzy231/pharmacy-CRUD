import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutSubstitutesInputObjectSchema } from './ProductUpdateWithoutSubstitutesInput.schema';
import { ProductUncheckedUpdateWithoutSubstitutesInputObjectSchema } from './ProductUncheckedUpdateWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutSubstitutesInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductUpdateWithoutSubstitutesInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutSubstitutesInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpdateWithWhereUniqueWithoutSubstitutesInputObjectSchema =
  Schema;
