import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutSubstitutesInputObjectSchema } from './ProductCreateWithoutSubstitutesInput.schema';
import { ProductUncheckedCreateWithoutSubstitutesInputObjectSchema } from './ProductUncheckedCreateWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutSubstitutesInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutSubstitutesInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutSubstitutesInputObjectSchema),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutSubstitutesInputObjectSchema = Schema;
