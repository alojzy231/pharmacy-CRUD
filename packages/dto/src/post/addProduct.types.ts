import z from 'zod';

import { ProductCreateInputObjectSchema } from "@schemas/objects/ProductCreateInput.schema";

export type AddProductDTO = z.infer<typeof ProductCreateInputObjectSchema>