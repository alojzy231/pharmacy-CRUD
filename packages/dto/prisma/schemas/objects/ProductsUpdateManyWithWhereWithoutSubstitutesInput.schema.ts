import { z } from 'zod';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';
import { ProductsUpdateManyMutationInputObjectSchema } from './ProductsUpdateManyMutationInput.schema';
import { ProductsUncheckedUpdateManyWithoutSubstitutedByInputObjectSchema } from './ProductsUncheckedUpdateManyWithoutSubstitutedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithWhereWithoutSubstitutesInput> =
  z
    .object({
      where: z.lazy(() => ProductsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProductsUncheckedUpdateManyWithoutSubstitutedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsUpdateManyWithWhereWithoutSubstitutesInputObjectSchema =
  Schema;
