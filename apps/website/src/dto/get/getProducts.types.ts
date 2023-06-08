import { type Product } from '@prisma/client';

export type GetProductsResultDTO = { data: Product[] };
