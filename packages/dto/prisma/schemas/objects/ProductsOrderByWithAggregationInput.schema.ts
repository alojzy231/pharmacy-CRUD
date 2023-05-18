import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductsCountOrderByAggregateInputObjectSchema } from './ProductsCountOrderByAggregateInput.schema';
import { ProductsAvgOrderByAggregateInputObjectSchema } from './ProductsAvgOrderByAggregateInput.schema';
import { ProductsMaxOrderByAggregateInputObjectSchema } from './ProductsMaxOrderByAggregateInput.schema';
import { ProductsMinOrderByAggregateInputObjectSchema } from './ProductsMinOrderByAggregateInput.schema';
import { ProductsSumOrderByAggregateInputObjectSchema } from './ProductsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    isPrescriptionNeeded: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ProductsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProductsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProductsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ProductsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ProductsOrderByWithAggregationInputObjectSchema = Schema;
