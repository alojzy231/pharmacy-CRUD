import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ProductsOrderByRelationAggregateInputObjectSchema } from "./ProductsOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProductsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    isPrescriptionNeeded: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    substitutes: z
      .lazy(() => ProductsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    substitutedBy: z
      .lazy(() => ProductsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductsOrderByWithRelationInputObjectSchema = Schema;
