import { z } from 'zod';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';
import { ProductsUpdateManyMutationInputObjectSchema } from './ProductsUpdateManyMutationInput.schema';
import { ProductsUncheckedUpdateManyWithoutSubstitutesInputObjectSchema } from './ProductsUncheckedUpdateManyWithoutSubstitutesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithWhereWithoutSubstitutedByInput> =
  z
    .object({
      where: z.lazy(() => ProductsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedUpdateManyWithoutSubstitutesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsUpdateManyWithWhereWithoutSubstitutedByInputObjectSchema =
  Schema;
