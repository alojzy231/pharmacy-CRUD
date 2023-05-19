import { GetProductsResultDTO } from "@pharmacy-crud/dto";
import { prisma } from "../../client";

export const getProducts = async (): Promise<
  GetProductsResultDTO | undefined
> => {
  try {
    return await prisma.product.findMany();
  } catch (error) {
    console.error(`Error getting all products: ${error}`);
  } finally {
    prisma.$disconnect();
  }
};
