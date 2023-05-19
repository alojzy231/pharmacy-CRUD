import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutSubstitutesInputObjectSchema } from './ProductUpdateWithoutSubstitutesInput.schema';
import { ProductUncheckedUpdateWithoutSubstitutesInputObjectSchema } from './ProductUncheckedUpdateWithoutSubstitutesInput.schema';
import { ProductCreateWithoutSubstitutesInputObjectSchema } from './ProductCreateWithoutSubstitutesInput.schema';
import { ProductUncheckedCreateWithoutSubstitutesInputObjectSchema } from './ProductUncheckedCreateWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutSubstitutesInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductUpdateWithoutSubstitutesInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutSubstitutesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductCreateWithoutSubstitutesInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutSubstitutesInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpsertWithWhereUniqueWithoutSubstitutesInputObjectSchema =
  Schema;
