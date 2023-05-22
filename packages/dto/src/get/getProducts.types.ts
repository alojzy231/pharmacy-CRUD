import z from "zod";
import { ProductOrderByWithRelationInputObjectSchema } from "@schemas/objects/ProductOrderByWithRelationInput.schema";

export type GetProductsResultDTO = z.infer<
  typeof ProductOrderByWithRelationInputObjectSchema
>[];
