import { z } from "zod";
import { ProductsWhereUniqueInputObjectSchema } from "./ProductsWhereUniqueInput.schema";
import { ProductsCreateWithoutSubstitutesInputObjectSchema } from "./ProductsCreateWithoutSubstitutesInput.schema";
import { ProductsUncheckedCreateWithoutSubstitutesInputObjectSchema } from "./ProductsUncheckedCreateWithoutSubstitutesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsCreateOrConnectWithoutSubstitutesInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductsCreateWithoutSubstitutesInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedCreateWithoutSubstitutesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProductsCreateOrConnectWithoutSubstitutesInputObjectSchema =
  Schema;
