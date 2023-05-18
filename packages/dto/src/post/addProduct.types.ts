import z from 'zod';

import { ProductsCreateOneSchema } from "@schemas/createOneProducts.schema";

export type AddProductDTO = z.infer<typeof ProductsCreateOneSchema>['data']