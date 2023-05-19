import { z } from 'zod';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutSubstitutesInputObjectSchema } from './ProductUncheckedUpdateManyWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutSubstitutedByInput> =
  z
    .object({
      where: z.lazy(() => ProductScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ProductUncheckedUpdateManyWithoutSubstitutesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductUpdateManyWithWhereWithoutSubstitutedByInputObjectSchema =
  Schema;
