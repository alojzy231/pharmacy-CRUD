import z from 'zod';

import { ProductsCreateInputObjectSchema } from "@schemas/objects/ProductsCreateInput.schema";

export type AddProductDTO = z.infer<typeof ProductsCreateInputObjectSchema>