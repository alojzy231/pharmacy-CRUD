import z from "zod";
import { ProductOrderByWithRelationInputObjectSchema } from "@schemas/objects/ProductOrderByWithRelationInput.schema";

export type GetProductsDTO = z.infer<
  typeof ProductOrderByWithRelationInputObjectSchema
>;
