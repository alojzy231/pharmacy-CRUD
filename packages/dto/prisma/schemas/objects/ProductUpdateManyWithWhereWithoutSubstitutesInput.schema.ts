import { z } from 'zod';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutSubstitutedByInputObjectSchema } from './ProductUncheckedUpdateManyWithoutSubstitutedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutSubstitutesInput> =
  z
    .object({
      where: z.lazy(() => ProductScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ProductUncheckedUpdateManyWithoutSubstitutedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductUpdateManyWithWhereWithoutSubstitutesInputObjectSchema =
  Schema;
