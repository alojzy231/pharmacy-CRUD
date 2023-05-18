import { z } from 'zod';
import { ProductsOrderByWithRelationInputObjectSchema } from './objects/ProductsOrderByWithRelationInput.schema';
import { ProductsWhereInputObjectSchema } from './objects/ProductsWhereInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './objects/ProductsWhereUniqueInput.schema';
import { ProductsScalarFieldEnumSchema } from './enums/ProductsScalarFieldEnum.schema';

export const ProductsFindManySchema = z.object({
  orderBy: z
    .union([
      ProductsOrderByWithRelationInputObjectSchema,
      ProductsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductsWhereInputObjectSchema.optional(),
  cursor: ProductsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProductsScalarFieldEnumSchema).optional(),
});
