import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutSubstitutedByInputObjectSchema } from './ProductCreateWithoutSubstitutedByInput.schema';
import { ProductUncheckedCreateWithoutSubstitutedByInputObjectSchema } from './ProductUncheckedCreateWithoutSubstitutedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutSubstitutedByInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutSubstitutedByInputObjectSchema),
        z.lazy(
          () => ProductUncheckedCreateWithoutSubstitutedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutSubstitutedByInputObjectSchema =
  Schema;
