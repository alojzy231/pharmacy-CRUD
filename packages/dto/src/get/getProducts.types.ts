import { AddProductDTO } from "../post";

export type GetProductsResultDTO = AddProductDTO[] & {
  id: number;
};
